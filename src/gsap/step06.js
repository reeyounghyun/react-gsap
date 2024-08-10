import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const Step06 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const triggerRef = useRef(null);
    const listRefs = useRef([]);
    const imgBoxRefs = useRef([]);
    const textRefs = useRef([]);
    
    const numRef = useRef([]);
    const countRef = useRef(null);

    useEffect(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 1024px)': function() {
          let list = listRefs.current;
          let scrollTween = gsap.to(list, {
            xPercent: -100 * (list.length - 1),
            // 원래의 리스트 개수 +-1 길이를 구한 후 가로로 이동
            ease: 'none',
            scrollTrigger: {
              trigger: triggerRef.current,
              scrub: 1,
              start: 'center center',
              end: '300%',
              markers: true,
              pin: true,
            }
          });

          imgBoxRefs.current.forEach(imgBox => {
            gsap.timeline({
                scrollTrigger: {
                  trigger: imgBox,
                  containerAnimation: scrollTween,
                  start: 'center right',
                  end: 'center center',
                  markers: true,// 텍스트로 보임 설정
              pin: true, // 실행 중엔 멈처있음
                }
              })
              .to(imgBox, {clipPath: 'inset(0%)', duration: 1, ease: 'none'}, 0.2)
          })

          imgBoxRefs.current.forEach(imgBox => {
            gsap.timeline({
                scrollTrigger: {
                  trigger: imgBox,
                  containerAnimation: scrollTween, //가로 스크롤  Trigger 시점을 잡아주는 옵션
                  start: 'center center',
                  end: 'center left',
                  scrub: true,
                  markers: true,
                }
              })
              .to(imgBox, {clipPath: 'inset(30%)', duration: 1, ease: 'none'}, 0.2)
          })

          numRef.current.forEach((text, index) => {
            let num = text.getAttribute('data-text');
            ScrollTrigger.create({
                scrollTrigger: {
                    trigger: text,
                    start: '0% center',
                    end: '100% center',
                    scrub: true,
                    onEnter: () => {
                        countRef.current.innerText = num;
                    },
                    onEnterBack: () => {
                        countRef.current.innerText = num;
                    },
                }
            })
          })
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
          //ScrollTrigger 반응형 할 때 사용
      }

    }, []);

    return (
        <section ref={triggerRef} className='relative overflow-hidden text-white bg-black border-4 border-red-500 h-dvh'>
            <div className='absolute text-white text-8xl right-10 bottom-10'>
                <span ref={countRef}></span>
                <span>/ 6</span>
            </div>
            <ul className='flex px-[30%] box-border'>
                {['work1.jpg', 'work2.jpg', 'work3.jpg', 'work4.jpg', 'work5.jpg', 'work6.jpg'].map((src, index) => (
                    <li
                        key={index}
                        className='w-[700px] p-[100px] box-border flex-shrink-0'
                        ref={el => listRefs.current[index] = el}  
                    >
                        <a className='relative block w-full' href="/">
                            <div ref={el => numRef.current[index] = el} className='num' data-text={index + 1} ></div>
                            <div className='relative imgBox' 
                            ref={el => imgBoxRefs.current[index] = el} 
                            >
                                <img className='w-full' src={src} alt={`Work ${index + 1}`} />
                            </div>
                            <div className='absolute left-0 opacity-0 bottom-10'
                             ref={el => textRefs.current[index] = el} 
                            >
                                <p className='text-6xl'>Site Name</p>
                                <p className='text-xl'>UI/UX Design, Web Publishing</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Step06