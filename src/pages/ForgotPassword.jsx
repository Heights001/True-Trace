import React, {useState} from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Link, } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [ message, setMessage] = useState("");
    const [ error, setError] = useState("");
    const [ loading, setLoading] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); //Set loading to true when the request starts
        setMessage(""); // Clear previous messages
        setError(""); // Clear previous errors
        
        const auth = getAuth(); // Get the firebase Auth instance

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Password reset link sent to your email. Please check your inbox.");
        } catch (error) {
            console.error("Error sending password reset email:", error);
            switch (error.code) {
                case 'auth/individual-email':
                    setError("Please enter a valid email address.");
                    break;
                case 'auth/user-not-found':
                    setError("If this email is registered, a password reset link has been sent.");
                    break;
                case 'auth/network-request-failed':
                    setError("Network error. Please check your internet connection");
                    break;
                default:
                    setError("Failed to send password reset link. Please try again.");
            }
        } finally {
            setLoading(false); // Set loading to false when the request completes
        }
    }
  return (
    <div className='min-h-screen flex flex-col bg-[#0f0f1a] text-[#cfd8dc] font-mono'>

        <Navbar />

        {/* Centered Form */} 
        <main className='flex flex-1 items-center justify-center bg-[#0f0f1a] p-4'>
            <div className='w-full max-w-sm bg-white p-8 rounded-lg shadow-lg border'>
                <form action={"#"} method='POST' className='grid gap-6 text-gray-700'>
                    <h2 className='text-2xl font-semibold text-center mb-2'>
                        Reset Your Password
                    </h2>

                    <p className='text-sm text-gray-600 text-center mb-4'>
                        Enter your email address below and we'll send you a link to reset your password.
                    </p>

                    {message && <div className='p-3 text-sm font-medium text-green-700 bg-green-100 rounded'>{message}</div>}
                    {error && <div className='p-3 text-sm font-medium text-red-700 bg-red-100 rounded'>{error}</div>}

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-medium">Email</label>
                        <input
                         type="email"
                         id="email"
                         name="email"
                         className='border rounded p-2'
                         required
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         disabled={loading} // Disable input while loading 
                        />
                    </div>

                    {/* Submit */}
                    <button 
                        type="submit" 
                        className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled={loading}'>
                        {loading ? 'Sending...' : 'Send reset Link'}                      
                    </button>
                    
                    {/* Back to Login */}
                    <p className='text-center text-sm'>Remembered your password? {" "}
                        <Link to="../login" className="text-blue-600 font-semi-bold hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </main> 

        {/* Footer placeholder */} 
        <Footer />
    </div>
  )
}

export default ForgotPassword