import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import myimage from '../assets/2.jpg';

import Marquee from './Marquee';
import User from './User';
import Hero from './Hero';
import { Link } from 'react-router-dom';


function getRandomName() {
  const names = ["Enhance", "Grow", "Boost", "Elevate"];
  const int = Math.floor(Math.random() * 4);
  return names[int];
}

const Home = () => {
  const [currentName, setCurrentName] = useState(getRandomName());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentName(getRandomName());
    }, 3000);
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <Navbar />
{/* hero-page */}
      <div className='flex mx-20 mt-4 '>
        <div className='flex flex-col w-1/2 justify-center h-96 mt-36'>
          <h1 className='text-white text-left text-7xl font-bold'>Right Way</h1>
          <h1 className='text-white text-left text-7xl font-bold'>To <span className='text-blue-500'>{currentName} !</span></h1>
          <h1 className='text-white text-left text-7xl font-bold'>Your Business</h1>
          <p className='text-slate-500 pr-60 ps-4 text-left mt-6'>user-friendly, brand-aligned website, online presence and endaces customers</p>
          <div className='flex gap-x-3 mt-9 ms-2'>
            <button className='bg-slate-800 px-20 py-2 text-white rounded-full border-2 border-slate-500'>Explore</button>
            <button className=' px-20 py-2 text-white rounded-full border-2 border-slate-500'>Explore</button>
          </div>
        </div>
        <div className='flex w-1/2'>
          <img src="/src/assets/hero.png" className='mr-4' alt="" />
        </div>
      </div>
{/* End-hero page */}

{/* Second Secton */}
      <div className='bg-slate-700 h-60 flex items-center  m-20 rounded-2xl overflow-hidden my-40'>
        <div className='w-1/3 bg-slate-700 h-full flex flex-col justify-center  '>
          <h1 className='text-white text-4xl font-bold'>CONIXLAB</h1>
        </div>
        <div className='grid grid-cols-4 w-full h-full divide-x divide-y text-slate-400 divide-slate-300 text-center' >
          <div className='bg-slate-400 '>1</div>
          <div className='bg-slate-400 '>1</div>
          <div className='bg-slate-400 '>1</div>
          <div className='bg-slate-400 '>1</div>
          <div className='bg-slate-400 '>1</div>
          <div className='bg-slate-400 '>1</div>
          <div className='bg-slate-400 '>1</div>
          <div className='bg-slate-400 '>1</div>
          
        </div>
      </div>
{/*End Second Secton */}

{/* 3rd section */}
      <div className='flex items-center mt-36 bg-slate-900 p-20  w-full '>
        <div className=' w-1/2 text-left '>
          <h2 className='text-slate-700 text-5xl'>AWESOME</h2>
          <h2 className='text-white text-8xl'>DESIGNS</h2>
          <p className='text-slate-700 pr-32'>Crafted with a modern aesthetic, our website boasts a sleek, responsive design that seamlessly adapts to every device, ensuring a captivating user experience</p>
          <div className='flex gap-x-3 mt-9'>
            <button className='text-slate-500'>Show Build Website </button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            
          </div>
        </div>
        <div className='flex justify-end '>
          <img src="/src/assets/1.jpg" className='w-1/2 rounded-2xl' alt=""  />
        </div>

      </div>
{/* 3rd section */}

{/* 4rd section */}
      <div className='flex items-center mb-36 p-20  w-full '>
      <div className='flex justify-start '>
          <img src="/src/assets/1.jpg" className='w-1/2 rounded-2xl' alt=""  />
        </div>
        <div className=' w-1/2 text-left '>
          <h2 className='text-slate-700 text-5xl'>MOBILE</h2>
          <h2 className='text-white text-8xl'>RESPONSIVE</h2>
          <p className='text-slate-700 pr-32'>Crafted with a modern aesthetic, our website boasts a sleek, responsive design that seamlessly adapts to every device, ensuring a captivating user experience</p>
          <div className='flex gap-x-3 mt-9'>
            <button className='text-slate-500'>Show Build Website </button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
            
          </div>
        </div>
       

      </div>
{/* ENd 4rd section */}

{/* 5th section */}
     <div className='grid grid-cols-5 bg-slate-900 py-9 my-20'>
        <div className='flex flex-col items-center py-12 border-e-2 border-slate-800'>
          <h2 className='text-white text-7xl font-bold'>12k</h2>
          <p className='text-slate-600 text-xl mt-9'>Designs</p>
        </div>
        <div className='flex flex-col items-center py-12 border-e-2 border-slate-800'>
          <h2 className='text-white text-7xl font-bold'>12k</h2>
          <p className='text-slate-600 text-xl mt-9'>Designs</p>
        </div>
        <div className='flex flex-col items-center py-12 border-e-2 border-slate-800'>
          <h2 className='text-white text-7xl font-bold'>12k</h2>
          <p className='text-slate-600 text-xl mt-9'>Designs</p>
        </div>
        <div className='flex flex-col items-center py-12 border-e-2 border-slate-800'>
          <h2 className='text-white text-7xl font-bold'>12k</h2>
          <p className='text-slate-600 text-xl mt-9'>Designs</p>
        </div>
        <div className='flex flex-col items-center py-12 '>
          <h2 className='text-white text-7xl font-bold'>12k</h2>
          <p className='text-slate-600 text-xl mt-9'>Designs</p>
        </div>
     </div>
{/* ENd 5th section */}

{/* 6th Sectoin */}
    <div>
      <div>
        <h6 className='text-slate-700'>Our Values</h6>
        <h3 className='text-white text-7xl font-bold'>Why Choose Us</h3>
        <p className='text-slate-700 font-thin mx-44 mt-5 mb-9'>Digital Wordings is an expert website service provider with extensive abilities. The proficiency and experience of the service can benefit businesses of any scale.</p>
      </div>
      <div className='grid grid-cols-2 text-center m-20 '>
          <section className='flex flex-col gap-y-8 pb-8  items-center border-e-2 border-b-2 border-slate-900'>
            <img src="/src/assets/1.jpg" className='w-40 mt-8' alt="" />
            <h2 className='text-slate-300'>New Technology</h2>
          </section>
          <section className=' flex flex-col gap-y-8 pb-8 items-center border-b-2 border-slate-900'>
            <img src="/src/assets/1.jpg" className='w-40 mt-8' alt="" />
            <h2 className='text-slate-300'>New Technology</h2>
          </section>
          <section className='flex flex-col gap-y-8 pb-8  items-center border-e-2  border-slate-900'>
            <img src="/src/assets/1.jpg" className='w-40 mt-8' alt="" />
            <h2 className='text-slate-300'>New Technology</h2>
          </section>
          <section className=' flex flex-col gap-y-8 pb-8 items-center '>
            <img src="/src/assets/1.jpg" className='w-40 mt-8' alt="" />
            <h2 className='text-slate-300'>New Technology</h2>
          </section>
      </div>
    </div>
{/* End 6th Sectoin */}

<img src={myimage} alt="My Image" />
    










    </div>
  );
}

export default Home;
