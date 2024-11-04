"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

export default function privacyPolicy() {
  return (
    <>
      <title>Privacy Policy</title>
      <main className="mainGradientBackground flex flex-col overflow-x-hidden">
        <div className="h-auto flex items-center justify-center my-[65px]">
          <PrivacyPolicy />
        </div>
      </main>
    </>
  );
}
