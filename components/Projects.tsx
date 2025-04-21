'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import LightboxModal from './LightboxModal';
import CustomCarousel from "./CustomCarousel";



const projects = [
  {
    title: "Vietnamese Herbal Medicine App",
    description:
      "A mobile application to help users search for medicinal herbs by name, usage part, or illness. Includes features like search, bookmark, comments, and Firebase integration.",
    images: [
      "/images/caythuoc/1.png",
      "/images/caythuoc/2.png",
      "/images/caythuoc/3.png",
      "/images/caythuoc/4.png",
      "/images/caythuoc/5.png",
      "/images/caythuoc/6.png",
      "/images/caythuoc/7.png",
      "/images/caythuoc/8.png",
      "/images/caythuoc/9.png",
      "/images/caythuoc/10.png",
      "/images/caythuoc/11.png",
      "/images/caythuoc/12.png",
    ],
    tech: ["Java", "Android Studio", "Firebase"],
    github: "https://github.com/nqKhanh020903/CayThuocDongYVietNam",
  },
  {
    title: "Custom Phone Case E-Commerce Website",
    description:
      "A modern e-commerce platform where users can design phone cases, manage carts, and pay with Stripe. Built with a powerful full-stack setup.",
    images: [
      "/images/oplung/1.png",
      "/images/oplung/2.png",
      "/images/oplung/3.png",
      "/images/oplung/4.png",
      "/images/oplung/5.png",
      "/images/oplung/6.png",
    ],
    tech: ["NextJS 14", "TypeScript", "Tailwind", "Prisma", "PostgreSQL", "Stripe"],
    github: "https://github.com/nqKhanh020903/OpLung",
  },
  {
    title: "AI Chatbot for Vietnamese Herbal Medicine",
    description:
      "A chatbot application that helps users ask about symptoms and receive suggestions for suitable medicinal herbs. Uses Gemini API, analyzes herbal data from Firebase, and displays results using ReactJS.",
    images: [
      "/images/chatbot/1.png",
      "/images/chatbot/2.png",
    ],
    tech: ["ReactJS", "Gemini API", "Firebase", "TailwindCSS"],
    github: "https://github.com/nqKhanh020903/chatbot_herb",
  },
];

export default function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState("");

  const openLightbox = (img: string) => {
    console.log("Opening lightbox with image:", img);
    setLightboxImg(img);
    setLightboxOpen(true);
  };
  return (
    <>
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
            <CustomCarousel
                images={project.images}
                onImageClick={(img) => openLightbox(img)}
            />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-purple-600 text-xs px-2 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  
      <LightboxModal
        isOpen={lightboxOpen}
        imageUrl={lightboxImg}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );  
}
