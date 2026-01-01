import React from "react";
import { Link } from "react-router-dom";
import NavIcon from "../assets/Navicon.png"; // Correct Vite import

const Navbar = () => {
  return (
    <header className="p-6 flex justify-between items-center bg-[#111122]/80 border-b border-[#00ffe5]/50 backdrop-blur-md">
      <Link to="/" className="flex items-center gap-3">
        <img
          className="w-16 rounded-md hover:opacity-80 transition"
          src={NavIcon}
          alt="TrueTrace Logo"
        />
      </Link>

      <h1 className="text-2xl ml-20 items-center font-bold text-[#00ffe5]">
        True_Trace
      </h1>

      <nav>
        <ul className="flex gap-6">
          <li>
            <Link to="/about" className="hover:text-[#ff00ff] transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#ff00ff] transition">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-[#ff00ff] transition">
              Account
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
