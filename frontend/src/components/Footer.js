import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer style={{borderTop: "2px solid #712cf9", backgroundColor: "whitesmoke"}}>
        <div className="footer-divide">
          <div className="footer-left">
            <p className='title'>Job Nest</p>
            <p>Sign up for our weekly newsletters!</p>
            <Form>
              <Row className="mb-3">
                <Col xs={12} md={8} className="input">
                  <Form.Control type="email" placeholder="Enter your email" />
                </Col>
                <Col xs={12} md={4}>
                  <Button variant="primary" type="submit">
                    Subscribe
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="footer-right">
            <p>Contact Us</p>
            <div className="contact-icons">
              <a href="https://www.facebook.com/"><FacebookIcon fontSize="large"/></a>
              <a href="https://www.twitter.com/"><TwitterIcon fontSize="large"/></a>
              <a href="https://www.linkedin.com/"><LinkedInIcon fontSize="large"/></a>
              <a href="https://www.instagram.com/"><InstagramIcon fontSize="large"/></a>
            </div>
          </div>
        </div>
      <div className="rights">
        <p>&copy; 2023 Copyrights Reserved</p>
        <address>1163 Boylston St, Boston, USA, 02115</address>
      </div>
    </footer>
  );
};

export default Footer;
