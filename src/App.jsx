import { useState } from 'react'
import HomePage from './Components/HomePage'
import SignUp from './Components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div><HomePage /></div>
      <div><SignUp /></div>
    </>
  );
};

export default App
