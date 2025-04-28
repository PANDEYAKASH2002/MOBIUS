import React from 'react';
import { FaHandshake, FaUser, FaStar } from 'react-icons/fa'; // Using FontAwesome icons

const benefits = [
  {
    id: 1,
    icon: <FaHandshake className="text-4xl text-blue-900 mb-4" />,
    title: "Tried, Tested, Trusted",
    description: "Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back."
  },
  {
    id: 2,
    icon: <FaUser className="text-4xl text-blue-900 mb-4" />,
    title: "Real People, Real Help",
    description: "A hands-on team that actually cares — guiding you through every twist in your career path."
  },
  {
    id: 3,
    icon: <FaStar className="text-4xl text-blue-900 mb-4" />,
    title: "Beat the Line",
    description: "We search, shortlist, and apply for you, so your name shows up first — every single day."
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-white flex justify-center">
      <div className=" p-10 rounded-md w-full max-w-7xl bg-blue-50">
        <h2 className="text-3xl font-bold text-blue-700 mb-12 text-center">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white border border-blue-700 rounded-2xl p-6 flex flex-col items-start hover:shadow-lg transition">
              {benefit.icon}
              <h3 className="text-lg font-bold text-blue-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-blue-900">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
