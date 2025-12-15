import React, {useState} from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate, } from "react-router-dom";
import { auth } from '../firebase'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import firebase from 'firebase/compat/app';
;

const Login = () => {
    // state to show password
    const [showPassword, setShowPassword] = useState(false);

    // state to save input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //state for erro messsages
    const [error, setError] = useState('');

    //useNavigate hook for programmit navigation
    const navigate = useNavigate();

    //Function to handle form submission (login attempt)
    const handleLogin = async (e) => {
        e.preventDefault(); // prevent the defualt form ssubmission behaviour

        setError(''); //Clear previous errors
        try {
            // Call firebase to sign in the user with email and password
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully!");

            navigate('/dashboard'); //Redirect to dashboard after login
        } catch (firebaseError) {
            //Handle errors from firebase Authentication
            console.error("Error during login:", firebaseError.Code, firebaseError.message);

            // Provide user-friendly error messages based on Firebase error codes
            switch (firebaseError.code) {
                case 'auth/invalid-email':
                    setError('The email address is not valid');
                    break;
                case 'auth/user-disabled':
                    setError('This user account has been disabled.');
                    break;
                case 'auth/user-not-found':
                    setError('No user found with this email address.');
                    break;
                case 'auth/wrong-password':
                    setError('Incorrect password. please try again.');
                    break;
                default:
                    setError('An unknown error occurred during login. please try again');
            }
        }
    }; 


  return (
    <div className='min-h-screen flex flex-col bg-[#0f0f1a] text-[#cfd8dc] font-mono'>

        {/* Navbar Placeholder */}
        <div><Navbar /></div>

        {/* Centered form */}
        <main className='flex flex-1 items-center justify-center bg-[#0f0f1a] p-4'>
            <div className='w-full max-w-sm bg-white p-8 rounded-lg shadow-lg border'>
                <form onSubmit={handleLogin} className='grid gap-6 text-gray-700'>
                    <h2 className='text-2xl font-semibold text-center mb-2'>Sign in to your account</h2>
    
                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="border rounded p-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                             value={password}
                             onChange={(e) => setPassword(e.target.value)}
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

                    {/* Display Error Message */}
                    {error && (
                        <p className='text-red-500 text-sm text-center'>{error}</p>
                    )}

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