"use client";

import React from "react";
import appData from "@/data/data.json";

// Import components
import HeaderEvent1 from "@/components/sections/header/HeaderEvent1";
import PageBannerEvent1 from "@/components/sections/page-banner/PageBannerEvent1";
import MissionEvent1 from "@/components/sections/mission/MissionEvent1";
import FooterEvent1 from "@/components/sections/footer/FooterEvent1";

// Component Registry for Mission Page matching builder variants
const ComponentRegistry: Record<string, React.FC<any>> = {
  PageBannerEvent1,
  MissionEvent1,
};

// Define the order of sections on the Mission page
const pageSections = [
  { section: "PageBanner", variant: "MissionPageBanner" },
  { section: "Mission", variant: "MissionEvent1" }
];

export default function MissionPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      {/* Header */}
      <HeaderEvent1 data={appData.common.Header} />

      {/* Dynamic Sections Loop */}
      {pageSections.map(({ section, variant }, index) => {
        const SectionComponent = ComponentRegistry[variant.replace('MissionPageBanner', 'PageBannerEvent1')]; // Fallback if component name differs from variant name, but let's just use exact match or register variant name
        
        // Ensure the data key exists in the JSON
        const sectionsObj = appData.categories.Event.sections as Record<string, any>;
        const sectionObj = sectionsObj[section];
        const sectionData = sectionObj?.variants?.[variant];
        
        // Actually, the ComponentRegistry should map variants to components.
        // Wait, for PageBanner, the variant in data is MissionPageBanner, but the component is PageBannerEvent1.
        // Let's create a resolved component logic.
        const ResolvedComponent = variant === "MissionPageBanner" ? PageBannerEvent1 : ComponentRegistry[variant];

        if (!ResolvedComponent || !sectionData) {
          console.warn(`Missing component or data for variant: ${variant}`);
          return null;
        }
        
        return <ResolvedComponent key={index} data={sectionData} />;
      })}

      {/* Footer */}
      <FooterEvent1 data={appData.common.Footer} logoData={appData.common.Header.logo} />
    </main>
  );
}
