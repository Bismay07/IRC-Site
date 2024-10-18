"use client"
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

const ConditionalNavbar = () => {
  const pathname = usePathname();
  const showNavbar = !pathname.startsWith("/admin/dashboard");
  return <>{showNavbar && <Navbar />}</>;
};

export default ConditionalNavbar;
