import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/HomePage'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import ForgotPassword from './Components/ForgotPassword';
import Dashboard from './Components/Dashboard';

export default function App() {  

  return (
    <>

      {/* Routes */}
      <Routes>

        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Dashboard" element={<Dashboard />} />

      </Routes>
    </>

  );
};