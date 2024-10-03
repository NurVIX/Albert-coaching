import React, {useState} from "react";
import './style.css'

const FAQSection = () => {
    const [openQuestionIndex, setOpenQuestiononIndex] = useState(null);
    const toggleFAQ = (index) => {
        if (openQuestionIndex === index){
        setOpenQuestiononIndex(null);
    } else{
        setOpenQuestiononIndex(index);
    }
    
};
return(
        <section className="FAQcontainer">
            <div className="FAQTitle">
                <h2>FAQ’s</h2>
            </div>

            <div className="FAQ">
                {/* REACT QUESTION*/}
                <p className="FAQuestion" onClick={ () => toggleFAQ(1)}>What is the cost of your online coaching services?</p>
                {/* HIDDING ANSWER*/}
                <p className={`FAAnswer ${openQuestionIndex === 1 ? 'open' : ''}`}>My coaching services are tailored to meet your specific fitness goals and needs. Costs typically range depending on the package you select. This includes a dedicated coach, daily contact, personalized workout plans, nutrition guidance, and in depth check-ins to track your progress and adjust your program as needed.</p>
            </div>

            <div className="FAQ" >
                <p className="FAQuestion" onClick={ () => toggleFAQ(2)}>What is the process for signing up for online coaching?</p>
                <p className={`FAAnswer ${openQuestionIndex === 2 ? 'open' : ''}`}>To get started, please fill out the intake form on my website. After receiving your information, we will schedule a 15-minute consultation call. During this call, I will discuss your fitness objectives, assess your current fitness level, and create a personalized coaching plan that aligns with your goals and lifestyle. We will also discuss and agree upon the duration and final investment during this call. If everything aligns well, we will assist you in setting everything up. If not, you will still leave with a clear game plan for moving forward.</p>
            </div>

            <div className="FAQ">
                <p className="FAQuestion" onClick={ () => toggleFAQ(3)}>What level of commitment is required for online coaching?</p>
                <p className={`FAAnswer ${openQuestionIndex === 3 ? 'open' : ''}`}>We recommend committing to a minimum of 3 to 4 sessions per week to achieve optimal results. This commitment ensures consistency in your training and allows us to monitor your progress effectively. Based on my own experience, our program is structured into different phases covering topics such as mindset training, structure, time management and a lot of knowledge around nutrition.</p>
            </div>

            <div className="FAQ" >
                <p className="FAQuestion" onClick={ () => toggleFAQ(4)}>How do I cancel or pause my program if needed?</p>
                <p className={`FAAnswer ${openQuestionIndex === 4 ? 'open' : ''}`}>If you need to adjust your coaching schedule or pause your program, simply reach out to our team directly. We understand that life can be unpredictable, and we're here to accommodate your needs. However I believe that, as humans, we often seek the path of least resistance, using setbacks as excuses to abandon or delay our goals. The only way to overcome your limiting beliefs is to change your mindset and have someone who pushes you through challenges. In this program, my team and I will be there to motivate you to persevere, even when life gets tough.</p>
            </div>
        </section>
    );
};
export default FAQSection;