import React from 'react';
import { FaPlay, FaArrowUpRightFromSquare } from 'react-icons/fa6'; // Importing icons

const testimonials = [
  {
    id: 1,
    description: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 2,
    description: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
  {
    id: 3,
    description: "Holly is a senior executive who got over 10 job interviews and an offer she accepted",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-700">What our clients have to say</h2>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white border border-blue-700 rounded-2xl overflow-hidden shadow-md w-72 flex flex-col justify-between"
          >
            {/* Video thumbnail */}
            <div className="flex items-center justify-center h-40">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-yellow-400 rounded-md">
                <FaPlay className="text-blue-700" />
              </div>
            </div>

            {/* Text area */}
            <div className="bg-blue-700 text-white p-4 rounded-b-2xl relative">
              <p className="text-sm">
                {testimonial.description.split(' ').map((word, index) =>
                  word.toLowerCase() === 'senior' || word.toLowerCase() === 'executive' || word.toLowerCase() === 'job' || word.toLowerCase() === 'interviews'
                    ? <span key={index} className="font-semibold">{word} </span>
                    : <span key={index}>{word} </span>
                )}
              </p>
              <button className="absolute bottom-4 right-4 bg-white text-blue-700 p-2 rounded-full">
                <FaArrowUpRightFromSquare />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
        <button className="px-6 py-2 border-2 border-blue-700 text-blue-700 rounded-full hover:bg-blue-100 transition">
          More customer testimonials →
        </button>
        <button className="px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
          Get Started →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
