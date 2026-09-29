"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Award, HeartHandshake } from "lucide-react";
import { StatItem } from "@/types";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "calendar-check": 
      return <CalendarCheck size={26} strokeWidth={1.5} className="text-[#32174d]" />;
    case "users-round": 
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#32174d]">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );
    case "award": 
      return <Award size={26} strokeWidth={1.5} className="text-[#32174d]" />;
    case "heart-handshake": 
      return <HeartHandshake size={26} strokeWidth={1.5} className="text-[#32174d]" />;
    default: 
      return <Award size={26} strokeWidth={1.5} className="text-[#32174d]" />;
  }
};

export default function StatsAltEvent1({ data }: { data: StatItem[] }) {
  return (
    <section className="py-16 bg-[#f7f5f9] border-t border-b border-[#32174d]/10 relative z-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 lg:divide-x lg:divide-[#32174d]/10">
          {data.map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex items-center gap-5 justify-center lg:justify-start ${idx === 0 ? '' : 'lg:pl-8'}`}
            >
              <div className="shrink-0 w-14 h-14 rounded-full border border-[#32174d]/20 flex items-center justify-center bg-white relative group">
                {getIcon(stat.icon)}
              </div>
              <div className="flex flex-col text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-none mb-1.5">{stat.value}</h3>
                <p className="text-[13px] text-gray-600 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
