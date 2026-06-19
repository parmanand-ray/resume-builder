import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 🔥 Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <section className="pb-20 md:pb-44 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-with-grid.png')] bg-cover bg-center text-green-800 text-sm font-['Poppins']">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-white/25 relative">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="flex items-center justify-center rounded-xl"
            style={{
              width: 40,
              height: 40,
              background: "linear-gradient(135deg, #3B6D11, #639922)",
            }}
          >
            <span className="text-white font-bold">PR</span>
          </div>

          <div>
            <div className="text-lg font-semibold text-green-700">
              ProResume AI
            </div>
            <div className="text-[10px] tracking-widest uppercase text-green-600">
              Resume Builder
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">

          {!user && (
            <>
              <Link
                to="/app?state=register"
                className="hidden md:block px-6 py-2 text-white bg-green-600 rounded-full"
              >
                Get Started
              </Link>

              <Link
                to="/app?state=login"
                className="px-4 py-2 rounded-full bg-white border text-green-700"
              >
                Login
              </Link>
            </>
          )}

          {user && (
            <Link
              to="/app"
              className="hidden md:flex px-6 py-2 bg-green-600 text-white rounded-full"
            >
              Dashboard <ArrowRight size={16} className="ml-1" />
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="black" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-white/90 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-lg font-medium transition-all duration-300 md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >

          <button
            onClick={toggleMenu}
            className="absolute top-5 right-5 px-4 py-2 bg-green-700 text-white rounded-md"
          >
            Close
          </button>

          <a onClick={toggleMenu} href="#">Home</a>
          <a onClick={toggleMenu} href="#features">Features</a>
          <a onClick={toggleMenu} href="#testimonials">Testimonials</a>
          <a onClick={toggleMenu} href="#contacts">Contacts</a>

          <Link
            to="/app"
            className="px-6 py-3 bg-green-600 text-white rounded-full"
            onClick={toggleMenu}
          >
            Open App
          </Link>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 px-4 md:px-16 lg:px-24 xl:px-32 mt-10 md:mt-24">

        {/* LEFT TEXT */}
        <div className="text-center md:text-left max-w-xl">

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight bg-gradient-to-r from-green-900 to-green-500 text-transparent bg-clip-text">
            Create Job-Winning Resumes in Minutes
          </h1>

          <p className="mt-5 text-green-600 text-sm md:text-base">
            Build ATS-friendly resumes with real-time preview, smart suggestions, and instant PDF download.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

            <Link
              to="/app"
              className="px-6 py-3 bg-green-600 text-white rounded-full text-center"
            >
              Create Resume — Free
            </Link>

            <a
              href="#features"
              className="px-6 py-3 border border-green-600 text-green-700 rounded-full text-center"
            >
              Learn More
            </a>

          </div>

        </div>

        {/* IMAGE */}
        <div className="w-full flex justify-center md:justify-end">
          <img
            src="/resume.avif"
            className="w-[250px] sm:w-[320px] md:w-[420px]"
            alt="resume"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
