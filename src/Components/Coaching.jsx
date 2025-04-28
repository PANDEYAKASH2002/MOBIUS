import React from "react";

const coachingPlans = [
  {
    title: "Resume Rebuild",
    price: "$1000",
    frequency: "one time",
    description: "Crafted for senior to VP-level professionals ready for their next big step.",
    features: [
      "3× 30-min coaching",
      "Focused on storytelling, not just formatting",
      "Analyst + full application team on Pacific hours",
      "Tailored to your target industry, company, or role",
      "Direct work with our co-founder (ex-Google, JP Morgan)",
      "Executive coaching from UC Berkeley alum with 10+ Yrs experience",
      "Resume Rebuild portfolio available upon request",
    ],
  },
  {
    title: "Interview Prep",
    price: "$500",
    frequency: "one time",
    description: "Two sessions to sharpen your story, confidence, and clarity — fast.",
    features: [
      "2× 45-min live coaching with our co-founder",
      "Real-time, practical feedback",
      "Build clarity, empathy & executive presence",
      "For senior and leadership roles — technical & non-technical",
    ],
  },
];

const Coaching = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">Resume Building & Coaching</h2>
        <p className="text-blue-600 mb-10 underline underline-offset-2">
          Let's talk about where you're headed — and how your resume can get you there. 
          <span className="ml-1 hover:text-blue-800 transition cursor-pointer">Schedule a call to get started.</span>
        </p>

        {/* Coaching Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {coachingPlans.map((plan, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-8 border border-gray-300 rounded-2xl hover:shadow-2xl transition"
            >
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{plan.title}</h3>
                <div className="text-4xl font-extrabold text-blue-700 mb-2">{plan.price} <span className="text-lg font-normal">{plan.frequency}</span></div>
                <p className="text-sm text-blue-600 mb-6">{plan.description}</p>
                <ul className="space-y-2 text-left text-sm text-blue-900">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✔</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 w-full bg-blue-700 text-white font-semibold py-3 rounded-full hover:bg-blue-800 transition">
                Get Started →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaching;
