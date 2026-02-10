import Link from "next/link";
import { FaChrome } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { SiBookstack } from "react-icons/si";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3 text-red">
             <SiBookstack   className="inline items-center justify-between "/> 
           Bookstore
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Your one-stop destination for discovering, buying, and 
            <br /> enjoying
            books across  all genres.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/books" className="hover:text-white">Books</Link></li>
            <li><Link href="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-white"> <FaChrome /> </a>
            <a href="#" className="hover:text-white"> <FaTwitter /> </a>
            <a href="#" className="hover:text-white"> <FaInstagramSquare /> </a>
            <a href="#" className="hover:text-white"> <GrLinkedin /> </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} BookStore. All rights reserved.
      </div>
    </footer>
  );
}
