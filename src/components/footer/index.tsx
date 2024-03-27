"use client";

import FooterText from "./footer.mdx";

const Footer = () => {
  return (
    <footer className="px-6 pt-24 pb-4 relative">
      <div className="sm:text-sm sm:absolute sm:bottom-6 text-xs">
        <FooterText />
      </div>
    </footer>
  );
};

export default Footer;
