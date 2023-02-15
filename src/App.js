import React,{ useState }from "react";
import ThemeContext from "./Context/ThemeContext";
import HeaderSection from "./Components/HeaderSection";
import HeroSection from "./Components/HeroSection";


function App() {
  const themeHook = useState("light")
  return (
    
      <ThemeContext.Provider value={themeHook}>
       <div>
        <HeaderSection/>
        <HeroSection/></div> 
     </ThemeContext.Provider>
  );
}

export default App;
