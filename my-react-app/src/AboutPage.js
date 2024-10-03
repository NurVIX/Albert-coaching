import React from 'react'
import './style.css'; 

function AboutPage() {
  return (
    <main className='backgroundBlack'>
        <header className='backgroundHeader'>
            <p className='HeaderTitle'>Alberto Quijada</p>
        </header>
        <section className='descriptionSection'>
            <p className='AboutDescription'>My name is Alberto Quijada, and I’m originally from Venezuela, now residing in New York City. I hold a bachelor's degree in International Business and a master’s degree in International Trade and Marketing.
                Driven by my passion for fitness, I decided to blend my professional expertise with my love for bodybuilding. I became a certified personal trainer, completing my first certification with the IFBB in 2017 and further enhancing my skills with the ACE Academy in exercise science for fitness professionals and nutritional balance. Since then, I’ve been dedicated to helping clients both in the gym and online, designing personalized training and nutrition plans to help them achieve their fitness goals.</p>
        </section> 
        <section className='ChampionContainer'>
            <img src={'/static/mediaAQ10WEB.webp'} className="ChampionImage" alt="Champion" />
            <p className='ChampionText'>Competitive BodyBuilding IFBB <br/>
            • 1st place in NPC Illinois State Championship <br/>• 1st place Mr. Olympia South America <br/>• 1st place 44th Central American and Caribbean Championship of Bodybuilding <br/>• 3rd place 42nd South American Championship of Bodybuilding and Fitness <br/>• 2nd place 41st South American Championship of Bodybuilding and Fitness <br/>• 1st place 2015 National Championships A, B, C Venezuelan Federation of Bodybuilding.Venezuela May 2015</p>
        </section>
        <section className='descriptionSectiontwo'> 
            <p className='AboutDescription'>In addition to my career was driven by a strong desire to get in shape and build muscle, I started lifting weights at my local gym after work. What began as a personal quest for fitness soon transformed into a deep passion for bodybuilding, which motivated me to compete and ultimately pursue certification as a personal trainer.</p>
        </section>
        <section className='AboutImageGrid'>
            <img src={'/static/mediaAQ12.jpeg'} alt="Champion1" />
            <img src={'/static/mediaAQ11.jpeg'} alt="Champion2" />
            <img src={'/static/mediaAQ13.jpeg'} alt="Champion3" />
        </section>
        <footer>Copyright © 2024 Alberto Q. coaching. All rights reserved. Website built by NurVIX</footer>
    </main>
  )
}

export default AboutPage