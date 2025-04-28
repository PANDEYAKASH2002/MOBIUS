import React from "react";

const plans = [
  {
    title: "April Promo",
    price: "$35",
    frequency: "/week",
    features: [
      "Curated jobs from 1M+ listings, refreshed every 48 hours",
      "Up to 20 human-applied roles per week (no bots, no fluff)",
      "Extra apps for $15 each",
      "Dedicated application analyst",
      "Personalized with up to 10 filters & 5 job titles",
    ],
  },
  {
    title: "Starter",
    price: "$50",
    frequency: "/week",
    popular: true,
    features: [
      "All the perks of the Promo Plan, plus:",
      "Resume review & story-focused feedback",
      "Dedicated search specialist",
      "Up to 50 job apps/week",
      "Extra apps at $15 each",
      "Analyst support within 6 hours (SLA/PST hours)",
    ],
  },
  {
    title: "Plus",
    price: "$100",
    frequency: "/week",
    features: [
      "Everything in Starter, with more muscle:",
      "Up to 75 apps/week",
      "Apply to 15 job titles",
      "Analyst + full application team on Pacific hours",
    ],
  },
];

const advancePlan = {
  title: "Advance",
  price: "$150",
  frequency: "/week",
  features: [
    "Everything in Plus",
    "Custom Resumes & Cover Letters",
    "20 fully customized applications/week",
    "Help with complex job searches",
    "Access to senior resume experts, Founder & Exec Coaches",
  ],
};

const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-12 text-center">Job Application Service Plans</h2>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between p-8 border rounded-2xl ${
                plan.popular ? "border-blue-700 shadow-lg" : "border-gray-300"
              } hover:shadow-2xl transition`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{plan.title}</h3>
                <div className="text-4xl font-extrabold text-blue-700 mb-2">{plan.price}<span className="text-lg font-normal">{plan.frequency}</span></div>
                <ul className="mt-6 space-y-2 text-sm text-blue-900">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
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

        {/* Advance Plan */}
        <div className="bg-blue-700 rounded-2xl text-white p-12 text-center">
          <h3 className="text-2xl font-bold mb-6">{advancePlan.title}</h3>
          <div className="text-5xl font-extrabold mb-4">{advancePlan.price}<span className="text-2xl font-normal">{advancePlan.frequency}</span></div>
          <ul className="mt-8 mb-8 space-y-2 text-sm">
            {advancePlan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center justify-center gap-2">
                <span className="text-green-400">✔</span> {feature}
              </li>
            ))}
          </ul>
          <button className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
