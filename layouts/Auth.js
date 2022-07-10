import React from "react";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

export default function Auth({ children }) {
  return (
    <div className="relative w-full h-full py-30 min-h-screen bg-pryblue">
      <Navbar transparent />
      {children}
      <FooterSmall />
    </div>
  );
}
