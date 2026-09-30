import React from "react";
import appData from "@/data/data.json";

// Import layout components
import HeaderEvent1 from "@/components/sections/header/HeaderEvent1";
import Error404Event1 from "@/components/sections/error/Error404Event1";
import FooterEvent1 from "@/components/sections/footer/FooterEvent1";

export default function NotFound() {
  const errorData = appData.categories.Event.sections.Error404?.variants?.Error404Event1;

  if (!errorData) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-white">
      {/* Header */}
      <HeaderEvent1 data={appData.common.Header} />

      {/* 404 Error Content */}
      <Error404Event1 data={errorData} />

      {/* Footer */}
      <FooterEvent1 data={appData.common.Footer} logoData={appData.common.Header.logo} />
    </main>
  );
}
