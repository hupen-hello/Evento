
import React from "react";
// Force HMR reload for data.json
import appData from "@/data/data.json";

// Import layout components
import HeaderEvent1 from "@/components/sections/header/HeaderEvent1";
import PageBannerEvent1 from "@/components/sections/page-banner/PageBannerEvent1";
import ContactFormEvent1 from "@/components/sections/contact/ContactFormEvent1";
import ContactMapEvent1 from "@/components/sections/contact/ContactMapEvent1";
import FooterEvent1 from "@/components/sections/footer/FooterEvent1";

// Component Registry
const ComponentRegistry: Record<string, React.FC<any>> = {
  PageBannerEvent1,
  ContactFormEvent1,
  ContactMapEvent1,
};

// Define the order of sections on the Contact page
const pageSections = [
  { section: "PageBanner", variant: "ContactPageBanner" },
  { section: "ContactForm", variant: "ContactFormEvent1" },
  { section: "ContactMap", variant: "ContactMapEvent1" },
];

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#faf8fd]">
      {/* Header */}
      <HeaderEvent1 data={appData.common.Header} />

      {/* Dynamic Sections Loop */}
      {pageSections.map(({ section, variant }, index) => {
        const ResolvedComponent = variant === "ContactPageBanner" ? PageBannerEvent1 : ComponentRegistry[variant];

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
