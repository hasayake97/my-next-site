"use client";

import FooterText from "./footer.mdx";

const Footer = () => {
  return (
    <footer className="px-6 pt-24 pb-4 relative">
      <p className="sm:text-sm sm:absolute sm:bottom-6 text-xs">
        <FooterText />
        {/*{*/}
        {/*  footers.map(footer => (*/}
        {/*    <li key={footer}>*/}
        {/*      <Text inlineBlock>*/}
        {/*        <span dangerouslySetInnerHTML={{ __html: footer }} />*/}
        {/*      </Text>*/}
        {/*    </li>*/}
        {/*  ))*/}
        {/*}*/}
      </p>
    </footer>
  );
};

export default Footer;
