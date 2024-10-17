import React, { useState } from 'react';
import web1 from '../image/web1.jpg'
import { TypeAnimation } from 'react-type-animation';


function Intro() {


  return (
    
    <div className='bg-purple-900 w-full h-screen relative'>
      <div className='flex relative flex-col md:flex-row gap-10 md:justify-center md:pt-24 pt-11 '>
     
       
      <div className='text-white text-5xl md:w-auto  mx-7 rounded-xl pl-7 content-center flex flex-col  gap-0 ' data-aos = 'zoom-out' data-aos-offset="150"   >
    <h1 className='font-extrabold'>LET 'S TURN YOUR IMAGINATION <br /> INTO REALITY !</h1>
      
      <span className='text-[20px] pt-3 font-extralight '>captivating designs website base on your niche.</span>
      <button className='bg-purple-800 text-4xl border-4 w-60 rounded-2xl p-1 mt-10 transition  duration-300 transform hover:scale-110 '>Start now</button>
       </div>
       
   
    <div className=' flex relative justify-center flex-wrap mt-20'>
    <img className='w-32 h-28 absolute right-14 -bottom-14' data-aos = 'zoom-out' data-aos-offset="150"  src={web1} alt="" />
     <img className='w-96 h-56 ' data-aos="fade-down" data-aos-offset="150" src={web1} alt="" />
    <img className='w-32 h-28 absolute left-24 -top-10'  data-aos="flip-up" data-aos-offset="150"src={web1} alt="" />
    </div>
    <div className='flex gap-4 absolute top-[650px] right-[50px]'>
    <TypeAnimation
  sequence={['PORTFOLIO', 500, 'E-COMMERCE', 500, 'LANDING PAGE', 500, 'BUSSINESS' , 500]}
  style={{ fontSize: '3em',
            color: [ '#FF00FF'],
            cursor: 'pointer',
        }}
  repeat={Infinity}
/>
<div className='text-6xl text-[#12aff3]'>website</div>
     </div>
    </div>
    </div>


     


           
            
      
   
  );
}

export default Intro;

