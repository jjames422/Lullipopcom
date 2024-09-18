"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Link } from '@nextui-org/link';
import { useEffect, useState } from "react";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  // Function to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500; // Adjust this to when you want the footer to appear
      if (window.scrollY > scrollThreshold) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer
      className="bg-gray-900 text-white py-10 fixed bottom-0 w-full"
      initial={{ opacity: 0, y: 50 }} // Start hidden
      animate={showFooter ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate on scroll
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        
        {/* Brand Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">{siteConfig.name}</h2>
          <p className="text-sm text-gray-400">
            {siteConfig.description}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Explore</h2>
          <ul className="space-y-2">
            {siteConfig.navItems.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:text-gray-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Connect with Us</h2>
          <div className="flex space-x-4">
            {/* Iterate over the social media links */}
            {Object.entries(siteConfig.links).map(([name, url], index) => (
              <a key={index} href={url} target="_blank" rel="noopener noreferrer">
                <img src={`/icons/${name}.svg`} alt={name} className="w-6 h-6 hover:opacity-75" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8">
        <p>&copy; 2024 {siteConfig.name}. All Rights Reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
