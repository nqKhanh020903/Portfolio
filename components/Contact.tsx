'use client';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Contact Me
      </motion.h2>
      <motion.p
        className="text-white/80 mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
        Feel free to reach out to me via any of the platforms below. I'm always open to collaboration or new opportunities!
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        <ContactItem icon={<FaEnvelope />} label="Email" value="quockhanhit0209@gmail.com" href="mailto:quockhanhit0209@gmail.com" />
        <ContactItem icon={<FaPhoneAlt />} label="Phone" value="0908 486 821" href="tel:0908486821" />
        <ContactItem icon={<FaGithub />} label="GitHub" value="nqKhanh020903" href="https://github.com/nqKhanh020903" />
        <ContactItem icon={<FaMapMarkerAlt />} label="Location" value="Hồ Chí Minh, Việt Nam" />
      </motion.div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }: { icon: JSX.Element; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg shadow">
      <div className="text-xl text-yellow-300">{icon}</div>
      <div>
        <div className="text-sm text-white/70">{label}</div>
        {href ? (
          <a href={href} className="text-base font-semibold text-white hover:underline" target="_blank" rel="noopener noreferrer">
            {value}
          </a>
        ) : (
          <div className="text-base font-semibold text-white">{value}</div>
        )}
      </div>
    </div>
  );
}
