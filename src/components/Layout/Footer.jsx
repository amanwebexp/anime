import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#0F1114] text-white py-16 px-6 footer-bg">
        <div className="max-w-[1780px] mx-auto">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-start gap-12 border-b border-gray-700 pb-20">
            {/* Left Section - 60% */}
            <div className="w-full md:w-[60%]">
              <div className="text-[124px] font-bold text-[#DF9023] footer-subtitle leading-[1]">
                Let’s talk
              </div>
            </div>
            {/* Right Section - 40% */}
            <div className="w-full md:w-[40%]">
              <p className="text-[35px] mb-14">
                Stay up-to-date with the latest releases.
              </p>
              {/* Form */}
              <form className="flex items-center border-b border-gray-600 pb-2">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-transparent w-full text-white placeholder-gray-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="ml-4 text-white hover:text-[#DF9023]"
                >
                  →
                </button>
              </form>
              {/* Social Icons */}
              <div className="flex gap-6 mt-6 text-2xl text-white">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E3962B] transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E3962B] transition-colors"
                >
                  <FacebookRoundedIcon />
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E3962B] transition-colors"
                >
                  <XIcon />
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E3962B] transition-colors"
                >
                  <YouTubeIcon />
                </a>
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E3962B] transition-colors"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="text-center text-[19px] text-white mt-6">
            Copyrights 2025 anime.harjeevan
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
