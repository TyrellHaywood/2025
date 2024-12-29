"use client";

// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import Speakers from "@/components/Speakers/Speakers";
import LoadingElement from "@/components/LoadingElement";

export default function privacyPolicy() {
  return (
    <>
      <title>Speakers</title>
      <LoadingElement delay={0}>
        <main className="flex flex-col overflow-x-hidden min-h-screen justify-center bg-gradient-to-b from-[#6C6BD1] to-white">
          <div className="h-auto flex items-center justify-center my-[65px]">
            <Speakers />
          </div>
        </main>
      </LoadingElement>
    </>
  );
}
