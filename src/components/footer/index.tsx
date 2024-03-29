import Link from "next/link";
import Text from "@/components/text"
import DateText from "@/components/date-text";

const Footer = () => {
  return (
    <footer className="pt-20 pb-4 sm:text-sm text-xs">
      <Text inlineBlock>
        &copy; 2017-<DateText /> This site is built using <Link href="https://nextjs.org/">Next.js</Link> + <Link href="https://tailwindcss.com/">Tailwind CSS</Link> and is hosted and deployed on <Link href="https://vercel.com/">Vercel</Link>.
      </Text>
    </footer>
  );
};

export default Footer;
