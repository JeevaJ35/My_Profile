import React from "react";
import { Mail, Phone, Linkedin, Github, MessageCircleMore } from "lucide-react";

const Footer = () => (
  <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
    <div className="container py-8 text-sm flex flex-col md:flex-row items-center justify-between gap-4 
                    text-gray-700 dark:text-gray-300">
      
      <p>
        © <span>{new Date().getFullYear()}</span> Jeevanandham Rajasekar
      </p>

      <div className="flex gap-4 items-center">
        <a
          href="mailto:yourmail@example.com"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>

        <a
          href="tel:+919876543210"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="Phone"
        >
          <Phone className="w-5 h-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/jeevaj35"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        <a
          href="https://github.com/jeevaj35"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>

        {/* ✅ WhatsApp icon (lucide-react) */}
        <a
          href="https://wa.me/919876543210?text=Hi%20Jeevanandham!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-600 dark:hover:text-green-400 transition"
          aria-label="WhatsApp"
        >
          <MessageCircleMore className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
