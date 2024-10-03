import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './style.css'; 
import Testimonials from './Testimonials';

function HomePage() {
    const navigate = useNavigate();

    return (
        <main className="HomePage">
            <header className='firstimageContainer'>
                <div className="titleHome">
                    <p className='AlbertoTitle'>Alberto Quijada</p>
                    <p className='OnlineTitle'>Online Coaching</p>
                    <div className='CostumeButton' onClick={() => window.open("https://4ydc94jlqiw.typeform.com/to/LSUw3cp0", "_blank")}>SIGN UP</div>
                </div>
            </header>
            <section className="divspace">
                <div className="fotospace">
                    <img src={'/static/mediaAQ5.jpeg'} className="fotoedit1" alt="second" />
                </div>
                <div className="flexdiv">
                    <p className="Thankyou">Thank you for visiting my site. </p>
                    <p className='Fitnessdescription'>My fitness program began 7 years ago, after my career as a competitive bodybuilder. It aims to assist people in reaching their fitness objectives in a supportive and motivating setting. Throughout the years, I have guided hundreds of individuals in transforming their lives and becoming the healthiest versions of themselves.</p>
                </div>
            </section>
            <section className="secondimageContainer">
                <div className="secondsubtitle">
                    <h3>Creating a diet and training plan that is customized to your individual needs and aligned with your specific goals.</h3>
                    <Button onClick={() => navigate('./Programs')}>Learn More</Button>
                </div>
            </section>
            <section className='ThirdimageContainer'>
                <div className='grayboxindex'>
                    <p className='grayboxfont'> No matter where you are starting or where you want to go, we will work with you to help you achieve your fitness goals.</p>
                    <Button onClick={() => navigate('./Programs')}>Learn More</Button>
                </div>
                <div className='fotoindex2'></div>
            </section>
            <Testimonials/>
             <footer>Copyright © 2024 Alberto Q. coaching. All rights reserved. Website built by NurVIX</footer>
        </main>

    );
}
export default HomePage;
