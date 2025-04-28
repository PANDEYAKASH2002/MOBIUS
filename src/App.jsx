import React from 'react'
import Navbar from './Components/Navbar'
import Midpage from './Components/Midpage'
import About from './Components/About'
import Testimonials from './Components/Testimonial'
import Benefits from './Components/Benefits'
import Pricing from './Components/Pricing'
import Coaching from './Components/Coaching'
import ContactUs from './Components/Contactus'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
       <Navbar/>
      <Midpage/>
      <About/>
      <Testimonials/>
      <Benefits/>
      <Pricing/>
      <Coaching/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default App
