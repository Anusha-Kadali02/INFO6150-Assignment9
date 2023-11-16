import CardContent from "./Card"
import NeelimaImage from '../assets/neelima.png';
import AnushaImage from '../assets/anusha.png';
import HarshitaImage from '../assets/harshita.png';
import TanujaImage from '../assets/tanuja.png';
import AshritaImage from '../assets/ashrita.png'
import NikhilImage from '../assets/nikhil.png';
import VenuImage from '../assets/venu.png';
import ShivaImage from '../assets/shiva.png';
import '../styles/about.css'
import NavBar from "./Navbar";
import Footer from "./Footer";

function About(){
    const arr=[
        {
            title: "Anusha Kadali",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: AnushaImage
        },
        {
            title: "Shiva Kumar",
            text: "Curabitur eu augue vel augue fermentum gravida vel vitae libero. Maecenas fringilla ante ac elit ullamcorper, vel lacinia nisl tristique. Nullam nec sagittis purus.",
            image: ShivaImage
        },
        {
            title: "Harshita Ch",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: HarshitaImage
        },
        {
            title: "Nikhil AV",
            text: "Quisque sit amet urna at justo sagittis eleifend in vel purus. Aenean et ligula nec neque faucibus pharetra. In ultricies quam eu purus rhoncus, non dignissim ex feugiat.",
            image: NikhilImage
        },
        {
            title: "Neelima Reddy",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: NeelimaImage
        },
        {
            title: "Vennu Venu",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at mauris id mauris fermentum fermentum. Suspendisse vel diam auctor, cursus tortor vel, luctus velit.",
            image: VenuImage
        },
        {
            title: "Tanuja Maloth",
            text: "Vestibulum volutpat quam eget ante pulvinar, eu tristique tortor tincidunt. Integer nec tortor quis libero convallis bibendum. Nulla facilisi. Suspendisse potenti.",
            image: TanujaImage
        },
        {
            title: "Ashritha Jayanthi",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at mauris id mauris fermentum fermentum. Suspendisse vel diam auctor, cursus tortor vel, luctus velit.",
            image: AshritaImage
        }

    ]

    return(
        <>
        <NavBar/>
        <h1 className="heading"><span>About</span></h1>
        <p className="desc">Crafted with precision and user-centric design, is a cutting-edge platform developed by us. This innovative website seamlessly connects employers with talented professionals, providing a streamlined job search and recruitment experience. With its intuitive interface, robust features, and a commitment to user satisfaction, Nest Jobs transforms the hiring process into a seamless and efficient journey for both employers and job seekers.</p>
        <h1 className="heading"><span>Meet our dream team </span></h1>
         <p className="desc">Meet the driving force behind Job Nest: a team where diverse talents converge with a unified passion for innovation. Together, we're crafting a future that reflects our collective genius and defines the essence of Job Nest. Explore the faces and stories behind our journey toward excellence</p>
        <div className="cards">
            {arr.map(e=>{
            return(
                <CardContent title={e.title} text={e.text} image={e.image} imgClass="cardImg2" cardClass="card"/>
            )
        })}
        </div>
        <Footer/>
        </>
    );

}

export default About;