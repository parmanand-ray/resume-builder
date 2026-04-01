import React, { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="pb-32 md:pb-44 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center bg-no-repeat text-slate-800 text-sm font-['Poppins']">
      {/* Navbar Section */}
      <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 border-b border-white/25 w-full">
        <a href="/">
          <img
            src="https://prebuiltui.com/logo.svg"
            alt="Logo"
            className="h-10"
          />
        </a>

        <ul
          className={`max-md:absolute max-md:h-full max-md:z-50 max-md:w-full max-md:top-0 transition-all duration-300 max-md:backdrop-blur max-md:bg-white/70 max-md:text-base flex flex-col md:flex-row items-center justify-center gap-8 font-medium ${isMenuOpen ? "left-0" : "-left-full"}`}
        >
          <li className="hover:text-slate-500">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-slate-500">
            <a href="#products">Products</a>
          </li>
          <li className="hover:text-slate-500">
            <a href="#pricing">Pricing</a>
          </li>
          <button
            onClick={toggleMenu}
            className="md:hidden bg-gray-800 text-white p-2 rounded-md"
          >
            Close
          </button>
        </ul>

        <button onClick={toggleMenu} className="md:hidden">
          <svg
            className="size-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <button className="max-md:hidden px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded-full">
          Contact us
        </button>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col-reverse gap-10 md:flex-row px-4 md:px-16 lg:px-24 xl:px-32 mt-12 md:mt-32">
        <div className="max-md:text-center">
          <h1 className="text-4xl md:text-6xl/[76px] font-semibold max-w-xl bg-gradient-to-r from-slate-900 to-[#6D8FE4] text-transparent bg-clip-text">
            Create Job-Winning Resumes in Minutes
          </h1>

          <p className="text-sm md:text-base max-w-lg mt-6 text-slate-600">
            Build ATS-friendly resumes with real-time preview, smart
            suggestions, and instant PDF download. No design skills needed.
          </p>

          {/* ⭐ "USED BY" SECTION MOVED HERE (Above Button) */}
          <div className="flex items-center mt-8 mb-6 justify-center md:justify-start">
            <div className="flex -space-x-3.5 pr-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <img
                  key={num}
                  src={`https://i.pravatar.cc/150?img=${num + 10}`}
                  alt="user"
                  className="size-10 border-2 border-white rounded-full hover:-translate-y-px transition"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-px">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                  >
                    <path
                      d="M5.85536 0.463527C6.00504 0.00287118 6.65674 0.00287028 6.80642 0.463526L7.82681 3.60397C7.89375 3.80998 8.08572 3.94946 8.30234 3.94946H11.6044C12.0888 3.94946 12.2901 4.56926 11.8983 4.85397L9.22687 6.79486C9.05162 6.92219 8.97829 7.14787 9.04523 7.35388L10.0656 10.4943C10.2153 10.955 9.68806 11.338 9.2962 11.0533L6.62478 9.11244C6.44954 8.98512 6.21224 8.98512 6.037 9.11244L3.36558 11.0533C2.97372 11.338 2.44648 10.955 2.59616 10.4943L3.61655 7.35388C3.68349 7.14787 3.61016 6.92219 3.43491 6.79486L0.763497 4.85397C0.37164 4.56927 0.573027 3.94946 1.05739 3.94946H4.35944C4.57606 3.94946 4.76803 3.80998 4.83497 3.60397L5.85536 0.463527Z"
                      fill="#FF8F20"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Trusted by 1,000+ professionals
              </p>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-95">
              Create Resume Now — It's Free
            </button>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="w-full flex justify-center md:justify-end md:max-w-xs lg:max-w-lg">
          <img
            className="w-full h-auto drop-shadow-2xl"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/users-group.png"
            alt="Hero Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
