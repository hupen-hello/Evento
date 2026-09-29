"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

interface Article {
  date: string;
  category: string;
  author: string;
  title: string;
  image: string;
  link: string;
}

interface BlogData {
  subtitle: string;
  title: string;
  description: string;
  articles: Article[];
  ctaText: string;
}

export default function BlogEvent1({ data }: { data: BlogData }) {
  return (
    <section id="blog" className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="h-[1px] w-12 bg-[#32174d]/30" />
            <span className="text-[#32174d] font-bold tracking-[0.25em] text-[10px] lg:text-[11px] uppercase">
              {data.subtitle}
            </span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#32174d]">
              <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" fill="currentColor"/>
            </svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-gray-900 mb-6"
          >
            {data.title.split('About').map((part, i) => (
              <React.Fragment key={i}>
                {i === 0 && <span className="font-bold">{part}</span>}
                {i === 1 && <span className="block italic font-light text-purple-900">About {part.trim()}</span>}
              </React.Fragment>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.articles.map((article, idx) => {
            const [day, month, year] = article.date.split(" ");

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group border border-gray-100 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${article.image})` }}
                  />
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-purple-900 text-white rounded-lg p-2 text-center shadow-lg min-w-[50px]">
                    <span className="block text-xl font-bold leading-none">{day}</span>
                    <span className="block text-[10px] uppercase tracking-wider mt-1">{month}</span>
                    <span className="block text-[10px] text-purple-200">{year}</span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-purple-900" />
                        <span>{article.category}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} className="text-purple-900" />
                        <span>{article.author}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-4 group-hover:text-purple-900 transition-colors line-clamp-2">
                      <Link href={article.link}>{article.title}</Link>
                    </h3>
                  </div>

                  <Link
                    href={article.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-purple-900 uppercase tracking-wider group/link"
                  >
                    Read More
                    <div className="w-6 h-6 rounded-full border border-purple-200 flex items-center justify-center group-hover/link:border-purple-900 transition-colors">
                      <ArrowRight size={12} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="#"
            className="inline-block bg-transparent text-purple-900 border border-purple-200 hover:bg-purple-900 hover:text-white font-bold px-8 py-4 uppercase tracking-wider text-sm transition-all shadow-sm hover:shadow-xl group"
          >
            {data.ctaText}
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
