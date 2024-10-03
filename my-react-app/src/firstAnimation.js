import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function firsanimation(){
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])

    return(
<motion.div className="secondimageContainer">
    <div className="secondsubtitle">
        <h3>Creating a diet and training plan that is customized to your individual needs and aligned with your specific goals.</h3>
        <Button onClick={() => navigate('./Programs')}>Learn More</Button>
    </div>
</motion.div>
);
}