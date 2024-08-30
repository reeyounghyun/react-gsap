import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CircularText = ({ text }) => {
  return (
    <svg viewBox="0 0 100 100" width="450" height="450">
    <path id="curve" fill="transparent" d="M 50, 50 m -47, 0 a 47,47 0 1,1 94,0 a 47,47 0 1,1 -94,0"/>
    <text width="100">
      <textPath xlinkHref="#curve" startOffset="0%">
        {text.repeat(3)}
      </textPath>
    </text>
    <style>
      {`
        text {
          fill: #d0df5a;
          font-family: 'serif';
          font-size: 3.8px;
          font-weight: 500;
          letter-spacing: 5.25px;
        }
      `}
    </style>
  </svg>
  )
}

const Step09 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const stageRef = useRef(null);
    const triggerRef = useRef(null);

    const frameCount = 14
    const offsetValue = 100;

    useEffect(() => {
        gsap.to(stageRef.current, {   
        backgroundPosition: (- offsetValue * frameCount * 2.0) + "px center", 
        ease: "steps(" + frameCount + ")",
        scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=" + (frameCount * offsetValue),
        pin: true, 
        scrub: true 
        }
        });  
    }, []);

  return (
    <section ref={triggerRef} className='relative w-full text-white bg-black border-4 border-red-600 h-dvh'>
        <div ref={stageRef} className="h-full max-w-[200px] my-0 mx-auto" style={{background: 'url(img_3.png)',backgroundRepeat: 'no-repeat', backgroundPosition: '0 center'}}></div>
        <div className="w-[450px] h-[450px] absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <CircularText text="방문해 주셔서 감사합니다 잘 부탁드립니다. "/>
        </div>
    </section>
  )
}

export default Step09