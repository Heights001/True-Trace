import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
        {/* Navbar */}
        <header className="p-6 flex justify-between items-center bg-[#111122]/80 border-b border-[#00ffe5]/50 backdrop-blur-md">

          <img className='w-16 rounded-md' src='/src/assets/Navicon.png'/>
          <h1 className="text-2xl ml-20 items-center font-bold text-[#00ffe5]">True_Trace</h1>

            <ul className='flex gap-6'>
              <li className="hover:text-[#ff00ff] transition"><Link to="/HomePage"></Link>Home</li>
              <li className="hover:text-[#ff00ff] transition"><Link to="/About"></Link>About</li>
              <li className="hover:text-[#ff00ff] transition"><Link to="/SignUp"></Link>Account</li>

              {/* 
              <a href='###' className="hover:text-[#ff00ff] transition">Home</a>
              <a href='###' className="hover:text-[#ff00ff]  transition">About</a>
              <a href='###' className="hover:text-[#ff00ff] transition">Account</a>*/}
            </ul>
        </header>
      </div>
  )
}

export default Navbar