import React from 'react'


function About() {
  return (
    <div className='bg-gradient-to-b from-blue-900  to-blue-400 '>
       <div>
        <h1 className='text-2xl mx-22 p-22 text-white '>About us</h1>
           <div className='container flex justify-center'>
           <div className='float-left p-20' >
                <img src="/ashwin.avif" alt="image" className='h-34 w-34 m-5 bg-white' style={{border:"1px solid white", borderRadius:"50%"}}/>
                <img src="/nicole.avif" alt="image" className='h-34 w-34 m-5' style={{border:"1px solid white", borderRadius:"50%"}} />
               </div>
               <div className='float-right p-15 text-white m-5' style={{fontSize:"14px"}}>
               <p>Ashwin is the founder of mobiusengine.ai. He is an accomplished <br></br>senior executive with over 20 years of experience in cloud  <br></br>infrastructure and financial services. With over 2 decades of <br></br>experience at Google and JP Morgan, Ashwin held various product <br></br> and GTM roles. Ashwin is an MBA holder from Yale University.</p>
               <p>Ashwin's vision with Mobius is to give job seekers a significant   <br></br>advantage in securing the roles of their dreams.</p>
               <br />
               <p >Nicole is an Executive coach at Mobius specializing in resume builds <br></br>and career advisory.</p>
                <p>With a B.S. in Business Administration from UC Berkeley and 7+ years of<br></br> experience in AI-driven product strategy, she has seen firsthand how the <br></br> proper positioning opens doors. She takes a targeted, results-driven approach <br></br>to help clients confidently stand out and land roles that truly match their skills <br></br>and potential.</p>
               </div>

           
            
       </div>
       <h4 className='flex justify-center'>Learn more about our Board of Advisors </h4>
       <h5 className='flex justify-center'>Follow us on our linkedin page </h5>
       </div>
     
    </div>
  )
}

export default About
