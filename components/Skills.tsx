'use client';
import { motion } from "framer-motion";
import { FaReact, FaGithub, FaDatabase, FaAndroid, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiFirebase, SiTailwindcss, SiPostgresql, SiOracle } from "react-icons/si";

const categories = [
  {
    title: "Front-End",
    skills: [
      { name: "ReactJS", icon: <FaReact /> },
      { name: "NextJS", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "HTML/CSS", icon: <FaHtml5 /> },
    ],
  },
  {
    title: "Back-End & Database",
    skills: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Oracle", icon: <SiOracle /> },
      { name: "SQL Server", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Android (Java)", icon: <FaAndroid /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "GitHub", icon: <FaGithub /> },
      { name: "SVN", icon: <FaGithub /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="bg-white/10 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-semibold mb-4">{cat.title}</h3>
            <ul className="flex flex-wrap gap-4">
              {cat.skills.map((skill, j) => (
                <li
                  key={j}
                  className="flex items-center gap-2 bg-purple-600 px-3 py-2 rounded-full text-sm"
                >
                  <span className="text-lg">{skill.icon}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
