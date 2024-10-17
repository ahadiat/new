import React from 'react'
import web1 from '../image/web1.jpg'

const Haha = "Check it out >>"

const Hero = () => {
    return (
   <div className=' p-9 justify-center flex flex-wrap gap-4 '>
 
    <div>
    <img src={web1} 
   alt="" className='mt-3 border-4 object-fit border-black' data-aos = 'fade-up' />
   <div  data-aos = 'fade-right'>
   <h2 className='text-[#f686eb] text-4xl mt-5 font-mono'>BUSSINESS</h2>
     <p className='text-[#f1b4eb] font-thin'>Got your own product but dont know where to sell? we ll give you the best design that suit with your product and brand.</p>
<button className='text-white bg-[#a84a9f] p-1 hover:scale-110 flex justify-center items-center mt-3 w-36 border-2 rounded-xl'>{Haha}  </button>
   </div>
      </div>

    <div>
    <img src={web1}
   alt="" className='mt-3 border-4 object-fit border-black' data-aos = 'fade-up' />
   <div data-aos = 'fade-right'>
   <h2 className='text-[#f686eb] text-4xl mt-5 font-mono'>Portfolio</h2>
     <p className='text-[#f1b4eb] font-thin'>Elevete your confidents with our powerfull website. Showcase everything what u got, and make them impress!</p>
     <button className='text-white bg-[#a84a9f] p-1 hover:scale-110 flex justify-center items-center mt-3 w-36 border-2 rounded-xl'>{Haha}  </button>
   </div>
     </div>

    <div>
    <img src={web1}
   alt="" className='mt-3 border-4 object-fit border-black' data-aos = 'fade-up' />
   <div data-aos = 'fade-right'>
   <h2 className='text-[#f686eb] text-4xl mt-5'>PERSONAL</h2>
     <p className='text-[#f1b4eb]'>Need your own space? tell us the theme and we ll provide you almost everything!</p>
    <button className='text-white bg-[#a84a9f] p-1 hover:scale-110 flex justify-center items-center mt-3 w-36 border-2 rounded-xl'>{Haha}  </button>
   </div>
      </div>

    
   </div>
    )
  }
  
  export default Hero