'use client';

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AnimatedText } from "@/components/animations/AnimatedText";

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.js & React.js" },
      { name: "Vue.js" },
      { name: "AngularJS" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "jQuery" },
      { name: "AJAX" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js & Express" },
      { name: "PHP" },
      { name: "RESTful APIs" },
      { name: "MongoDB & MySQL" },
    ]
  },
  {
    title: "Additional Skills",
    skills: [
      { name: "Basic AWS" },
      { name: "Web scraping" },
      { name: "Git, Redis, SQS" },
      { name: "Memcached" },
      { name: "SEO & Performance Optimization"},
      { name: "Google Analytics" },
      { name: "Google Search Console" },
      
    ]
  }
];

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl shadow p-6"
    >
      <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
      <ul className="list-disc ml-6 space-y-2 text-lg text-muted-foreground">
        {category.skills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedText 
          text="Technical Skills"
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={category.title} 
              category={category} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;