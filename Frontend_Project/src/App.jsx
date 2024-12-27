// import { useState } from 'react'
import Signin from "./auth/Signin.jsx";
import Signup from "./auth/Signup.jsx";
import Header from "./components/Header.jsx";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {!isUserLoggedIn ? <Signin /> : <Signup />}
      <Header />
    </>
  );
}

export default App;
