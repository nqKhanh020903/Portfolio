"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  images: string[];
  onImageClick: (img: string) => void;
}

export default function CustomCarousel({ images, onImageClick }: Props) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
      <AnimatePresence initial={false}>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`slide-${index}`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
          className="absolute w-full h-56 object-cover cursor-pointer"
          onClick={() => onImageClick(images[index])}
        />
      </AnimatePresence>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-400 text-black hover:bg-yellow-300 p-2 rounded-full shadow-lg transition"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 text-black hover:bg-yellow-300 p-2 rounded-full shadow-lg transition"
      >
        ▶
      </button>
    </div>
  );
}
