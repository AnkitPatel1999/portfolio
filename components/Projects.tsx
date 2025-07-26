'use client';

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";
import Image from "next/image";

interface Technology {
  name: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoUrl?: string;
  type: 'freelance' | 'personal' | 'corporate';
}

const projects: Project[] = [
  {
    title: "Event Management Platform Enhancement",
    description: "Spearheaded the development of core features for a comprehensive event management platform, including advanced search algorithms, payment processing, and email campaign systems. Utilized PHP, Slim PHP for APIs, Vue.js, React.js, and MySQL to create scalable solutions serving thousands of users daily.",
    image: "/projects/allevents.webp",
    technologies: [
      { name: "PHP" },
      { name: "Slim PHP" },
      { name: "Vue.js" },
      { name: "React.js" },
      { name: "MySQL" }
    ],
    type: "corporate",
    demoUrl: "https://allevents.in/"
  },
  {
    title: "Dynamic Form Builder & Email Campaign System",
    description: "Built a sophisticated form builder supporting multiple field types with real-time validation and preview functionality. Integrated with AWS SQS for high-volume email delivery, enabling efficient communication with event attendees and organizers through personalized campaigns.",
    image: "/projects/lousy.webp",
    technologies: [
      { name: "React.js" },
      { name: "AWS SQS" },
      { name: "Email Campaigns" }
    ],
    type: "corporate"
  },
  {
    title: "Website Performance Optimization & Redesign",
    description: "Led comprehensive website redesign focusing on user experience improvements across event cards, homepage, category pages, and dashboards. Implemented technical SEO best practices and performance optimizations, resulting in significant improvement in user engagement metrics.",
    image: "/projects/vardhan.webp",
    technologies: [
      { name: "Next.js" },
      { name: "SEO" },
      { name: "Performance Optimization" }
    ],
    demoUrl: "https://vardhanenterprises.co/",
    type: "freelance"
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      viewport={{ once: true, margin: "-100px" }}
      className="p-10 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <div className="relative group overflow-hidden">
        <Image 
          src={project.image} 
          alt={project.title}
          width={300}
          height={200}
          className="w-full object-cover mb-4 rounded"
        />
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-700"
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex justify-start gap-5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="flex items-center gap-2 text-foreground transition-colors hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
              Visit Website
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* A glimpse of my development journey */}
        <AnimatedText 
          text="Featured Projects"
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;