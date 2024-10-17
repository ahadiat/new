import React, {useState} from 'react'
import Logo from '../image/H.png'


import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavOri = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
                
              <nav className='top-0 w-full left-0 relative z-10 p-4'>
                <div className='flex justify-center custom-sm:justify-between custom-smm:justify-between custom-md:justify-between  lg:gap-60 lg:items-center lg:justify-center'>
                <a href='#' className="flex gap-3">
                    <img src={Logo} className="h-8 w-10" alt="Rose Logo" />
                    <span className="self-center text-xl font-semibold white text-white">HIU</span>
                   
                </a>
                
                           <div className='hidden md:flex space-x-10 '>
                         
                            <a href="#" className="text-white transition  duration-300 transform hover:scale-110  hover:underline" aria-current="page">Home</a>
                    
                   
                            <a href="#" className="text-white transition  duration-300 transform hover:scale-110  hover:underline">Company</a>
                       
                            <a href="#" className="text-white transition  duration-300 transform hover:scale-110 hover:underline">Team</a>
                       
                             <a href="#" className="text-white transition  duration-300 transform hover:scale-110 hover:underline">About</a>

                             <a href="#" className="text-white transition  duration-300 transform hover:scale-110 hover:underline">Contact</a>
                           </div>  


                            <div className='block md:hidden'>
                           <div onClick={handleNav} >
                                {!nav ? <AiOutlineMenu className='hidden'/> : <AiOutlineMenu size ={20} color='white' className='cursor-pointer'/> }       
                           </div>  
                           </div>            
      
       
               <div className={!nav ? 'flex fixed left-0 top-0 w-[40%] h-full md:hidden border-r text-white border-r-white-900 bg-[#402a81] ease-in-out duration-500'  : 'fixed left-[-100%]'}>
                  <div className='bg-black opacity-1 absolute right-[-20px] h-10 w-10 rounded-full border-white border-4'>
                     <div onClick={handleNav} className='flex cursor-pointer justify-center p-1'> <AiOutlineClose size={25} color='white' /> </div>
                      </div>
                       <ul className='uppercase p-4'>
                         <li className='p-4 w-12 border-b border-purple-600  cursor-pointer'>Home</li>
                         <li className='p-4 w-12 border-b border-purple-600 cursor-pointer'>Company</li>
                         <li className='p-4 w-12 border-b border-purple-600 cursor-pointer'>Team</li>
                         <li className='p-4 w-12 border-b border-purple-600 cursor-pointer'>About</li>
                         <li className='p-4 w-12 border-b border-purple-600 cursor-pointer'>Contact</li>
                       </ul>
                      
               </div>
              
            
             </div>
             </nav>
  
  )
}

export default NavOri;