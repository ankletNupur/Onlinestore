"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="h-[60vh] flex flex-col justify-center items-center text-center
      bg-gradient-to-r from-blue-800 via-blue-500 to-blue-600 text-white rounded-xl"
    >
      <h1 className="text-5xl font-bold mb-4">
        Discover Your Next Favorite Book
      </h1>
      <p className="mb-6 text-lg">
        Explore fiction, mystery, science & more
      </p>
      <button className="bg-white text-black px-6 py-3  rounded-lg font-semibold hover:scale-105 transition">
        Browse Collection
      </button>
    </motion.section>
  );
}
