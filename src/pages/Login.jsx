import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='min-h-screen flex flex-col bg-[#0f0f1a] text-[#cfd8dc] font-mono'>

        {/* Navbar Placeholder */}
        <div><Navbar /></div>

        {/* Centered form */}
        <main className='flex flex-1 items-center justify-center bg-[#0f0f1a] p-4'>
            <div className='w-full max-w-sm bg-white p-8 rounded-lg shadow-lg border'>
                <form action={"#"} method='POST' className='grid gap-6 text-gray-700'>
                    <h2 className='text-2xl font-semibold text-center mb-2'>Sign in to your account</h2>
    
                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
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
                             className='border rounded p-2 w-full pr-12'
                             required
                            />

                            {/* Toggle button */}
                            <button
                             type="button"
                             onClick={() => setShowPassword (!showPassword)}
                             className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-80 text-sm'
                            >
                             {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* Remember + Forgot Password */}
                    <div className='flex items-center justify-between text-sm'>
                        <label className='flex items center gap-2'>
                            <input type="checkbox" name='remember' />
                            <span>Remember me</span>
                        </label>

                        <Link to="/password" className='text-blue-600 font-medium hover:underline'>Forgot Password?</Link>
                    </div>

                    {/* Submit */}
                    <button
                     type='submit'
                     className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'
                    >
                     Login
                    </button>

                    {/* SignUp Link */}
                    <p className='text-center text-sm'>Don't have an account? {' '}
                        <Link to="../signup" className='text-blue-600 font-semi-bold hover:underline'>Sign Up</Link>
                    </p>
                </form>

            </div>
        </main>

        {/* Footer placeholder */}
        <Footer />

    </div>
  );
};

export default Login