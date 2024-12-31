// dependencies

// components
import HeroImg from "./HeroImg";

export default function TeamHero() {
  return (
    <div className="w-[90%] h-auto mt-[65px] flex gap-16">
      {/* hero images */}
      <div className="w-full flex flex-row items-center justify-center gap-8">
        {/* vertical */}
        <div className="flex flex-row items-center justify-center">
          <HeroImg orientation="v" source=""></HeroImg>
        </div>
        {/* horizontal */}
        <div className="flex flex-col items-center justify-center gap-8">
          <HeroImg orientation="h" source=""></HeroImg>
          <HeroImg orientation="h" source=""></HeroImg>
        </div>
      </div>

      {/* title & text */}
      <div className="w-full flex flex-col items-start">
        <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold purpleText mb-4 md:mb-6 leading-tight">
          The 2025 CUSEC Team
        </h1>
        {/* divider */}
        <div className="h-0.5 w-20 bg-[#6C6BD1] mb-4 md:mb-6"></div>
        <p className="md:text-lg mb-4 md:mb-6 text-dark-blue RobotoText">
          Did you know CUSEC was founded by students and is entirely
          student-run? Since 2002, university and college students from across
          Canada have come together to plan and organize this incredible
          conference.
        </p>
      </div>
    </div>
  );
}
