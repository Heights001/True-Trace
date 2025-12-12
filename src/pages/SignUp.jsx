import React, { useState } from 'react'
import { Link, } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    
  return (
    <>
    <div className='min-h-screen flex flex-col bg-[#0f0f1a] text-[#cfd8dc] font-mono'>
        <Navbar />

        {/* Centered Form */}
        <main className='flex flex-1 items-center justify-center bg-[#0f0f1a] p-4'>
            <div className='w-full max-w-sm bg-white p-8 rounded-lg shadow-lg border'>
                <form action={"#"} method='POST' className='grid gap-6 text-gray-700'>

                    <h2 className='text-2xl font-semibold text-center mb-2'> Create an Account </h2>

                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="font-medium">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border rounded p-2"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-medium">Email</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border rounded p-2"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password' className='font-medium'>Password</label>

                        <div className='relative'>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="border rounded p-2 w-full pr-12" 
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword
                                (!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 text-sm"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='confirmPassword'
                        className="font-medium">
                            Confirm Password
                        </label>

                        <div className='relative'>
                            <input
                              type={showConfirm ? "text" : "password"}
                              id="confirmPassword"
                              name="confirmPassword"
                              className="border rounded p-2 w-full pr-12"
                              required     
                             />

                             <button
                                type="button"
                                onClick={() => setShowConfirm(!showConfirm)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 text-sm"
                             >
                                {showConfirm ? "Hide" : "Show"}
                             </button>
                        </div>
                    </div>

                    {/* Terms & Conditions */}
                    <p className="text-xs text-gray-500 text-center -mt-3">
                    By signing up, you agree to our{" "}
                    <a href="/terms" className="text-blue-600 hover:underline">Terms</a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    </p>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#ff00ff] text-white py-2 hover:bg-[#ff00ff]/80 rounded transition"
                    >
                        Create Account
                    </button>

                    {/*Login link */}
                    <p className='text-center text-sm'>
                        Already have an account? {" "}
                        <Link to="../login" className="text-blue-600 font-semi-bold hover:underline">Log in</Link>
                    </p>

                </form>

            </div>
        </main>

        {/* Footer Placeholder */}
       <Footer />

    </div>
    </>
  )
}

export default SignUp   