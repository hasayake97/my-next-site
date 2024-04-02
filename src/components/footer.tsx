import Text from "@/components/text"
import LinkExt from "@/components/link-ext";
import DateText from "@/components/data-text";

const Footer = () => {
  return (
    <footer className="pt-20 pb-4 sm:text-sm text-xs">
      <Text inlineBlock>
        &copy; 2017-<DateText /> This site is built using <LinkExt href="https://nextjs.org/">Next.js</LinkExt> + <LinkExt href="https://tailwindcss.com/">Tailwind CSS</LinkExt> and is hosted and deployed on <LinkExt href="https://vercel.com/">Vercel</LinkExt>.
      </Text>
    </footer>
  );
};

export default Footer;
