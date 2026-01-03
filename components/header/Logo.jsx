import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <button className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/Logo.svg"
          alt="CoderFlix Logo"
          width={40}
          height={40}
          priority
        />
        <span className="text-xl font-medium hidden sm:inline">CoderFlix</span>
      </Link>
    </div>
  );
};

export default Logo;
