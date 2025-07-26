// components/Footer.tsx
'use client';

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/AnkitPatel1999", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/ankitpatel1999", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            © 2025 Ankit Patel. All rights reserved.
          </motion.p>
          <div className="flex gap-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;