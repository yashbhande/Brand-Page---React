// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'

// function App() {
//   const [ count,setCount]= useState(0);

//   return <div className="App"> Hello World</div>;
// }

// export default App







//New Here
import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/Hero";
// import "./Hero.jsx";
const App = () =>{


  return(
    <div>
      <Navigation/>
      <HeroSection/>
    </div>

    

  );
};

export default App;