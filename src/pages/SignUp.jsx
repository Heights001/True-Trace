import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Navbar from '/components/Navbar';
import Footer from '/components/Footer';

const SignUp = () => {
    //manage password visibility
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    //store input values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');

    //error messages from Firebase or client-side validation
    const [error, setError] = useState('');

    //useNnavigate hook for programmatic navigation
    const navigate = useNavigate();

    //Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault() // Prevent the default form submission behavior (page reload)

        setError('') // Clear any previous errors

        // Basic client-side validation
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {

            //Call Firebase to create a new user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log("User signed up successfully:", user);
            // Optionally, you might want to update the user's profile with their full name
            // For example: await updateProfile(user, { displayName: fullName });
            // This would require importing updateProfile from 'firebase/auth'

            //Redirect the user to the Dashboard upon successful signup
            navigate('/dashboard');
        } catch (firebaseError) {
            //Handle errors from Firebase Authentication
            console.error("Error during sign-up:", firebaseError.code, firebaseError.message);

            switch (firebaseError.code) {

                case 'auth/email-already-in-use':

                    setError('The email address is already in use by another account.');

                    break;

                case 'auth/invalid-email':

                    setError('The email address is not valid.');

                    break;

                case 'auth/operation-not-allowed':

                    setError('Email/password sign-up is not enabled. Please check Firebase console.');

                    break;

                case 'auth/weak-password':

                    setError('The password is too weak. Please choose a stronger password.');

                    break;

                default:

                    setError('An unknown error occurred during sign-up. Please try again.');
            }

        }

    };
    
  return (
    <>
    <div className='min-h-screen flex flex-col bg-[#0f0f1a] text-[#cfd8dc] font-mono'>
        <Navbar />

        {/* Centered Form */}
        <main className='flex flex-1 items-center justify-center bg-[#0f0f1a] p-4'>
            <div className='w-full max-w-sm bg-white p-8 rounded-lg shadow-lg border'>
                <form onSubmit={handleSubmit} className='grid gap-6 text-gray-700'> {/* Added onSubmit handler */}

                    <h2 className='text-2xl font-semibold text-center mb-2'> Create an Account </h2>

                    {/* Name */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName" className="font-medium">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            className="border rounded p-2"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email} //bind value to state
                            onChange={(e) => setEmail(e.target.value)} // Update state on change
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
                                value={password} // Bind value to state

                                onChange={(e) => setPassword(e.target.value)} // Update state on change
                                required 
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
                              value={confirmPassword} // Bind value to state
                              onChange={(e) => setConfirmPassword(e.target.value)} // Update state on change
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

                    {/* Dispalys Error Message */}
                    {error && (
                        <p className="text-red-500 text-sm text-center -mt-3">{error}</p>
                    )}

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
                        <Link to="/login" className="text-blue-600 font-semi-bold hover:underline">Log in</Link>
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