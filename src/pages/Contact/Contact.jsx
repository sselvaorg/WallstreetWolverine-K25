import "./components/Contact.css";
import tlephoneImage from "./components/telephone.png";
import location from "./components/location.png";
import logo from "./components/logo.jpg";
import background from "./components/stock1.mp4";
import Navbar from "../../components/Navbar/Navbar";

function Contact() {
  return (
    <div className="contact-page">
      <Navbar />

      <div className="contact-container">
        <video className="video-background" autoPlay loop muted playsInline>
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="userBox">
          <p className="title">How Can We Help You?</p>
          <div className="user-details">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name"></input>
            <br></br>

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email"></input>
            <br></br>

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message"></textarea>

            <button className="submit-button">SUBMIT</button>
          </div>
        </div>

        <div className="contact-box">
          <div className="reach-us-box">
            <h1>Reach Us</h1>
            <div className="club-details">
              <img src={logo} className="club-logo" alt="logo"></img>

              <div>
                <div className="club-name">
                  <p className="first-name">CEG</p>
                  <p className="last-name">TechForum</p>
                </div>
                <p className="certification">
                  An ISO 9001:2015 certified organisation
                </p>
              </div>
            </div>
          </div>

          <div className="address">
            <img src={location} alt="place"></img>
            <p>
              12, CEG Tech Forum, College of Engineering Guindy, Sardar Patel
              Road,
            </p>
            <p>Chennai-25</p>
          </div>

          <div className="number">
            <h1>Contact Us</h1>
            <p>
              <img src={tlephoneImage}></img>Bava Viknesh R M G - +91 86102
              44383
            </p>
            <p>
              <img src={tlephoneImage}></img>Mohammed Nadhim S - +91 93445 55456
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
