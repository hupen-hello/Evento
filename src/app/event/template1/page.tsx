import React from "react";
import HeaderEvent1 from "@/components/sections/header/HeaderEvent1";
import HeroEvent1 from "@/components/sections/hero/HeroEvent1";

import AboutEvent1 from "@/components/sections/about/AboutEvent1";
import ServicesEvent1 from "@/components/sections/services/ServicesEvent1";
import MilestonesEvent1 from "@/components/sections/milestones/MilestonesEvent1";
import TestimonialsEvent1 from "@/components/sections/testimonials/TestimonialsEvent1";
import BlogEvent1 from "@/components/sections/blog/BlogEvent1";
import FooterEvent1 from "@/components/sections/footer/FooterEvent1";
import templateData from "@/data/eventTemplate1.json";

export default function EventTemplate1Page() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderEvent1 data={templateData.header} />
      <HeroEvent1 data={templateData.hero} />

      <AboutEvent1 data={templateData.about} />
      <ServicesEvent1 data={templateData.services} />
      <MilestonesEvent1 data={templateData.milestones} />
      <TestimonialsEvent1 data={templateData.testimonials} />
      <BlogEvent1 data={templateData.blog} />
      <FooterEvent1 data={templateData.footer} logoData={{ logoText: templateData.header.logo.initials, logoSubText: templateData.header.logo.sub }} />
    </main>
  );
}
