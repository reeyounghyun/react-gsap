import './App.css';
import Step01 from './gsap/step01';
import Step02 from './gsap/step02';
import Step03 from './gsap/step03';
import Step04 from './gsap/step04';
import Step05 from './gsap/step05';
import Step06 from './gsap/step06';
import Step07 from './gsap/step07';
import Step08 from './gsap/step08';
import Step09 from './gsap/step09';
import Step10 from './gsap/step10';
import Step11 from './gsap/step11';

function App() {
  return (
    <>
 
      <Step09 />
      <Step10 />
      <section className='flex items-center justify-center text-white bg-black border-4 border-red-600 h-dvh'>
        <div className='leading-tight uppercase text-8xl'>
          <span className='block text-transparent' style={{WebkitTextStroke:'2px #b1dd40'}}>GSAP</span>
          ScrollTrigger
        </div>
      </section>
      <Step01 />
      <Step02 />
      <Step03 />
      <Step04 />
      <Step05 />
      <Step06 />
      <Step11 />
      <Step07 />
      <Step08 />
      <section className='flex items-center justify-center text-white bg-black border-4 border-red-600 h-dvh'>
        <div className='leading-tight uppercase text-8xl'>
          Footer
        </div>
      </section>
    </>
  );
}

export default App;
