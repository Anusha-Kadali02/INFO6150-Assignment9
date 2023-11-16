import DeveloperImage from '../assets/developer.jpg';
import MarketingImage from '../assets/marketing.jpg';
import SupportImage from '../assets/support.webp';
import DataScienceImage from '../assets/datascience.jpg';
import DesignerImage from '../assets/UIUX.avif';
import HRImage from '../assets/HR.avif';
import QAImage from '../assets/QA.avif';
import WriterImage from '../assets/writer.jpg';
import FinanceImage from '../assets/financeanalyst.jpg';
import ProjectManagerImage from '../assets/projectmgmt.avif';
import CardContent from './Card';
import NavBar from './Navbar';
import Footer from './Footer';

function Jobs(){
    
    const arr=[
        {
          title: "Senior Frontend Developer",
          text: "Join our dynamic team as a Senior Frontend Developer! We are seeking an experienced individual with a passion for creating elegant and responsive user interfaces. If you have a strong background in React and enjoy collaborating with cross-functional teams, apply now.",
          image: DeveloperImage,
        },
        {
          title: "Marketing Specialist",
          text: "Are you a creative thinker with a knack for marketing strategies? We are looking for a Marketing Specialist to drive our brand awareness and lead generation efforts. From social media campaigns to content creation, this role offers a diverse set of responsibilities. Apply if you're ready to make an impact!",
          image: MarketingImage,
        },
        {
          title: "Customer Support Representative",
          text: "Provide top-notch help to our customers as a Customer Support Representative. If you excel in communication, problem-solving, and enjoy assisting others, this role is for you. Join our team and be the friendly face that ensures our customers have a positive experience.",
          image: SupportImage,
        },
        {
          title: "Data Scientist",
          text: "Unlock insights from data and drive data-driven decision-making processes. We are hiring a skilled Data Scientist to analyze large datasets, develop models, and provide valuable insights. If you have a passion for data and analytics, apply now.",
          image: DataScienceImage,
        },
        {
          title: "UX/UI Designer",
          text: "Craft exceptional user experiences and visually appealing interfaces as a UX/UI Designer. We are seeking a creative individual with a strong design portfolio and a keen eye for user-centric design. If you're passionate about creating seamless digital experiences, we want to hear from you.",
          image: DesignerImage,
        },
        {
          title: "HR Manager",
          text: "Play a key role in shaping our company culture as an HR Manager. From recruitment to employee engagement, this role involves various aspects of human resources. If you have HR expertise and are dedicated to fostering a positive workplace, apply now.",
          image: HRImage,
        },
        {
          title: "Software Quality Assurance Engineer",
          text: "Ensure the excellence of our software products as a QA Engineer. If you have a meticulous eye for detail, a passion for testing, and experience with testing frameworks, we want to hear from you. Join us in maintaining the highest standards of software quality.",
          image: QAImage,
        },
        {
          title: "Content Writer",
          text: "Craft compelling and engaging content across various platforms as a Content Writer. From blog posts to marketing materials, this role offers an opportunity to showcase your writing skills. If you have a way with words, apply now and be a part of our creative team.",
          image: WriterImage,
        },
        {
          title: "Finance Analyst",
          text: "Drive financial insights and contribute to strategic decision-making as a Finance Analyst. We are seeking an analytical mind with a strong financial background to join our finance team. If you're ready to make an impact in financial planning and analysis, apply now.",
          image: FinanceImage,
        },
        {
            title: "Project Manager",
            text: "Lead our projects to success as a Project Manager! If you excel in planning, organizing, and coordinating tasks across teams, this role is for you. Join our team and play a key role in ensuring the timely and successful completion of our projects.",
            image: ProjectManagerImage,
        }
      ]
      
    return (
        <>
        <NavBar/>
         <div className="cards">
            {arr.map(e=>{
            return(
                <CardContent title={e.title} text={e.text} image={e.image} imgClass="cardImg2" showButton={true} cardClass="card"/>
            )
        })}
        </div>
        <Footer/>
        </>
    );
}

export default Jobs;