
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="border-t border-gray-700 text-sm text-center py-4">
        &copy; {new Date().getFullYear()} IIT Kharagpur Induction
      </div>
    </footer>
  );
};

export default Footer;
