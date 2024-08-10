import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Step02 = () => {

  gsap.registerPlugin(ScrollTrigger); // 스크롤트리거 선언
  const triggerRef = useRef(null);
  const gsap01Ref = useRef(null);
  const gsap02Ref = useRef(null);
  const gsap03Ref = useRef(null);
  const gsap04Ref = useRef(null);
  const gsap05Ref = useRef(null);
    
useEffect(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: triggerRef.current,// 스크롤트리거 대상
      start: 'top 100%',
      //ul의 위치 : top
      //브라우저 위치 : 90%
      end: '100% 100%', // 끝점, ;트리거 끝점, 부라우저 끝점
      scrub: 1,
      // markers: true, // 택스트로 보임 설정
      markers: false, // 택스트로 숨김 설정
    }
  })
  .fromTo(gsap01Ref.current, {y:'400%'},{y:'0'}, 1.2)
  .fromTo(gsap02Ref.current, {y:'400%'},{y:'0'}, 1.4)
  .fromTo(gsap03Ref.current, {y:'400%'},{y:'0'}, 1.6)
  .fromTo(gsap04Ref.current, {y:'400%'},{y:'0'}, 1.8)
  .fromTo(gsap05Ref.current, {y:'400%'},{y:'0'}, 2.0)
}, []);

  return (
    <section ref={triggerRef} 
    className='relative flex items-center justify-center text-black bg-black border-4 border-red-600 h-dvh'>
        <span 
        ref={gsap01Ref} 
        className=' w-60 h-80 bg-[#fee8b0] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' 
        style={{transform:'translate(-50%, -50%) rotate(-12deg)'}}>
        Card1
        </span>
        <span 
        ref={gsap02Ref} 
        className=' w-60 h-80 bg-[#ffbbcc] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' 
        style={{transform:'translate(-50%, -50%) rotate(12deg)'}}>
        Card2
        </span>
        <span 
        ref={gsap03Ref} 
        className=' w-60 h-80 bg-[#ffcccc] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' 
        style={{transform:'translate(-50%, -50%) rotate(-15deg)'}}>
        Card3
        </span>
        <span 
        ref={gsap04Ref} 
        className=' w-60 h-80 bg-[#df9773] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' 
        style={{transform:'translate(-50%, -50%) rotate(18deg)'}}>
        Card4
        </span>
        <span 
        ref={gsap05Ref} 
        className=' w-60 h-80 bg-[#d9eccb] absolute left-1/2 top-1/2 rounded-2xl flex justify-center items-center text-black text-4xl font-bold' 
        style={{transform:'translate(-50%, -50%) rotate(-3deg)'}}>
        Card5
        </span>
    </section>
  )
}

export default Step02