import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useEffect } from 'react'
import { useRef } from 'react'

const Step03 = () => {

  gsap.registerPlugin(ScrollTrigger); // 스크롤트리거 선언
  const triggerRef = useRef(null);
  const gsap01Ref = useRef(null);
  const pRef = useRef([]); // 수정된 부분



  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: '0% 50%',
        end: '30% 0%',
        scrub: 1,
        // markers: true, // 텍스트로 보임 설정
        markers: false, // 텍스트로 숨김 설정
      }
    })
    .fromTo(gsap01Ref.current, 
      {
        width: '0', 
        height: '0',
        duration: 10, 
        top: '3%',
        ease: 'elastic'
        // elastic : 반동있는 가속도 
      },
      {
        width: '2500px',
        height: '2500px',
        duration: 30,
        top: '30%', 
        ease: 'elastic'
      }, 
      0
    )

    pRef.current.forEach((e) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: e,  // 변경된 부분
          start: 'top 70%',
          end: 'bottom 9%',
          scrub: 1,
        }
      })
      .fromTo(e, 
        {y: 50, opacity: 0},
        {y: 0, opacity: 1, duration: 4},
        0
      );
    });
    
  }, []);

  return (
    <section ref={triggerRef} className='relative flex items-center justify-center overflow-hidden text-black bg-white border-4 border-red-600 h-dvh'>
        <span ref={gsap01Ref}  className='block w-[2500px] h-[2500px] rounded-full absolute top-[40%] left-1/2 -translate-x-1/2 bg-black'></span>
        <div className='absolute z-10 text-center text-white -translate-x-1/2 top-1/2 left-1/2 '>
            {/* <p className='text-6xl font-bold leading-none tracking-tight'>HTML5 + CSS3</p>
            <p className='text-6xl font-bold leading-none tracking-tight'>JAVASCRIPT</p>
            <p className='text-6xl font-bold leading-none tracking-tight'>JQUERY</p>
            <p className='text-6xl font-bold leading-none tracking-tight'>REACT + GSAP</p> */}
            {
              [
                'HTML5 + CSS3',
                'JAVASCRIPT',
                'JQUERY',
                'REACT + GSAP'
              ].map((text, index) => (
                <p ref={el => pRef.current[index] = el}  key={index} className='text-6xl font-bold leading-none tracking-tight'>
                  {text}
                </p>
              ))
            }
                    </div>
                </section>
              )
            }

export default Step03