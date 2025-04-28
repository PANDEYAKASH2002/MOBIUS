import React from 'react';

const steps = [
  {
    number: 1,
    title: 'Submit Intake Form',
  },
  {
    number: 2,
    title: 'We do the search and curation for list of jobs',
  },
  {
    number: 3,
    title: 'You approve, we do the tedious part (applying)',
  },
  {
    number: 4,
    title: 'You get the interviews',
  },
];

const HowWeWork = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-700">How we work?</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-8">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center max-w-xs">
            <div className="w-14 h-14 flex items-center justify-center border-2 border-blue-700 rounded-full text-2xl font-semibold text-black mb-4">
              {step.number}
            </div>
            <div className="w-16 border-b-2 border-blue-700 mb-4"></div>
            <p className="text-blue-700">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
