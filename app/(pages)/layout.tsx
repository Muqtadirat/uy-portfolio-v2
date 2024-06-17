"use client";

import React from "react";
import BackButton from "../_components/Buttons/BackButton";
import { useRouter } from "next/navigation";

interface PagesLayoutProps {
  children: React.ReactNode;
}

const PagesLayout: React.FC<PagesLayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <section className="px-6 py-8 lg:px-[4.5rem] lg:py-20">
      <BackButton onClick={() => router.back()} />
      {children}
    </section>
  );
};

export default PagesLayout;
