import React from "react";
import appData from "@/data/data.json";

// Import layout components
import HeaderEvent1 from "@/components/sections/header/HeaderEvent1";
import PageBannerEvent1 from "@/components/sections/page-banner/PageBannerEvent1";
import EventDetailEvent1 from "@/components/sections/event-detail/EventDetailEvent1";
import FooterEvent1 from "@/components/sections/footer/FooterEvent1";

// Component Registry for Event Detail Page matching builder variants
const ComponentRegistry: Record<string, React.FC<any>> = {
  PageBannerEvent1,
  EventDetailEvent1,
};

// Define the order of sections on the Event Detail page
const pageSections = [
  { section: "PageBanner", variant: "EventDetailPageBanner" },
  { section: "EventDetail", variant: "EventDetailEvent1" }
];

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      {/* Header */}
      <HeaderEvent1 data={appData.common.Header} />

      {/* Dynamic Sections Loop */}
      {pageSections.map(({ section, variant }, index) => {
        const ResolvedComponent = variant === "EventDetailPageBanner" ? PageBannerEvent1 : ComponentRegistry[variant];
        
        // Ensure the data key exists in the JSON
        const sectionsObj = appData.categories.Event.sections as Record<string, any>;
        const sectionObj = sectionsObj[section];
        const sectionData = sectionObj?.variants?.[variant];
        
        if (!ResolvedComponent || !sectionData) {
          console.warn(`Missing component or data for variant: ${variant}`);
          return null;
        }
        
        const props: any = { data: sectionData };
        if (variant === "EventDetailEvent1") {
          props.eventId = resolvedParams.id;
        }
        
        return <ResolvedComponent key={index} {...props} />;
      })}

      {/* Footer */}
      <FooterEvent1 data={appData.common.Footer} logoData={appData.common.Header.logo} />
    </main>
  );
}
