import React, { useState } from 'react';

const Dashboard = () => {
    const [uploadImage, setUpuoadedImage] = useState(null);
    const [aiProbability, setAiProbability] = useState(0);
    const [recentScans, setRecentScans] = useState([
        {name: "image1.png", result: "AI", Probability: 92},
        {name: "image1.png", result: "AI", Probability: 92},
        {name: "image1.png", result: "AI", Probability: 92},
    ]);
    // Handle file upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadImage(URL.createObjectURL(file));
            //simulate AI probability calculation
            const randomProb = Math.floor(Math.random() * 100);
            setAiProbability(randomProb);

            setRecentScans((prev) => [
                { name: file.name, result: randomProb > 50? "AI" : "Real", Probability: randomProb },
                ...prev.slice(0, 4),
            ]);
        }
    };

  return (
    <div className='min-h-screen bg-[#0f0f1a] text-[#cfd8dc] flex font-mono relative overflow-hidden'>

        {/*Sidebar*/}
        <aside className='w-64 bg-[#111122] border-r border-[#00ffe5]/50 p-6 flex flex-col z-10'>

            <h1 className='text-2xl font-bold text-[#00ffe5] mb-8'>True_Trace</h1>

            <nav className="flex flex-col gap-4">
                <a href="#" className="hover:text-[#ff00ff] transition">Dashboard</a>
                <a href="#" className="hover:text-[#ff00ff] transition">Upload Image</a>
                <a href="#" className="hover:text-[#ff00ff] transition">History</a>
                <a href="#" className="hover:text-[#ff00ff] transition">Reports</a>
                <a href="#" className="hover:text-[#ff00ff] transition">Settings</a>
            </nav>
        </aside>
        {/* Main Content */}
        <main className='flex-1 p-6 flex flex-col gap-6 z-10'>
            {/* Topbar */}
            <div className='flex justify-between items-center mb-6'>
                <h2 className='text-3xl font-bold text-[#00aaff]'>Dashboard</h2>
                <div className='flex items-center gap-4'>
                    <button className='px-3 py-1 border border-[#00ffe5] rounded hover:bg-[#00ffe5]/10 transition'>Dark Mode</button>
                    <div className='w-10 h-10 bg-[#111122] rounded-full border border-[#ff00ff] flex items-center justify-center'>
                        👤
                    </div>
                </div>
            </div>

            {/*Upload & Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Upload Card */}
                <div className="bg-[#111122]/70 border border-[#00ffe5]/50 rounded-lg p-4 backdrop-blur-md flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-[#ff00ff]">
                        Upload Media
                    </h3>
                    <label className="flex flex-col items-center justify-center border-2 border-dashed border-[#00ffe5] rounded p-8 cursor-pointer hover:border-[#ff00ff] transition text-center">
                        {uploadImage ? (
                            <img src={uploadImage} alt="upload" className='max-h-40 mb-2 rounded border border-[#00aaff]' />
                        ) : (
                            <span className='text-[#00ffe5]'>Drag & drop or Click to upload</span>
                        )}
                        <input type="file" className='hidden' onChange={handleFileChange} />
                    </label>

                    {uploadImage && (
                        <div className='mt-2'>
                            <div className='text-[flex justify-between mb-1'>
                                <span>AI Probability</span>
                                <span className='text-[#00ffe5] font-bold'>{aiProbability}%</span>
                            </div>
                            <div className='w-full h-2 bg-[#222244] rounded overflow-hidden'>
                                <div className='h-2 bg-[#ff00ff] rounded transition-all duration-500' style={{width: `${aiProbability}%` }}
                                ></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Recent Scans */}
            <div className='ng-[#111122]/70 border border-[#ff00ff]/50 rounded-lg p-4 backdrop-blur-md'>
                <h3 className="text-xl font-semibold text-[#00aaff] mb-4">Recent Scans</h3>
                <ul className='flex flex-col gap-3'>
                    {recentScans.map((scan, i) => (
                        <li key={i} className="flex justify-between border-b border-[#444466] pb-2">
                            <span>{scan.name}</span>
                            <span className={`fonot-bold ${scan.result === "AI" ? "text-[#ff00ff]" : "text-[#00ffe5]"}`}>
                                {scan.result} {scan.probability}%
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#111122]/70 border border-[#00aaff]/50 rounded-lg p-4 backdrop-blur-md">
                    <h4 className="font-semibold text-[#ff00ff] mb-2">Total Images</h4>
                    <p className="text-2xl font-bold text-[#00ffe5]">{recentScans.length + 0}</p>
                </div>

                <div className="bg-[#111122]/70 border border-[#ff00ff]/50 rounded-lg p-4 backdrop-blur-md">
                    <h4 className="font-semibold text-[#00aaff] mb-2">AI Detections</h4>
                    <p className="text-2xl font-bold text-[#ff00ff]">{recentScans.filter(r => r.result === "AI").length + 0}</p>
                </div>

                <div className="bg-[#111122]/70 border border-[#00ffe5]/50 rounded-lg p-4 backdrop-blur-md">
                    <h4 className="font-semibold text-[#ff00ff] mb-2">Real Images</h4>
                    <p className="text-2xl font-bold text-[#00ffe5]">{recentScans.filter(r => r.result === "Real").length + 0}</p>
                </div>
            </div>
        </main>
    </div>

  );
};

export default Dashboard