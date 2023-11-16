import Container from "react-bootstrap/Container";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet } from "react-router-dom";
import Avatarr from "../assets/woman.png";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from '@mui/material/IconButton';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


function NavBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  let isAuthenticated = false;

  console.log(token);

  if (token) {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken.exp)
        const currentTime = Math.floor(Date.now() / 1000);
        if (decodedToken.exp < currentTime) {
          isAuthenticated = false;
        }
        else{
          isAuthenticated = true;
        }
  } else {
    isAuthenticated = false;
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {

    localStorage.removeItem("token");
    navigate('/');
    handleClose();
  };

  return (
    <>
      <Navbar
        expand="lg"
        style={{
          borderBottom: "2px solid #712cf9",
          backgroundColor: "whitesmoke",
        }}
      >
        <Container fluid>
          <Navbar.Brand href="#">Job Nest</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              {isAuthenticated && (
                <>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/jobs">Jobs</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              {!isAuthenticated && (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                </>
              )}
            </Nav>
            <Nav>
              {isAuthenticated && (
                <>
                 <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={Avatarr}
                      onClick={handleClick}
                    />
                  </StyledBadge>
                  </IconButton>
                  <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
         <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </Menu>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBar;
