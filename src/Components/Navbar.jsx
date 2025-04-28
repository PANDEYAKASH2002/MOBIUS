import React from 'react'
import {Link} from "react-router-dom"
import { IoIosArrowRoundForward } from "react-icons/io";


function Navbar() {
  return (
   <div className='w-screen h-screen bg-gradient-to-r from-blue-200 via-blue-400 to-blue-900'>

<nav className="  w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a  className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="/logo1.avif" className="h-8" alt="Logo" />
     
  </a>
  <div className="flex md:order-2 space-x-5 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-blue bg-white  font-medium rounded-2xl text-sm px-4 py-2  text-center dark:bg-white-600 ">Get started </button>
      <button data-collapse-toggle="" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto " id="">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
      <li>
        <a href="#" className="block py-2 px-3 text-white  rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Plans</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Testimonials</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Privacy Policy</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">More</a>
      </li>
     
    </ul>
  </div>
  </div>
  <div className='NAV-DIV'>
     <div className='nav-container float-left p-10 m-30'>
          <h1 className='text-white-900 dark:text-white' style={{fontFamily:"Sora Semibold",fontSize:"80px"}}>Land job interviews <br>
          </br> <span className='text-black-600 dark:text-black'>10X</span>   faster</h1>
          <p className='text-white-900 dark:text-white text-xl'>Custom-built resumes that match your goals ,keywords and <br></br>recruiter expectations.</p>
          <button type="button" className="text-blue bg-white   font-medium rounded-2xl text-sm px-4 py-2  my-8 text-center dark:bg-white-600 ">Get started 
          </button>
     </div>
     <div className='float-right p-16' >
      <img src="/mobius-ebook.avif" alt="e-book" />
       <p className='p-3 text-center text-white'>Download free e-book</p>
     </div>
  </div>
</nav>
</div>
  )
}

export default Navbar
