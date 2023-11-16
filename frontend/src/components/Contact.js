import ContactImage from '../assets/contact-us.jpg';
import CardContent from './Card';
import '../styles/contact.css'
import NavBar from './Navbar';
import Footer from './Footer';

function Contact(){
    const arr=[
        {
            title: "Contact US",
            text: "We welcome your inquiries and feedback. Whether you have questions about our services, need assistance, or want to explore business opportunities, we're here for you. Reach out to us through email at support@yourjobnest.com or give us a call at 774-486-8766. Our office is located in Boston. Connect with us on social media to stay updated and join our vibrant community for discussions and insights. For business collaboration, drop us an email at partnerships@yourjobportal.com. Your satisfaction and engagement are our priorities. Thank you for choosing Your Job Nest!",
            image: ContactImage
        }
    ]
    return(
        <>
        <NavBar/>
        <div className="cardss">
            {arr.map(e=>{
            return(
                <CardContent title={e.title} text={e.text} image={e.image} imgClass="cardImg3"  cardClass="cardContact"/>
            )
        })}
        </div>
        <Footer/>
        </>
    );
}

export default Contact;