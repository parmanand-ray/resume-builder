import React from "react";
import {
  Mail,
  Phone,
  Code,
  Globe,
  Database,
  Terminal,
  Download,
  Link,
} from "lucide-react";
import Banner from "../components/home/Banner";
import { FaGithub } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";

const ParmanandPortfolio = () => {
  return (
    <>
      <Banner />
      <div className="bg-slate-50 min-h-screen font-sans text-slate-900">
        {/* --- HERO SECTION --- */}
        <section className="relative bg-[#e0f2f1] overflow-hidden px-6 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left z-10">
              <h2 className="text-2xl font-semibold text-teal-700 mb-2">
                Hello, I'm Parmanand Ray
              </h2>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                Web Developer
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-xl">
                I am a specialized developer focusing on dynamic, SEO-friendly
                web applications. I build and customize professional platforms
                tailored to client needs.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a
                  href="mailto:Parmanand.raay@gmail.com"
                  className="bg-teal-600 text-white px-8 py-3 rounded-md font-medium hover:bg-teal-700 transition"
                >
                  CONTACT ME
                </a>
                <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-md font-medium hover:bg-teal-50 transition">
                  LEARN MORE
                </button>
              </div>
            </div>

            {/* Image Placeholder Area (Inspired by reference) */}
            <div className="relative flex-1 flex justify-center">
              <div className="w-80 h-80 lg:w-[450px] lg:h-[450px] bg-teal-200 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl">
                {/* Replace with your profile photo */}
                <div className="relative w-full h-full rounded-full border-[12px] border-white shadow-2xl overflow-hidden bg-slate-800">
                  <img
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJueGZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3bmZ3JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/qgQUggAC3Pfv687qPC/giphy.gif"
                    alt="Developer Coding GIF"
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ABOUT & SKILLS SECTION --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Small Circle Image with Tech Icons */}
            <div className="relative mx-auto lg:mx-0">
              <div className="w-64 h-64 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border-8 border-white shadow-lg">
                <span className="text-slate-400">
                  <img
                    src="/image.jpeg"
                    alt="deleloper Image"
                    className="w-full h-full object-cover"
                  />
                </span>
              </div>
              {/* Tech Badges (Floating) */}
              <div className="absolute top-0 -right-4 bg-white p-3 rounded-full shadow-md text-teal-600 font-bold">
                php
              </div>
              <div className="absolute bottom-4 -left-4 bg-white p-3 rounded-full shadow-md text-blue-500 font-bold">
                React
              </div>
              <div className="absolute -bottom-2 right-12 bg-white p-3 rounded-full shadow-md text-green-600 font-bold">
                Node
              </div>
            </div>

            {/* "Who Am I" Content */}
            <div className="flex-1">
              <span className="text-teal-600 font-bold tracking-widest text-sm uppercase">
                About
              </span>
              <h3 className="text-3xl font-bold mt-2 mb-6 text-slate-800">
                Who Am I
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                I hold a B.Tech in Computer Science Engineering with a focus on
                full-stack development. My expertise spans modern technologies
                like Node.js, Express, and React.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Terminal size={18} className="text-teal-600" /> I Can
                    Develop Anything
                  </h4>
                  <p className="text-sm text-slate-500">
                    From secure room rental platforms like{" "}
                    <strong>WanderLust</strong> to interactive weather
                    dashboards.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Globe size={18} className="text-teal-600" /> I Follow
                    Digital Trends
                  </h4>
                  <p className="text-sm text-slate-500">
                    I stay ahead by building SEO-friendly websites and
                    implementing progressive difficulty scaling in interactive
                    games.
                  </p>
                </div>
              </div>

              {/* --- NEW SOCIAL & CONTACT SECTION --- */}
              <div className="border-t border-slate-200 pt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Contact Details */}
                  <div className="space-y-3">
                    <a
                      href="mailto:Parmanand.raay@gmail.com"
                      className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors"
                    >
                      <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                        <Mail size={18} />
                      </div>
                      <span className="text-sm font-medium">
                        Parmanand.raay@gmail.com{" "}
                      </span>
                    </a>
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="p-2 bg-teal-50 rounded-lg text-teal-600">
                        <Phone size={18} />
                      </div>
                      <span className="text-sm font-medium">
                        (+91) 8294952890{" "}
                      </span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/parmanand-ray"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-slate-800 text-white rounded-full hover:bg-teal-600 transition-all shadow-md"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/in/parmanand-ray"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-[#0077b5] text-white rounded-full hover:bg-teal-600 transition-all shadow-md"
                    >
                      <BsLinkedin size={20} />
                    </a>

                    <a
                      href="https://www.instagram.com/parmanand_ray_01/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-[#d62976] text-white rounded-full hover:bg-teal-600 transition-all shadow-md"
                    >
                      <GrInstagram size={20} />
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-slate-200 rounded-full text-slate-700 font-bold text-xs hover:border-teal-600 hover:text-teal-600 transition-all"
                    >
                      <Download size={16} /> DOWNLOAD CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- RECENT PROJECTS / SKILLS GRID --- */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-teal-600 font-bold tracking-widest text-sm uppercase">
                  Portfolio
                </span>
                <h3 className="text-3xl font-bold mt-2 text-slate-800">
                  Featured Work
                </h3>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="group rounded-xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-xl transition">
                <div className="h-48 bg-slate-200 flex items-center justify-center font-bold text-slate-400">
                  WanderLust Preview
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2">WanderLust</h4>
                  <p className="text-sm text-slate-500 mb-4">
                    Full-stack platform using Node.js and MongoDB.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-teal-100 text-teal-700 px-2 py-1 rounded">
                      Express.js
                    </span>
                    <span className="text-[10px] bg-teal-100 text-teal-700 px-2 py-1 rounded">
                      MVC
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group rounded-xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-xl transition">
                <div className="h-48 bg-slate-200 flex items-center justify-center font-bold text-slate-400">
                  Weather App Preview
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2 text-slate-800">
                    Weather Info App
                  </h4>
                  <p className="text-sm text-slate-500 mb-4">
                    React and Material UI integration with real-time data.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      React
                    </span>
                    <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded">
                      Material UI
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group rounded-xl overflow-hidden bg-slate-50 border border-slate-100 hover:shadow-xl transition">
                <div className="h-48 bg-slate-200 flex items-center justify-center font-bold text-slate-400">
                  Simon Says Preview
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2 text-slate-800">
                    Simon Says Game
                  </h4>
                  <p className="text-sm text-slate-500 mb-4">
                    Event-driven JavaScript game with engagement scaling.
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                      JavaScript
                    </span>
                    <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                      DOM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER CONTACT --- */}
        <footer className="bg-slate-900 text-white py-12 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h2 className="text-2xl font-bold">PARMANAND RAY</h2>
              <p className="text-slate-400 text-sm mt-1">
                Sandip University Madhubani | Bihar{" "}
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href="mailto:Parmanand.raay@gmail.com"
                className="flex items-center gap-2 hover:text-teal-400 transition"
              >
                <Mail size={20} />{" "}
                <span className="text-sm">parmanand.ray@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone size={20} />{" "}
                <span className="text-sm">+91-8294952890</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ParmanandPortfolio;
