'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Props {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

export default function LightboxModal({ isOpen, imageUrl, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={imageUrl}
            alt="Zoomed Image"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.7 }}
            transition={{ duration: 0.3 }}
            className="max-w-full max-h-full object-contain cursor-pointer"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking image
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
