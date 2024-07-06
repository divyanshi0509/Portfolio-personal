import logo from "../assets/Divyanshilogo1.png";
import {FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-betweem py-6">
      <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10 " src={logo} alt="logo image" />
      </div>
      <div className="flex-grow flex justify-end">
        <ul className=" flex items-center gap-6 text-2xl ">
          <li>
            <a href="#about" className=" hover:underline hover:text-sky-500" >About</a>
          </li>
          <li>
            <a href="#Skills" className=" hover:underline hover:text-sky-500">Skills</a>
          </li>
          <li>
            <a href="#projects" className=" hover:underline hover:text-sky-500">Projects</a>
          </li>
          <li>
            <a href="#contact" className=" hover:underline hover:text-sky-500">Contact me</a>
          </li>
        </ul>
      </div>
      <div className="mx-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/divyanshi-jain-53a0b824a/" className=" hover:text-sky-500"> <FaLinkedin /></a>
        <a href="https://github.com/divyanshi0509" className=" hover:text-sky-500"> <FaGithub /></a>
        <a href="https://leetcode.com/u/divyanshi0509/" className=" hover:text-sky-500"> <SiLeetcode /> </a>
      </div>
    </nav>
  )
}

export default Navbar
