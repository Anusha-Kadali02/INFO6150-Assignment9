const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
dotenv.config();

const validateName = (name) => {
  if (!name) {
    return "Name is required";
  }
  if (name.length < 3) {
    return "Name should be at least 3 characters long.";
  }
  if (name.length > 20) {
    return "Name can't exceed 20 characters";
  }
  const alphabeticPattern = /^[a-zA-Z ]*$/;
  if (!alphabeticPattern.test(name)) {
    return "Name should contain only alphabetic characters";
  }
  return "Name is valid";
};

const validateEmail = (email) => {
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  if (!email) {
    return "Email is required";
  }
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }
  return "Email is valid";
};

const validatePassword = (password) => {
  if (!password) {
    return "Password is required";
  }
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  if (password.length > 30) {
    return "Password cannot exceed 30 characters.";
  }
  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter.";
  }
  if (!/\d/.test(password)) {
    return "Password must contain at least one digit.";
  }
  if (!/[!@#$%^&*]/.test(password)) {
    return "Password must contain at least one special character.";
  }
  if (/\s/.test(password)) {
    return "Password should not contain spaces.";
  }
  return "Password is valid";
};

const getAllUsersService = async () => {
  try {
    const users = await userModel.find();
    return users;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};

const createUserService = async (name, email, password) => {
  const nameValidationMessage = validateName(name);
  if (nameValidationMessage !== "Name is valid") {
    throw new Error(nameValidationMessage);
  }

  const emailValidationMessage = validateEmail(email);
  if (emailValidationMessage !== "Email is valid") {
    throw new Error(emailValidationMessage);
  }

  const passwordValidationMessage = validatePassword(password);
  if (passwordValidationMessage !== "Password is valid") {
    throw new Error(passwordValidationMessage);
  }

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = new userModel({
    name: name,
    email: email,
    password: passwordHash,
  });

  await newUser.save();
  return { message: "User created successfully", newUser };
};

const updateUserService = async (email, name, password) => {
  const user = await userModel.findOne({ email });

  if (!user) {
    throw new Error("User email address not found");
  }

  const nameValidationMessage = validateName(name);
  if (nameValidationMessage !== "Name is valid") {
    throw new Error(nameValidationMessage);
  }

  const passwordValidationMessage = validatePassword(password);
  if (passwordValidationMessage !== "Password is valid") {
    throw new Error(passwordValidationMessage);
  }

  user.name = name;
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);
  user.password = passwordHash;

  await user.save();
  return { message: "User details updated successfully" };
};

const loginUserService = async (email, password) => {
  const user = await userModel.findOne({ email });

  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
  return { message: 'Login successful', token };
};

const deleteUserService = async (email) => {
  const user = await userModel.findOneAndDelete({ email });

  if (user) {
    return { message: "User successfully deleted" };
  } else {
    return { message: "User does not exist" };
  }
};

module.exports = {
  getAllUsersService,
  createUserService,
  updateUserService,
  loginUserService,
  deleteUserService,
};
