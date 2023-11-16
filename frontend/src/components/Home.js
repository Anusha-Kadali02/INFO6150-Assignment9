import HomeImage from "../assets/home.png";
import Chip from "@mui/material/Chip";
import "../styles/home.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavBar from "./Navbar";
import Footer from "./Footer";
import GoogleImage from "../assets/google.png";
import  MetaImage from "../assets/meta.png";
import AppleImage from "../assets/apple.png";
import AmazonImage from "../assets/amazon.png";
import NetflixImage from "../assets/netflix.png";
import ResumeImage from "../assets/resume.png";
import MedalImage from "../assets/medal.png";
import HelpImage from "../assets/customer-service.png";
import CardContent from "./Card";

function Home() {

    const arr=[
        {
            title: "Resume Assessments",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: ResumeImage
        },
        {
            title: "Job Fit Scoring",
            text: "Curabitur eu augue vel augue fermentum gravida vel vitae libero. Maecenas fringilla ante ac elit ullamcorper, vel lacinia nisl tristique. Nullam nec sagittis purus.",
            image: MedalImage
        },
        {
            title: "Top-Notch Help",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: HelpImage
        }
    ]

  return (
    <>
    <NavBar/>
      <div className="home-divide">
        <div className="home-left">
          <Chip label="Build your future with us" />
          <h1>Get your dream job with Job Nest.</h1>
          <p className="home-desc">
            Find Jobs, create trackable resumes and enrich your applications
          </p>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <br></br>
          <p className="home-desc">
            Popular Categories:
            <Chip label="Customer Services" color="primary" variant="outlined" className="chip"/>
            <Chip label="Project Management" color="primary" variant="outlined" className="chip" />
            <Chip label="Development" color="primary" variant="outlined" className="chip"/>
          </p>
        </div>
        <div className="home-right">
          <img src={HomeImage} alt="Home" className="home-img" />
        </div>
      </div>
      <div className="companies">
        <p className="heading1">These companies partnered with us to drive growth.</p>
        <div class="image-container">
        <img class="image" src={MetaImage} alt="meta"/>
        <img class="image" src={AmazonImage} alt="amazon"/>
        <img class="image" src={AppleImage} alt="apple"/>
        <img class="image" src={NetflixImage} alt="netflix"/>
        <img class="image" src={GoogleImage} alt="google"/>
    </div>
      </div>
      <p className="heading1">How Job Nest Works.</p>
      <div className="cards">
            {arr.map(e=>{
            return(
                <CardContent title={e.title} text={e.text} image={e.image} imgClass="cardImg1" cardClass="card"/>
            )
        })}
        </div>
      <Footer/>
    </>
  );
}

export default Home;
