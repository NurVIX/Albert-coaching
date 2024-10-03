import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import './style.css';
import FAQSection from "./FAQ";

function Programs() {
  // State to manage the visibility of text over each image
  const [showText, setShowText] = useState({
    first: false,
    second: false,
    third: false,
  });

  // Function to handle "Learn More" click
  const handleLearnMore = (key) => {
    setShowText((prevState) => ({
      ...prevState,
      [key]: !prevState[key], // Toggle the visibility
    }));
  };

  return (
    <main className="ProgramPage">
      <header className='programTitlecontainer'>
        <div className="programTitlecontainerleft">
          <p className="programsubtitle">START TODAY!</p>
          <p className="programheader">Programs</p>
        </div>
        <div className="programTitlecontainerright">
          <p className="ProgramsQuote">
            “My fitness program is designed to help you build muscle, increase endurance, and feel your best.”
            -Alberto Q.
          </p>
        </div>
      </header>
      <section className="programGrid">
        {/* First Program */}
        <div className="ProgramGridRowOne">
          <div className="GridText">
            <p className="ProgramTitle">Workout Program</p>
            <Button variant="light" onClick={() => handleLearnMore('first')}>Learn More</Button>
          </div>
          <div className="imageContainer">
            {showText.first && (
              <div className="overlayText">
            <p className="textoverlay">5-Day Workout Routine: A dynamic fitness routine, updated every two weeks to keep your progress on track and aligned with your goals.</p></div>
            )}
            <img src={'/static/mediaAQ10.jpg'} className="coachingImage" alt="first" />
            
          </div>
        </div>
        {/* Third Program */}
        <div className="ProgramGridRowThree">
          <div className="imageContainer">
            {showText.third && (
              <div className="overlayText">
                <p className="textoverlay">Tailored Nutrition Plan: A comprehensive evaluation based on your current stats, providing a personalized meal plan that caters to your food preferences and dietary restrictions.</p>
            </div>
            )}
            <img src={'/static/mediaAQmeal.jpg'} className="coachingImage" alt="coaching" />  
          </div>
          <div className="GridText">
            <p className="ProgramTitle">Nutrition Plan</p>
            <Button variant="light" onClick={() => handleLearnMore('third')}>Learn More</Button>
          </div>
        </div>
         {/* Second Program */}
        <div className="ProgramGridRowTwo">
          <div className="GridText">
            <p className="ProgramTitle">Suplement Recommendation</p>
            <Button variant="light" onClick={() => handleLearnMore('second')}>Learn More</Button>
          </div>
          <div className="imageContainer">
            {showText.second && (
              <div className="overlayText">
                <p className="textoverlay">Supplements recommendations based on your needs and goals. <br/> 
                Diet and cardio adjustments as needed based on your progress.</p>
              </div>
            )}
            <img src={'/static/supplement.webp'} className="coachingImage" alt="second" />
            
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section className="SignupGrid">
        <p className="Signupparagraph">
          Whether you are looking to build muscle or lose fat, our fully personalized nutrition program and exercise routine are tailored to fit your preferences, lifestyle, and athletic ability. No matter where you are starting or where you want to go, we will work with you to help you achieve your fitness goals.
        </p>
        <div className="SignupProcessGrid">
          <div className="IconGrid">
            <img src='/static/formIcon.png' className="icon" alt="form Icon" />
            <p className="IconDescription">Fill the form</p>
          </div>
          <img src='/static/arrow.png' className="iconArrow" alt="form Icon" />
          <div>
            <img src='/static/customerService.png' className="icon" alt="Call Icon" />
            <p className="IconDescription">Get connected</p>
          </div>
          <img src='/static/arrow.png' className="iconArrow" alt="form Icon" />
          <div>
            <img src='/static/shoppingCart.png' className="icon" alt="Shopping Icon" />
            <p className="IconDescription">Shop the right program</p>
          </div>
        </div>
      </section> 
      {/* Fourth Section */}
      <section className="MockupSection">
        <div className="priceSection">
          <div className="mockuph1">
            <h1>Workout plan built just for you!</h1>
            <h4>We check your progress together.<br/>Unlimited online support!</h4>
            <a href="https://4ydc94jlqiw.typeform.com/to/LSUw3cp0" target="_blank" rel="noopener noreferrer">
            <Button variant="light">SIGN UP NOW</Button></a>
          </div>
        </div>
        <img src="/static/mockup.jpeg" className="iphoneMockup" alt="iphone"></img>
      </section>
      <section className='FourthContrainer'>
        <p className="fouthContainerp">Crucial to engage in exercises and follow a diet that complements your goals. There's no other way to make significant progress in muscle development than by working with weights and ensuring proper form.</p>
        <a href="https://4ydc94jlqiw.typeform.com/to/LSUw3cp0" target="_blank" rel="noopener noreferrer">
          <Button variant="light">SIGN UP NOW</Button>
        </a>
      </section>
      <FAQSection />
      <footer>Copyright © 2024 Alberto Q. coaching. All rights reserved. Website built by NurVIX</footer>
    </main>
  );
}

export default Programs;
