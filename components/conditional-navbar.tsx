"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";

export function ConditionalNavbar() {
  const pathname = usePathname();
  const isDocsRoute = pathname?.startsWith("/docs");

  if (isDocsRoute) {
    return null;
  }

  return <Navbar />;
}
