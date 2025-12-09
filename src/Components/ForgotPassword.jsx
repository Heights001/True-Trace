import React, {useState} from 'react'
import Navbar from './Navbar';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Password reset link sent to ${email}')
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
                        />
                    </div>

                    {/* Submit */}
                    <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>Send reset Link</button>

                    {/* Back to Login */}
                    <p className='text-center text-sm'>Remembered your password? {" "}
                        <a href="#" className="text-blue-600 font-semibold hover:underline">Login</a>
                    </p>
                </form>
            </div>
        </main> 

        {/* Footer placeholder */} 
        <footer className='p-4 text-center bg-white shadow mt-auto'>
            <p className="text-sm text-gray-500">© 2025 My App. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default ForgotPassword