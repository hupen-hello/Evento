"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { SectionDivider } from "../../ui/SectionDivider";

interface Review {
  text: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

interface TestimonialsData {
  subtitle: string;
  title: string;
  description: string;
  reviews: Review[];
}

export default function TestimonialsEvent1({ data }: { data: TestimonialsData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextReview = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === data.reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? data.reviews.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 pr-8"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="h-[1px] w-12 bg-[#32174d]/30" />
              <span className="text-[#32174d] font-bold tracking-[0.25em] text-[10px] lg:text-[11px] uppercase">
                {data.subtitle}
              </span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#32174d]">
                <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="currentColor"/>
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-[1.2] mb-6">
              {data.title.split('Clients').map((part, i) => (
                <React.Fragment key={i}>
                  {i === 0 && <span className="block">{part} Clients</span>}
                  {i === 1 && <span className="block font-sans italic text-[#32174d] font-light mt-2">{part.trim()}</span>}
                </React.Fragment>
              ))}
            </h2>

            <SectionDivider className="mb-6" />

            <p className="text-gray-600 mb-10 leading-relaxed border-l-2 border-purple-200 pl-4">
              {data.description}
            </p>

            <div className="flex gap-4">
              <button
                onClick={prevReview}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-purple-900 hover:text-purple-900 transition-colors"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={nextReview}
                className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-purple-900 hover:text-purple-900 transition-colors"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Right Content - Review Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-purple-900 rounded-full" />
                ))}
              </div>
            </div>

            <div className="bg-white border border-purple-100 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative z-10 overflow-hidden min-h-[380px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  className="w-full p-8 md:p-12"
                >
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < data.reviews[currentIndex].rating ? "fill-purple-900 text-purple-900" : "text-gray-300"}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-serif italic mb-10 relative">
                    <Quote size={40} className="absolute -top-6 -left-6 text-purple-100 -z-10 rotate-180" />
                    "{data.reviews[currentIndex].text}"
                    <Quote size={20} className="inline ml-2 text-purple-900 align-top" />
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={data.reviews[currentIndex].image}
                      alt={data.reviews[currentIndex].author}
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{data.reviews[currentIndex].author}</h4>
                      <p className="text-sm text-gray-500 uppercase tracking-wider">{data.reviews[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
