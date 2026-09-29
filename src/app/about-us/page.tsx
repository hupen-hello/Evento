"use client";

import React from "react";
import appData from "@/data/data.json";

// Import components
import HeaderEvent1 from "@/components/sections/header/HeaderEvent1";
import PageBannerEvent1 from "@/components/sections/page-banner/PageBannerEvent1";
import AboutEvent1 from "@/components/sections/about/AboutEvent1";
import MissionVisionEvent1 from "@/components/sections/mission-vision/MissionVisionEvent1";
import CoreValuesEvent1 from "@/components/sections/core-values/CoreValuesEvent1";
import StatsAltEvent1 from "@/components/sections/stats/StatsAltEvent1";
import FooterEvent1 from "@/components/sections/footer/FooterEvent1";

// Component Registry for About Page matching builder variants
const ComponentRegistry: Record<string, React.FC<any>> = {
  PageBannerEvent1,
  AboutEvent1,
  MissionVisionEvent1,
  CoreValuesEvent1,
  StatsAltEvent1,
};

// Define the order of sections on the About page
const pageSections = [
  { section: "PageBanner", variant: "PageBannerEvent1" },
  { section: "About", variant: "AboutEvent1" },
  { section: "MissionVision", variant: "MissionVisionEvent1" },
  { section: "CoreValues", variant: "CoreValuesEvent1" },
  { section: "Stats", variant: "StatsAltEvent1" }
];

export default function AboutUsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      {/* Header */}
      <HeaderEvent1 data={appData.common.Header} />

      {/* Dynamic Sections Loop */}
      {pageSections.map(({ section, variant }, index) => {
        const SectionComponent = ComponentRegistry[variant];
        
        const sectionsObj = appData.categories.Event.sections as Record<string, any>;
        const sectionObj = sectionsObj[section];
        const sectionData = sectionObj?.variants?.[variant];
        
        if (!SectionComponent || !sectionData) {
          console.warn(`Missing component or data for variant: ${variant}`);
          return null;
        }
        
        return <SectionComponent key={index} data={sectionData} />;
      })}

      {/* Footer */}
      <FooterEvent1 data={appData.common.Footer} logoData={appData.common.Header.logo} />
    </main>
  );
}
