import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#111122]/80 border-t border-[#00ffe5]/40 backdrop-blur-md text-[#cfd8dc] font-mono">
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand / Vision */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-[#00ffe5]">True_Trace</h2>
          <p className="mt-2 text-[#cfd8dc]/70 leading-relaxed">
            Bringing clarity to the digital world.<br />
            Detect AI-generated content with precision, trust,<br />
            and next-generation forensic technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#ff00ff] mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><Link to="/" className="hover:text-[#00ffe5] transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#00ffe5] transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#00ffe5] transition">Contact</Link></li>
            <li><Link to="/login" className="hover:text-[#00ffe5] transition">Account</Link></li>
            <li><Link to="/terms" className="hover:text-[#00ffe5] transition">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[#00ffe5] transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-[#00aaff] mb-3">Connect</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a
                href="mailto:support@truetrace.com"
                className="hover:text-[#ff00ff] transition"
              >
                support@truetrace.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Heights001"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff00ff] transition"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/hussle_heights"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff00ff] transition"
              >
                Twitter / X
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#00ffe5]/30 py-4 text-center text-sm text-[#cfd8dc]/60">
        © {new Date().getFullYear()} True_Trace — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
