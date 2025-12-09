import HomePage from './Components/HomePage'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import ForgotPassword from './Components/ForgotPassword';

export default function App() {  

  return (
    <>
      <div><HomePage /></div>
      <div><SignUp /></div>
      <div><Login /></div>
      <div><ForgotPassword /></div>
    </>
  );
};