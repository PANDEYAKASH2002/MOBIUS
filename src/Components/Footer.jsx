import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";


function Footer() {
  return (
    <div className='px-4'>
       <img src="/logo1.avif" alt=""  className=' h-14 w-18 mx-12 '/>
       <hr className='w-66 text-blue-400' />
       <div className='grid grid-cols-4 text-blue-700'>
         <div className='flex flex-col'>
            <h3>Address</h3>
            <p>1875 Mission St Ste 103 #450<br></br>
              San Francisco, CA 94103</p>
         </div>
         <div className='flex flex-col '>
            <h3>E-mail</h3>
            <p>finance@mobiusengine.ai</p>
         </div>
         <div className='flex flex-col'>
            <h3>Telephone</h3>
            <p>Tel: 650-889-6026</p>
         </div>
         <div className='flex flex-col'>
            <h3>Socials</h3>
            <p ><TiSocialLinkedinCircular />
            <TiSocialLinkedinCircular />
            </p>
              
         </div>
       </div>

       <div className='bg-blue-700 text-amber-50 rounded-xl grid grid-cols-3'>
       <div className='flex flex-col p-2'>
       <p  >2023 Mobiusservices LLC </p>
       </div>
       <div className='flex flex-col p-2'>
       <p>Terms & Condition</p>
       </div>
       <div className='flex flex-col p-2'>
       <p>Privacy Policy</p>
       </div>
       </div>
    </div>
  )
}

export default Footer
