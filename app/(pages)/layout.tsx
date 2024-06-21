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
    <section className="py-8 lg:py-20">
      <BackButton onClick={() => router.back()} />
      {children}
    </section>
  );
};

export default PagesLayout;
