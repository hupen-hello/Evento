"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Clock, ArrowRight } from "lucide-react";
import { EventsListData } from "@/types";
import Link from "next/link";

export default function EventsListEvent1({ data }: { data: EventsListData }) {
  return (
    <section className="bg-[#fafafa] py-20 lg:py-28 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1300px]">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="flex items-center gap-2 bg-[#f4effa] px-3 py-1.5 rounded-md">
              <CalendarDays size={16} className="text-[#6b3c9b]" />
              <span className="text-[#6b3c9b] font-bold text-sm uppercase tracking-wide">
                {data.badge}
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#15072b] mb-6 leading-tight"
          >
            {data.titlePart1}
            <span className="italic text-[#6b3c9b] font-normal">{data.titleHighlight}</span>
            {data.titlePart2}
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1.5 h-1.5 rotate-45 bg-[#6b3c9b]"></div>
            <div className="w-8 h-[2px] bg-[#6b3c9b]/40"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#6b3c9b]"></div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-500 text-sm lg:text-base leading-relaxed max-w-xl whitespace-pre-line"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Events List */}
        <div className="flex flex-col gap-8">
          {data.events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white rounded-[32px] p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 border border-gray-50"
            >
              
              {/* Left: Date Block */}
              <div className="bg-[#f9f5ff] rounded-2xl p-6 min-w-[140px] flex flex-col items-center justify-center text-center shrink-0 h-[180px]">
                <span className="text-[52px] font-bold text-[#321654] leading-none mb-2">
                  {event.date}
                </span>
                <span className="text-[#15072b] font-bold text-[15px] mb-3">
                  {event.month}
                </span>
                <div className="w-8 h-[2px] bg-[#6b3c9b]"></div>
              </div>

              {/* Image Block */}
              <div className="w-full lg:w-[280px] h-[180px] shrink-0 rounded-2xl overflow-hidden relative group">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#6b3c9b]/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Block */}
              <div className="flex-1 flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 w-full">
                
                <div className="flex-1">
                  <h3 className="text-[22px] lg:text-[24px] font-bold text-[#321654] mb-3">
                    {event.title}
                  </h3>
                  <div className="w-10 h-1 bg-gray-100 rounded-full mb-4"></div>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
                    {event.description}
                  </p>
                </div>

                {/* Details & Button */}
                <div className="flex flex-col gap-6 lg:min-w-[220px] shrink-0 w-full lg:w-auto">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <MapPin size={20} className="text-[#6b3c9b]" />
                      <span className="text-[#15072b] font-bold text-[15px]">{event.location}</span>
                    </div>
                    <div className="w-full h-px bg-gray-100"></div>
                    <div className="flex items-center gap-3">
                      <Clock size={20} className="text-[#6b3c9b]" />
                      <span className="text-gray-500 text-[14px]">{event.time}</span>
                    </div>
                  </div>
                  
                  <Link href={event.link} className="inline-flex items-center justify-center gap-3 border border-[#6b3c9b] text-[#6b3c9b] hover:bg-[#6b3c9b] hover:text-white transition-colors duration-300 rounded-full py-3 px-8 font-bold text-[14px] w-fit group">
                    View More
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
