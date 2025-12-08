import React from 'react'

const Navbar = () => {
  return (
    <div>
        {/* Navbar */}
        <header className="p-6 flex justify-between items-center bg-[#111122]/80 border-b border-[#00ffe5]/50 backdrop-blur-md">

            <img className='w-16 rounded-md' src='/src/assets/Navicon.png'/>
            <h1 className="text-2xl font-bold text-[#00ffe5]">TrueTrace</h1>

            <nav className='flex gap-6'>

                <a href='###' className="hover:text-[#ff00ff] transition">Home</a>
                <a href='###' className="hover:text-[#ff00ff] transition">About</a>
                <a href='###' className="hover:text-[#ff00ff] transition">Account</a>

            </nav>

        </header>
    </div>
  )
}

export default Navbar