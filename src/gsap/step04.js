import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useEffect } from 'react'
import { useRef } from 'react'

const Step04 = () => {
    
    gsap.registerPlugin(ScrollTrigger); // 스크롤트리거 선언
    const triggerRef = useRef(null);
    const gsapRef = useRef(null);
    const videoRef = useRef(null);
    
    useEffect(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current, // 스크롤트리거 대상
            start: '0% 80%',
            end: '100% 100%', 
            scrub: 1,
          }
        })
        .to(gsapRef.current, {backgroundColor:'#fff', color:'#000', duration:5}, 0)
        .fromTo(videoRef.current, 
            {'clip-path':'inset(60% 60% 60% 60% round 30%)'}, 
            {'clip-path':'inset(0% 0% 0% 0% round 0%)', ease:'elastic', duration:10},0)
            // 마스크, => 클립패스 이용
    }, []);



  return (
    <>
    <section ref={gsapRef} className='flex items-center justify-center text-white bg-black border-4 border-red-600 h-dvh'>
        <div className='leading-tight uppercase text-8xl'>
            <span className='block text-transparent' style={{WebkitTextStroke:'2px #b1dd40'}}>GSAP</span>
            ScrollTrigger
        </div>
    </section>
    
    <section ref={triggerRef} className='relative w-full overflow-hidden h-dvh'>
        <div>
            <video ref={videoRef} className='absolute top-0 left-0 object-cover w-dvw h-dvh' autoPlay muted loop playinline> 
                <source src='video.mp4' type="video/mp4" />
            </video>
            <div className='absolute left-0 w-full text-center text-white -translate-y-1/2 top-1/2'>
                <h2 className='leading-none tracking-widest text-8xl'>Creativeness is all you need<br/>for Digital Design</h2>
            </div>
        </div>
    </section>
    </>
  )
}

export default Step04