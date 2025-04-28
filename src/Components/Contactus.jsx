import React from "react";

const ContactUs = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between bg-blue-600 text-white rounded-2xl p-8 md:p-12 shadow-lg">
          
          <div className="flex flex-col items-start mb-6 md:mb-0">
            <p className="text-sm uppercase tracking-wide mb-2 opacity-80">Still have <br>
            </br> doubts?</p>
           
          </div>
          <h2 className="text-4xl md:text-4xl font-semibold">Contact us</h2>
          <button className="flex items-center bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition">
            
            <div className=" text-blue p-2 text-2xl">
            →
              
            </div>
          </button>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
