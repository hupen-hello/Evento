import React from "react";
import appData from "@/data/data.json";

// Import layout components
import HeaderEvent1 from "@/components/sections/header/HeaderEvent1";
import PageBannerEvent1 from "@/components/sections/page-banner/PageBannerEvent1";
import BlogDetailEvent1 from "@/components/sections/blog-detail/BlogDetailEvent1";
import FooterEvent1 from "@/components/sections/footer/FooterEvent1";
import { notFound } from "next/navigation";

// Component Registry for Blog Detail Page matching builder variants
const ComponentRegistry: Record<string, React.FC<any>> = {
  PageBannerEvent1,
  BlogDetailEvent1,
};

// Define the order of sections on the Blog Detail page
const pageSections = [
  { section: "PageBanner", variant: "BlogDetailPageBanner" },
  { section: "BlogDetail", variant: "BlogDetailEvent1" },
];

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Find the requested blog
  const allBlogs = appData.categories.Event.sections.Blog.variants.BlogEvent1.blogs;
  const selectedBlog = allBlogs.find((b: any) => b.id === id);

  if (!selectedBlog) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      {/* Header */}
      <HeaderEvent1 data={appData.common.Header} />

      {/* Dynamic Sections Loop */}
      {pageSections.map(({ section, variant }, index) => {
        const ResolvedComponent = variant === "BlogDetailPageBanner" ? PageBannerEvent1 : ComponentRegistry[variant];
        
        // Ensure the data key exists in the JSON
        const sectionsObj = appData.categories.Event.sections as Record<string, any>;
        const sectionObj = sectionsObj[section];
        
        // Deep clone to avoid mutating the original imported JSON
        let sectionData = JSON.parse(JSON.stringify(sectionObj?.variants?.[variant]));
        
        if (!ResolvedComponent || !sectionData) {
          console.warn(`Missing component or data for variant: ${variant}`);
          return null;
        }

        // Dynamically inject the clicked blog's data into the generic Blog Detail structure
        if (variant === "BlogDetailEvent1") {
          sectionData.mainContent.title = selectedBlog.title;
          sectionData.mainContent.heroImage = selectedBlog.image;
          sectionData.mainContent.category = selectedBlog.category;
          sectionData.mainContent.date = `${selectedBlog.dateLine1} ${selectedBlog.dateLine2} ${selectedBlog.dateLine3}`;
        }
        
        return <ResolvedComponent key={index} data={sectionData} />;
      })}

      {/* Footer */}
      <FooterEvent1 data={appData.common.Footer} logoData={appData.common.Header.logo} />
    </main>
  );
}
