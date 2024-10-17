import React from 'react'


const  footer = () => {
  return (
    <div className='bg-purple-950 w-full h-auto pt-14'>
        <div class="w-full h-[1px] bg-gray-300"></div>
      <div className='flex flex-wrap text-white gap-4 pt-2 justify-center'> 
      <a href="">About</a>
      <a href="">Contact</a>
      <a href="">Careers</a>
      <a href="">Our Policy</a>
      <div class="w-full h-[1px] bg-gray-300"></div>

      <form action="/" className='flex justify-center   flex-col'>
        <input type="email" placeholder=' E-mail Address*' className='text-black border border-gray-300 rounded pl-2 w-auto h-7' />
        
        <button id='subscribe' className='bg-[#bd80e9] text-black p-2 mt-3 h-auto w-64 rounded border border-white'>Subscribe</button>
      </form> 
      </div>
      <div className='bg-white bg-opacity-35 mx-36 bg-cover flex mt-3 rounded'>
      <form action="/" className=' '>
        <input type="checkbox" />
      </form>
      <p className='text-[#f1e8f7]'>I want personalized marketing from Hiu. You can unsubscribe anytime. See our <span href='/' className='cursor-pointer'>Privacy Policy</span>.</p>
      </div>
      
      <div className='flex  justify-center  gap-6 mt-10 cursor-pointer'>
  <img src="https://www.logitechg.com/content/dam/gaming/en/nav/social/social-facebook-color-color.svg" alt="/" />
  <img src="https://www.logitechg.com/content/dam/gaming/en/nav/social/social-twitter-color-color.svg" alt="/" />
  <img src="https://www.logitechg.com/content/dam/gaming/en/nav/social/social-instagram-color-color.svg" alt="/" />
  <img src="https://www.logitechg.com/content/dam/gaming/en/nav/social/social-youtube-color-color.svg" alt="/" />
  <img src="https://www.logitechg.com/content/dam/gaming/en/nav/social/social-discord-color-purple.svg" alt="/" />  
 </div>
 <div className='text-white flex justify-center mt-5 font-extralight'>© 2024 Hiu. All rights reserved</div>

    </div>
  )
}



export default footer
