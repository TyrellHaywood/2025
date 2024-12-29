"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import Schedule from "@/components/Schedule/Schedule";
import LoadingElement from "@/components/LoadingElement";

export default function privacyPolicy() {
  return (
    <>
      <title>Privacy Policy</title>
      <LoadingElement delay={0}>
        <main className="flex flex-col overflow-x-hidden min-h-screen justify-center">
          <div className="h-auto flex items-center justify-center my-[65px]">
            <Schedule />
          </div>
        </main>
      </LoadingElement>
    </>
  );
}
