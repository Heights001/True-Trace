import React from 'react'
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <>
        <div className='min-h-screen bg-[#0f0f1a] text-[#cfd8dc] font-mono relative overflow-hidden'>
            <div><Navbar /></div>


            {/* Hero Section */}
            <section className='flex flex-col items-center justify-center text-center py-24 px-6 gap-6'>

                <h2 className='text-5xl md:text-6xl font-bold text-[#00aaff]'> Uncover the Truth </h2>

                <p className='text-lg md:text-xl text-[#cfd8dc]/80 max-w-2xl'> Analyze All digital Media types and detect whether they are AI-generated or real. Take control of digital evidence with out futuristic legal toolkit.</p>

                <a href="#" className='mt-4 px-8 py-3 bg-[#ff00ff] rounded hover:bg-[#ff00ff]/80 text-white font-semibold transition'>
                Get Started
                </a>
            </section>

            {/* Features Section */}
            <section className='grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mb-12'>

                <div className='bg-[#111122]/70 border border-[#00ffe5]/50 rounded-lf p-6 backdrop-blur-md text center'>
                    <h3 className='text-xl font-semibold text-[#ff00ff] mb-2'>AI Detection</h3>
                    <p className='text-[#cfd8dc]/80'>Quickly analyze images to detect AI-generated content with high accuracy</p>
                </div>

                <div className="bg-[#111122]/70 border border-[#ff00ff]/50 rounded-lg p-6 backdrop-blur-md text-center">
                    <h3 className='text-xl font-semibold text-[#00aaff] mb-2'>Evidence Board</h3>
                    <p className='text-[#cfd8dc]/80'>Organize analyzed images like a lawyer's case file for easy reference.</p>
                </div>

                <div className="bg-[#111122]/70 border border-[#ff00ff]/50 rounded-lg p-6 backdrop-blur-md text-center">
                    <h3 className="text-xl font-semibold text-[#ff00ff] mb-2">Trends & Stats</h3>
                    <p className='text-[#cfd8dc]/80'>Keep Track of AI vs real media trends and make informed decisions.</p>
                </div>

            </section>

            {/* Quick Stats Section */}
            <section className='grid grid-cols-1 md:grid-cols-3 gap-6 px-6. mb-12'>

                <div className='bg-[#111122]/70 border border-[#00aaff]/50 rounded-lg p-6 backdrop-blur-md text-center'>
                    <h4 className='text-[#ff00ff] font-semibold mb-2'>Images Scanned</h4>
                    <p className="text-2xl text-[#00ffe5] font-bold">0</p>
                </div>

                <div className='bg-[#111122]/70 border border-[#00aaff]/50 rounded-lg p-6 backdrop-blur-md text-center'>
                    <h4 className="text-[#00aaff] font-semibold mb-2">AI Detected</h4>
                    <p className="text-2xl text-[#00ffe5] font-bold">0</p>
                </div>

                <div className="bg-[#111122]/70 border border-[#00ffe5]/50 rounded-lg p-6 backdrop-blur-md text-center">
                    <h4 className="text-[#ff00ff] font-semibold mb-2">Real Images</h4>
                    <p className="text-2xl text-[#00ffe5] font-bold">0</p>
                </div>

            </section>

            {/* Footer */}
            <footer className="p-6 text-center bg-[#111122]/80 border-t border-[#00ffe5]/50 backdrop-blur-md">
                <p className='text-sm text-[#cfd8dc]/70'>© 2025 TruthAnalyzer. All rights reserved.</p>
            </footer>
    
        </div>
    </>
  );
};

export default HomePage