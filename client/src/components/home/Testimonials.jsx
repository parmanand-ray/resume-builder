import { BookUserIcon } from "lucide-react";
import React from "react";
import Title from "./Title";

const Testimonials = () => {
  const cardsData = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Rahul Sharma",
      role: "Frontend Developer (Fresher)",
      company: "TCS",
      feedback:
        "I created my resume in 10 minutes and got interview calls within a week. The ATS templates really work.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Priya Verma",
      role: "BBA Graduate",
      company: "Wipro",
      feedback:
        "I had no idea how to make a resume. This tool made it super easy with smart suggestions and clean design.",
    },
    {
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Amit Kumar",
      role: "Backend Developer",
      company: "Infosys",
      feedback:
        "My old resume was getting rejected. After using this builder, I started getting more responses from recruiters.",
    },
    {
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Sneha Patel",
      role: "MBA Student",
      company: "Deloitte (Intern)",
      feedback:
        "The formatting and structure are perfect. I used it for my internship applications and it worked really well.",
    },
  ];

  const CreateCard = ({ card }) => (
    <div id="testimonials" className="p-5 rounded-xl mx-4 shadow hover:shadow-lg transition-all duration-300 w-80 shrink-0 bg-white border border-gray-100">
      {/* Top Section */}
      <div className="flex gap-3 items-center">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={card.image}
          alt={card.name}
        />

        <div>
          <div className="flex items-center gap-1">
            <p className="font-semibold text-slate-800">{card.name}</p>

            {/* Verified icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="green"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-badge-check-icon lucide-badge-check"
            >
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>

          <p className="text-xs text-slate-500">
            {card.role} • {card.company}
          </p>
        </div>
      </div>

      {/* Feedback */}
      <p className="text-sm text-slate-700 mt-4 leading-relaxed">
        "{card.feedback}"
      </p>

      {/* Bottom (optional minimal info) */}
      <div className="mt-4 text-xs text-slate-400">Verified User</div>
    </div>
  );
  return (
    <div
      id="features"
      className="flex flex-col items-center my-10 scroll-mt-12 max-w-7xl mx-auto"
    >
      <div className="flex items-center gap-2 text-sm text-green-800 bg-green-400/10   rounded-full px-6 py-1.5">
        <BookUserIcon className="size-4.5 stroke-green-600" />
        <span>Real success stories from job seekers</span>
      </div>
      <Title
        title="See How Our Users Are Landing Jobs Faster"
        description="Discover how job seekers improved their resumes, passed ATS filters, and got more interview calls using our AI-powered resume builder."
      />

      <>
        <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>

        <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>

        <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
            {[...cardsData, ...cardsData].map((card, index) => (
              <CreateCard key={index} card={card} />
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </>
    </div>
  );
};

export default Testimonials;
