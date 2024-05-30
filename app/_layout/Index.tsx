"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <DesktopNav pathname={pathname} />
      <MobileNav
        showMenu={showMenu}
        onClick={setShowMenu}
        pathname={pathname}
      />
      <main className="pt-32 pb-10 lg:py-32">
        {children}
      </main>
    </>
  );
};

export default Layout;
