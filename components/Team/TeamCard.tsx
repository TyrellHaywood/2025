// dependencies
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// components
import SocialIcon from "../SocialIcon";

type TeamCardProps = {
  fname: string;
  lname: string;
  nickname: string;
  university: string;
  program: string;
  year: string;
  image: string;
  university_image: string;
  pronouns: string;
  roles: string[];
  sub_role?: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  website?: string;
  email?: string;
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
};

export default function TeamCard({
  fname,
  lname,
  nickname,
  university,
  program,
  year,
  image,
  university_image,
  pronouns,
  roles,
  sub_role,
  linkedin,
  instagram,
  github,
  website,
  email,
  isHovered,
  onHover,
  onHoverEnd,
}: TeamCardProps) {
  const handleTouchStart = () => {
    if (isHovered) {
      // if already hovered toggle hover off
      onHoverEnd();
    } else {
      // else trigger hover on
      onHover();
    }
  };

  return (
    <motion.div
      className={`min-h-[500px] rounded-lg text-center p-12 relative flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        isHovered ? "bg-white shadow-md" : ""
      }`}
      onHoverStart={onHover}
      onHoverEnd={onHoverEnd}
      onTouchStart={handleTouchStart}
    >
      {/* headshot */}
      <div className="min-w-[200px] min-h-[200px] flex justify-center items-center mb-10 rounded-full">
        <Image
          className="w-[200px] h-[200px] rounded-full object-cover"
          src={image}
          alt=""
          width={200}
          height={200}
          quality={100}
        ></Image>
      </div>

      <div className="relative w-full h-full p-9">
        {/* main info */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <h3 className="text-3xl font-bold mb-1 RobotoText flex items-center justify-center">
            {fname} {nickname ? `(${nickname})` : ""} {lname}
          </h3>
          <p className="text-sm text-white RobotoText">{pronouns}</p>
          <p className="text-lg mb-2 RobotoText">{roles.join(", ")}</p>
        </div>

        {/* more info */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold mb-1 textFont flex items-center justify-center">
            {university}
          </h3>
          <p className="text-sm text-gray-600 RobotoText">
            {year} - {program}
          </p>
          <p className="text-lg mb-2 RobotoText">{roles.join(", ")}</p>

          {/* social media */}
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {linkedin && <SocialIcon prop="linkedin" href={linkedin} />}
            {instagram && <SocialIcon prop="instagram" href={instagram} />}
            {github && <SocialIcon prop="github" href={github} />}
            {website && <SocialIcon prop="website" href={website} />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
