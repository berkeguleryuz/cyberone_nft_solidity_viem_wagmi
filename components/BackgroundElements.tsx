"use client";

import React from "react";

export const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
    </div>
  );
};
