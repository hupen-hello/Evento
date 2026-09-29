"use client";

import React from "react";
import appData from "@/data/data.json";

// Import layout components
import HeaderEvent1 from "@/components/sections/header/HeaderEvent1";
import PageBannerEvent1 from "@/components/sections/page-banner/PageBannerEvent1";
import ServiceDetailEvent1 from "@/components/sections/service-detail/ServiceDetailEvent1";
import FooterEvent1 from "@/components/sections/footer/FooterEvent1";

// Component Registry for Service Detail Page matching builder variants
const ComponentRegistry: Record<string, React.FC<any>> = {
  PageBannerEvent1,
  ServiceDetailEvent1,
};

// Define the order of sections on the Service Detail page
const pageSections = [
  { section: "PageBanner", variant: "ServiceDetailPageBanner" },
  { section: "ServiceDetail", variant: "ServiceDetailEvent1" }
];

export default function ServiceDetailPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      {/* Header */}
      <HeaderEvent1 data={appData.common.Header} />

      {/* Dynamic Sections Loop */}
      {pageSections.map(({ section, variant }, index) => {
        const ResolvedComponent = variant === "ServiceDetailPageBanner" ? PageBannerEvent1 : ComponentRegistry[variant];
        
        // Ensure the data key exists in the JSON
        const sectionsObj = appData.categories.Event.sections as Record<string, any>;
        const sectionObj = sectionsObj[section];
        const sectionData = sectionObj?.variants?.[variant];
        
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
