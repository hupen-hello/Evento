"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PageBannerData } from "@/types";
export default function PageBannerEvent1({ data }: { data: PageBannerData }) {
  return (
    <section className="relative py-12 lg:py-12 flex items-center justify-center overflow-hidden">
      {" "}
      {/* Background Image with Overlay */}{" "}
      <div className="absolute inset-0 z-0">
        {" "}
        <img
          src={data.bgImage}
          alt={data.title}
          className="w-full h-full object-cover"
        />{" "}
        <div className="absolute inset-0 bg-[#2a133f]/80 mix-blend-multiply" />{" "}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2a133f] to-transparent opacity-80" />{" "}
      </div>{" "}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-[1300px] relative z-10 ">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {" "}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {" "}
            {data.title}{" "}
          </h1>{" "}
          <Breadcrumb items={data.breadcrumbs} />{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
