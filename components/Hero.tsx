"use client";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white">
            Hi, I&apos;m <span className="text-yellow-400">Nguyễn Quốc Khánh</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-6">
            A passionate Front-End & Mobile Developer who loves building
            stunning UIs and smart features with modern tech.
          </p>
          <a
            href="/NguyenQuocKhanh_CV_English.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            <FaDownload />
            Download CV
          </a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative group">
            {/* Gradient border effect */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-500 via-yellow-400 to-cyan-400 blur opacity-70 group-hover:opacity-100 transition duration-500"></div>

            {/* Avatar */}
            <img
              src="/images/avatar.png"
              alt="Profile"
              className="relative w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-[#0f172a] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
