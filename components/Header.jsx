import React from "react";
import Logo from "./header/Logo";
import SearchBar from "./header/SearchBar";
import RightSection from "./header/RightSection";

const Header = () => {
  return (
    <header class="sticky top-0 z-50 bg-[#141414] border-b border-[#262626]">
      <div class="flex items-center justify-between px-4 py-2 md:px-6">
        {/* <!-- Logo --> */}
        <Logo />

        {/* <!-- Search Bar --> */}
        <SearchBar />

        {/* <!-- Right Section --> */}
        <RightSection />
      </div>
    </header>
  );
};

export default Header;
