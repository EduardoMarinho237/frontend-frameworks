'use client';

import React, { useState } from "react";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({ children }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleSidebarToggle = (isVisible) => {
    setIsSidebarVisible(isVisible);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onToggle={handleSidebarToggle} />
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarVisible ? "ml-64" : "ml-16"} overflow-hidden`}>
        <main className="p-4 h-full">{children}</main>
      </div>
    </div>
  );
}
