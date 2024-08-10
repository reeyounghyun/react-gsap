import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const Step01 = () => {

  gsap.registerPlugin(ScrollTrigger); // 스크롤트리거 선언
  const triggerRef = useRef(null);
  const gsap01Ref = useRef(null);
  const gsap02Ref = useRef(null);
  const gsap03Ref = useRef(null);
  const gsap04Ref = useRef(null);
    
useEffect(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: triggerRef.current,// 스크롤트리거 대상
      start: 'top 90%',
      //ul의 위치 : top
      //브라우저 위치 : 90%
      end: '20% 0%', // 끝점, ;트리거 끝점, 부라우저 끝점
      scrub: 1,
      markers: true, // 택스트로 보임 설정
      // markers: false, // 택스트로 숨김 설정
    }
  })
  .to(gsap01Ref.current, {y: '-400px', duration: 1, ease: 'none'}, 0.2)
  .to(gsap02Ref.current, {y: '-470px', duration: 1, ease: 'none'}, 0.5)
  .to(gsap03Ref.current, {y: '-500px', duration: 1, ease: 'none'}, 0.9)
  .to(gsap04Ref.current, {y: '-510px', duration: 1, ease: 'none'}, 1.2)
}, []);


  return (
    <section className='flex items-center justify-center text-black bg-black border-4 border-red-600 h-dvh'>
        <ul ref={triggerRef} className='flex justify-center w-3/4 gap-10 font-bold'>
            <li ref={gsap01Ref} className='w-[22%] bg-[#fed700] h-[300px] rounded-3xl flex justify-center items-center'>Card1</li>
            <li ref={gsap02Ref} className='w-[22%] bg-[#fed700] h-[300px] rounded-3xl flex justify-center items-center'>Card2</li>
            <li ref={gsap03Ref} className='w-[22%] bg-[#fed700] h-[300px] rounded-3xl flex justify-center items-center'>Card3</li>
            <li ref={gsap04Ref} className='w-[22%] bg-[#fed700] h-[300px] rounded-3xl flex justify-center items-center'>Card4</li>
        </ul>
    </section>
  )
}

export default Step01