import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
    const navigate = useNavigate(); //hook for programmatic Navigation

    const [uploadImage, setUploadedImage] = useState(null);
    const [aiProbability, setAiProbability] = useState(0);
    const [recentScans, setRecentScans] = useState([
        {name: "image1.png", result: "AI", Probability: 92},
        {name: "image1.png", result: "Real", Probability: 42},
        {name: "image1.png", result: "AI", Probability: 88},
    ]);

    // state to display user name or email
    const[userDisplayName, setUserDisplayName] = useState('');

    // state to manage loading during auth check
    const [isLoading, setIsLoading] = useState(true);

    // This useEffect hook runs once when the component mounts
    // It listens for changes in the Firebase Authentication state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if (user) {
                //User is signed in
                setUserDisplayName(user.displayName || user.email); //set display name (or email if display name is null)
                setIsLoading(false); //Authentication check complete
            } else {
                //no user is signed in, redirect to the login page
                console.log("no user signed, redirecting to login.");
                navigate('/login'); //Redirect to your login route
            }
        });

        // Cleanup function: This is important to stop listening when the component unmounts
        return () => unsubscribe ();
    }, [navigate]); // Adding navigate to the dependency array to satisfy ESLint, though its stable.

    // Functioon to handle loggin out the user
    const handleLogout = async () => {
        try {
            await signOut(auth); //Call firebase signout function

            console.log("User logged out successfully!");
            // The onAuthStateChanged listener above will detect that the user is now null
            // and automatically navigate to '/login'.
        } catch (error) {
            console.error("Error during logout:", error.message);
            //Optionally, show a user-friendly error message
            alert("Fialed to log out. Please try again.");
        }
    };

    // Handle file upload
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadImage(URL.createObjectURL(file)); // Use setUploadedImage here

            //simulate AI probability calculation
            const randomProb = Math.floor(Math.random() * 100);
            setAiProbability(randomProb);

            setRecentScans((prev) => [
                { name: file.name, result: randomProb > 50? "AI" : "Real", Probability: randomProb },
                ...prev.slice(0, 4),
            ]);
        }
    };

    // Show a loading indicator while checking authentication status
    if (isLoading) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-[#0f0f1a] text-[#cfd8dc]'>
                <p className='text-xl'>Loading dashboard...</p>
            </div>
        );
    }

  return (
    <div className='min-h-screen bg-[#0f0f1a] text-[#cfd8dc] flex font-mono relative overflow-hidden'>

        {/*Sidebar*/}
        <aside className='w-64 bg-[#111122] border-r border-[#00ffe5]/50 p-6 flex flex-col z-10'>

            <h1 className='text-2xl font-bold text-[#00ffe5] mb-8'>True_Trace</h1>

            <nav className="flex flex-col gap-4 flex-grow"> {/*flex-grow to push logout to bottom */}
                <a href="#" className="hover:text-[#ff00ff] transition">Dashboard</a>
                <a href="#" className="hover:text-[#ff00ff] transition">Upload Image</a>
                <a href="#" className="hover:text-[#ff00ff] transition">History</a>
                <a href="#" className="hover:text-[#ff00ff] transition">Reports</a>
                <a href="#" className="hover:text-[#ff00ff] transition">Settings</a>
            </nav>
            {/* Logout section in sidebar */}
            <div className='mt-8 pt-4 border-t border-[#444466]'>
                <button
                onClick={handleLogout}
                className="w-full text-left py-2 px-3 rounded hover:bg-red-700/30 transition text-red-400"
                >
                    Log Out
                </button>
            </div>

        </aside>
        {/* Main Content */}
        <main className='flex-1 p-6 flex flex-col gap-6 z-10'>
            {/* Topbar */}
            <div className='flex justify-between items-center mb-6'>
                {/* Personalized welcome message */}
                <h2 className='text-3xl font-bold text-[#00aaff]'>Welcome, {userDisplayName}!</h2>

                <div className='flex items-center gap-4'>
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
            <div className='bg-[#111122]/70 border border-[#ff00ff]/50 rounded-lg p-4 backdrop-blur-md'>
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
                    <p className="text-2xl font-bold text-[#00ffe5]">{recentScans.length}</p>
                </div>

                <div className="bg-[#111122]/70 border border-[#ff00ff]/50 rounded-lg p-4 backdrop-blur-md">
                    <h4 className="font-semibold text-[#00aaff] mb-2">AI Detections</h4>
                    <p className="text-2xl font-bold text-[#ff00ff]">{recentScans.filter(r => r.result === "AI").length}</p>
                </div>

                <div className="bg-[#111122]/70 border border-[#00ffe5]/50 rounded-lg p-4 backdrop-blur-md">
                    <h4 className="font-semibold text-[#ff00ff] mb-2">Real Images</h4>
                    <p className="text-2xl font-bold text-[#00ffe5]">{recentScans.filter(r => r.result === "Real").length}</p>
                </div>
            </div>
        </main>
    </div>

  );
};

export default Dashboard