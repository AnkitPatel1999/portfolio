// components/About.tsx
'use client';

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";
import Image from "next/image";

const About = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/AnkitPatel1999", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ankitpatel1999", label: "LinkedIn" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedText 
          text="About Me"
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        />
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/about/ankit1.png"
              alt="Ankit Patel" 
              className="rounded-2xl shadow-sm w-full"
              width={800}
              height={600}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground">
              I am a Full-stack web developer with over 2.5 years of experience building fast, reliable, and user-friendly web applications. Proven expertise in full project cycles—from backend logic and APIs to frontend interfaces and SEO. Passionate about clean code, scalable systems, and continual learning through real-world implementation.
            </p>
            {/* <p className="text-lg text-muted-foreground">
              Contact: <a href="mailto:ankitpatelas90@gmail.com" className="underline">ankitpatelas90@gmail.com</a> | <a href="tel:+91 8849476499" className="underline">8849476499</a> | Dahod, Gujarat
            </p> */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -5 }}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;