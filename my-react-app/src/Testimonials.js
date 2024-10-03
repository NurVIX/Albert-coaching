import React, {useState, useEffect } from "react"
import './style.css'; 

function Testimonials(){
    
    const [activeIndex, setActiveIndex] = useState(0);
    
    const testimonials = [
        "“Great coach, I lost 10 pound training with Alberto, he created a diet and training plan for me based on my life style. He emphasized weight training using both free weights and machines, so I could build muscle mass and achieve my lean goals.” -Ricardo A., 37.",
        "“This program changed my life! I’ve always struggled to balance building muscle while losing fat, but with the personalized workout and nutrition plan, I finally saw results. In just 12 weeks, I’ve gained noticeable muscle and dropped 15 pounds of fat. The tailored guidance and constant support from Alberto kept me motivated and on track every step of the way. I feel stronger, leaner, and more confident than ever. This is the best decision I’ve made for my health!”  - Lucas D., 25.",
        "“I’ve tried countless fitness programs, but nothing compares to this one! The combination of a custom workout routine and a personalized meal plan helped me lose 20 pounds of fat while packing on lean muscle. I’m stronger, more defined, and have more energy than ever. The progress was steady and consistent, and the online support kept me motivated and accountable. If you're serious about transforming your body, this is the program for you! Thank you Alberto!”  — Esther S., 32."
    ];
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => 
                (prevIndex + 1) % testimonials.length // Loop back to the first testimonial
            );
        }, 25000); // Change testimonial every  25 seconds

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="backgrountestimonials">
            <div className='Testimonialscontainer'>
                <div className='Testimonialsfont'>Testimonials</div>
                <div className='Testimonialsunderline'></div>

                {/* Wrapper to hold all testimonials */}
                <div className='TestimonialsSlider'>
                    {/* Map over the testimonials and position them based on the active index */}
                    <div
                        className="TestimonialsWrapper"
                        style={{ transform: `translateX(${-activeIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                        {testimonials.map((testimonial, index) => (
                            <p key={index} className='Testimonialdisplay'>
                                {testimonial}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );           
}
export default Testimonials;