"use client";

import React from "react";
import appData from "@/data/data.json";

// Import layout components
import HeaderEvent1 from "@/components/sections/header/HeaderEvent1";
import FooterEvent1 from "@/components/sections/footer/FooterEvent1";

// Import all section components
import HeroEvent1 from "@/components/sections/hero/HeroEvent1";
import AboutEvent1 from "@/components/sections/about/AboutEvent1";
import MissionVisionEvent1 from "@/components/sections/mission-vision/MissionVisionEvent1";
import CoreValuesEvent1 from "@/components/sections/core-values/CoreValuesEvent1";
import ServicesEvent1 from "@/components/sections/services/ServicesEvent1";
import TestimonialsEvent1 from "@/components/sections/testimonials/TestimonialsEvent1";
import BlogEvent1 from "@/components/sections/blog/BlogEvent1";

// Component Registry matching builder variant names
const ComponentRegistry: Record<string, React.FC<any>> = {
  HeroEvent1,
  AboutEvent1,
  ServicesEvent1,
  TestimonialsEvent1,
  BlogEvent1,
};

const pageSections = [
  { section: "Hero", variant: "HeroEvent1" },
  { section: "About", variant: "AboutEvent1" },
  { section: "Services", variant: "ServicesEvent1" },
  { section: "Testimonials", variant: "TestimonialsEvent1" },
  { section: "Blog", variant: "BlogEvent1" }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      {/* Header */}
      <HeaderEvent1 data={appData.common.Header} />

      {/* Dynamic Sections Loop */}
      {pageSections.map(({ section, variant }, index) => {
        const SectionComponent = ComponentRegistry[variant];
        
        // Type casting for dynamic access
        const sectionsObj = appData.categories.Event.sections as Record<string, any>;
        const sectionObj = sectionsObj[section];
        const sectionData = sectionObj?.variants?.[variant];
        
        if (!SectionComponent) {
          console.warn(`Missing component for variant: ${variant}`);
          return null;
        }

        if (!sectionData) {
          console.warn(`Missing data for variant: ${variant}`);
          return null;
        }
        
        return <SectionComponent key={index} data={sectionData} />;
      })}

      {/* Footer */}
      <FooterEvent1 data={appData.common.Footer} logoData={appData.common.Header.logo} />
    </main>
  );
}
