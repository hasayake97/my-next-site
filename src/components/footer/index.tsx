"use client";

import { usePage } from "@/context/pageContext";

import Text from "@/components/text";

const Footer = () => {
  const { footers } = usePage();

  return (
    <footer className="px-6 pt-24 pb-4 relative">
      <ul className="sm:text-sm sm:absolute sm:bottom-6 text-xs">
        {
          footers.map(footer => (
            <li key={footer}>
              <Text inlineBlock>
                <span dangerouslySetInnerHTML={{ __html: footer }} />
              </Text>
            </li>
          ))
        }
      </ul>
    </footer>
  );
};

export default Footer;
