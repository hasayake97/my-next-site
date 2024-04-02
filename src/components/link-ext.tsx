import type { UrlObject } from 'url';
import Link, { LinkProps } from "next/link";

export type Url = string | UrlObject;
export type LinkExtProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps & {
  children?: React.ReactNode;
}

const isAbsoluteUrl = (url: Url): boolean => {
  if (typeof url === 'string') { return /^https?/.test(url) }

  if (typeof url === 'object') {
    const { protocol, pathname } = url

    if (protocol) { return isAbsoluteUrl(protocol) }

    if (pathname) { return isAbsoluteUrl(pathname) }
  }

  return true
}

const LinkExt = (props: Readonly<LinkExtProps>) => {
  const isAbsolute = isAbsoluteUrl(props.href)

  return isAbsolute ? <Link {...props} target="_blank" /> : <Link {...props} />
};

export default LinkExt;
