// import logo from '../../assets/logo-text.png' 
// import { IoLogIn } from "react-icons/io5";

// const Navbar = () => {
//   return (
//     <nav className=  "bg-white fixed top-0 left-0 w-full z-50 " > 
//     <div className= "container mx-auto h-20 flex justify-between  items-center  " >
      
//       <div> <a className = 'flex items-center' href="#"> 
//         <img className = 'h-9 w-auto' src={logo} alt="Logo" /> </a> </div>

//       <ul className="flex justify-center items-center gap-6 text-lg font-medium">
//         <li><a  href="#" className="text-[#DB2777]   hover:text-blue-500">Home</a></li>
//         <li><a href="#" className="text-gray-600 hover:text-blue-500">Technologies</a></li>
//         <li><a href="#" className="text-gray-600 hover:text-blue-500">Projects</a></li>
//         <li><a href="#" className="text-gray-600 hover:text-blue-500">About</a></li>
//         <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact</a></li>
//       </ul>
//       <div > <p>  Sign In </p> 
        
        
        
//          </div>
//     </div>
//     </nav>
//   )
// }


// export default Navbar   


const Navbar = () => {
  return (
    <nav className="h-[72px] border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-purple-500 to-pink-500 text-xs font-bold text-white">
            DS
          </div>

          <span className="text-lg font-bold">
            <span className="text-[#334155]">Dev</span>
            <span className="text-[#e91e63]">Stack</span>
          </span>
        </div>

        {/* Navi */}
        <div className="hidden items-center gap-7 md:flex">
          <a className="text-sm text-[#e91e63]" href="#">
            Home
          </a>

          <a className="text-sm text-[#334155] hover:text-pink-500" href="#technologies">
            Technologies
          </a>

          <a className="text-sm text-[#334155] hover:text-pink-500" href="#projects">
            Projects
          </a>

          <a className="text-sm text-[#334155] hover:text-pink-500" href="#about">
            About
          </a>

          <a className="text-sm text-[#334155] hover:text-pink-500" href="#contact">
            Contact
          </a>
        </div>

        {/* Auth */}
        <div className="flex items-center gap-5">
          <a className="hidden text-sm text-[#172554] hover:text-pink-500 sm:block" href="#signin">
            Sign In
          </a>

          <button className="rounded-full bg-[#e91e63] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-600">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;