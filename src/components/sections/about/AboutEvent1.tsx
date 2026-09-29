"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionDivider } from "../../ui/SectionDivider";

import { AboutData } from "@/types";

export default function AboutEvent1({ data }: { data: AboutData }) {
  return (
    <section id="about" className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-lg pr-4"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="h-[1px] w-12 bg-[#32174d]/30" />
              <span className="text-[#32174d] font-bold tracking-[0.25em] text-[10px] lg:text-[11px] uppercase">
                {data.subtitle}
              </span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#32174d]">
                <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="currentColor" />
              </svg>
            </div>

            <h2 className="text-4xl lg:text-[46px] font-serif leading-[1.1] mb-6 text-[#1a1a1a]">
              {data.title.split('.').map((part, i, arr) => {
                if (!part.trim()) return null;
                return (
                  <React.Fragment key={i}>
                    {i === 0 ? (
                      <span className="block mb-1 font-medium">{part}.</span>
                    ) : (
                      <span className="block italic text-[#32174d] font-normal">{part}.</span>
                    )}
                  </React.Fragment>
                );
              })}
            </h2>

            {/* Divider with diamond */}
            <SectionDivider className="mb-6" />

            <p className="text-[#4a4a4a] font-sans text-sm lg:text-[15px] leading-[1.8] mb-5">
              {data.description1}
            </p>
            <p className="text-[#4a4a4a] font-sans text-sm lg:text-[15px] leading-[1.8] mb-8">
              {data.description2}
            </p>

            <p className="text-[28px] lg:text-[34px] text-[#32174d] font-serif italic font-light leading-tight">
              {data.cursiveText}
            </p>
          </motion.div>

          {/* Image Collage */}
          <div className="relative h-[400px] lg:h-[480px] w-full flex gap-4 mt-12 lg:mt-0">
            {/* Left Large Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-7/12 h-full rounded-2xl overflow-hidden relative z-10"
            >
              <img src={data.images[0]} alt="Event Image 1" className="w-full h-full object-cover" />
            </motion.div>

            {/* Right Images */}
            <div className="w-5/12 flex flex-col gap-4 h-full z-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[45%] w-full rounded-2xl overflow-hidden"
              >
                <img src={data.images[1]} alt="Event Image 2" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[55%] w-full rounded-2xl overflow-hidden"
              >
                <img src={data.images[2]} alt="Event Image 3" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Experience Badge / Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-4 lg:-left-12 z-20 bg-[#32174d] text-white p-6 lg:p-8 rounded-xl shadow-2xl flex flex-col items-center justify-center w-48 lg:w-56 aspect-square overflow-hidden"
            >
              {/* Background Watermark/Swoosh */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <span className="text-7xl lg:text-8xl font-serif text-white/10 tracking-tighter">EH</span>
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path d="M0,70 Q50,90 100,50" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/20" />
                  <path d="M0,75 Q50,95 100,55" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/10" />
                </svg>
              </div>

              {/* Sparkle Icon */}
              <div className="mb-4 z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 text-center flex flex-col gap-2">
                <span className="block text-xs lg:text-sm font-bold tracking-widest uppercase">
                  {data.experienceBadge.value}
                </span>
                <span className="block font-serif italic text-lg lg:text-xl text-purple-200">
                  {data.experienceBadge.text}
                </span>
              </div>
            </motion.div>

            {/* Decorative dots */}
            <div className="absolute -bottom-10 right-4 lg:-right-4 z-0 opacity-40">
              <div className="grid grid-cols-10 gap-3">
                {[...Array(30)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-[#32174d] rounded-full" />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
