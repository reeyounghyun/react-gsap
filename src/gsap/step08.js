import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

const Step08 = () => {
    gsap.registerPlugin(ScrollTrigger);
    const sectionRefs = useRef([]);

    useEffect(() => {
        sectionRefs.current.forEach((section, index) => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                pin: true,
                pinSpacing: false,
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    const sections = [
        { bg: '#5f5c53', mockup: 'mockup_01.png' },
        { bg: '#000', mockup: 'mockup_02.png' },
        { bg: '#222', mockup: 'mockup_03.png' },
        { bg: '#545454', mockup: 'mockup_04.png' },
        { bg: '#c2c2c0', mockup: 'mockup_05.png', textColor: 'text-black' },
        { bg: '#000', mockup: 'mockup_06.png' },
    ];

    return (
        <section className='w-full pb-[100vh] relative mx-auto my-0 bg-black overflow-hidden border-4 border-red-600'>
            {sections.map((section, index) => (
                <div key={index} ref={addToRefs} className='w-full h-[110vh]'>
                    <div className={`bg-[${section.bg}] ${section.textColor || 'text-white'} rounded-t-[50px] shadow-[0px_0px_30px_rgba(0,0,0,0.3)] overflow-hidden`}>
                        <ul className="flex justify-between">
                            <li className="w-1/2">
                                <a href="/">
                                    <p className="w-full">
                                        <img src={section.mockup} alt="" className="w-full" />
                                    </p>
                                </a>
                            </li>
                            <li className="w-1/2 pt-[150px] pl-[100px] box-border">
                                <div className="text-[120px] leading-[0.9] mb-[85px]">
                                    Design <span className="block">Agency</span>
                                </div>
                                <div className="w-[60%] leading-[1.5]">
                                    <p className="text-[26px] leading-[1.2] mb-[30px]">
                                        In order to improve understanding of the layout, I personally cloned website, which uses a lot of animation and various layout.
                                    </p>
                                    <p className="text-[15px] mb-[20px] tracking-[-1px]">
                                        ox구조와 전체적 레이아웃 제작에 대한 이해 및 실력향상을 위해 국내 기업사이트 중 2023년 트렌드에 맞고 인터렉션 구현이 화려하며 비쥬얼적으로 탁월한 웹사이트를 선정하여 Clone Coding으로 퍼블리싱 실력을 키우기위해 노력하였습니다.
                                    </p>
                                    <ul>
                                        <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                            Html5 CSS
                                        </li>
                                        <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                            jQuery
                                        </li>
                                        <li className="relative pl-[20px] mb-[10px] before:content-[''] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[rgba(0,0,0,0.5)] before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2">
                                            Javascript
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Step08