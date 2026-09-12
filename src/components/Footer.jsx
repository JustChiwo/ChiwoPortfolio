import logo from "../assets/github.svg";
import logo2 from "../assets/linkedin.svg";
import logo3 from "../assets/instagram.svg";
import logo4 from "../assets/tiktok.svg";
function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright / Brand */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/JustChiwo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 text-sm"
          >
            <img src={logo} alt="GitHub" className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/justchiwo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 text-sm"
          >
            <img src={logo2} alt="LinkedIn" className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/just.chiwo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 text-sm"
          >
            <img src={logo3} alt="Instagram" className="w-5 h-5" />
          </a>
          <a
            href="https://www.tiktok.com/@just_chiwo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 text-sm"
          >
            <img src={logo4} alt="TikTok" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
