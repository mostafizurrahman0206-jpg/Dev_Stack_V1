 
// import { Toaster } from "react-hot-toast";

// import Footer from "./Components/Sharedd/Footer.tsx";
// import HeroSection from "./Components/Sharedd/HeroSection.tsx";
// import TechnologySection from "./Components/Technology/TechnologySection";
// import Navbar from "./Components/Sharedd/Navbar.tsx";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <HeroSection />

//       <TechnologySection />

//       <Footer />

//       <Toaster position="top-right" />
//     </>
//   );
// }

// export default App;



import { Toaster } from "react-hot-toast";

import Footer from "./Components/Sharedd/Footer.tsx";
import HeroSection from "./Components/Sharedd/HeroSection.tsx";
import TechnologySection from "./Components/Technology/TechnologySection";
import Navbar from "./Components/Sharedd/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <TechnologySection />

      <Footer />

      <Toaster position="top-right" />
    </>
  );
}

export default App;