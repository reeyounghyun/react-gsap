import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';

const Step06 = () => {
    useEffect(() => {
      // 부수 효과 로직
    }, []); // 의존성 배열
  
    return (
        <section className='relative overflow-hidden text-white bg-black border-4 border-red-500 h-dvh'>
            <div className='absolute text-white text-8xl right-10 bottom-10'>
                <span></span>
                <span>/ 6</span>
            </div>
            <ul className='flex px-[30%] box-border'>
                <li className='w-[700px] p-[100px] box-border flex-shrink-0'>
                    <a className='relative block w-full' href="/">
                        <div className='num'></div>
                        <div className='relative imgBox'>
                            <img className='w-full' src="" alt="{}" />
                        </div>
                        <div className='absolute left-0 opacity-0 bottom-10'>
                            <p className='text-6xl'>Site Name</p>
                            <p className='text-xl'>UI/UX Design, Web Publising</p>
                        </div>
                    </a>
                </li>
            </ul>
        </section>
    );
};
export default Step06