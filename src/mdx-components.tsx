import type { MDXComponents } from "mdx/types";

import Link, { LinkProps } from "next/link";
import Image from "next/image";
import Text from "@/components/text";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h1: ({ children }) => (
      <h1 className="sm:text-5xl md:text-6xl font-bold tracking-wider text-3xl mb-8">
        <Text inlineBlock>{children}</Text>
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="sm:text-4xl md:text-5xl font-bold tracking-wider text-2xl mb-7">
        <Text inlineBlock>{children}</Text>
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="sm:text-3xl md:text-4xl font-bold tracking-wider text-base mb-6">
        <Text inlineBlock>{children}</Text>
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="sm:text-2xl md:text-3xl font-bold tracking-wider text-sm mb-6">
        <Text inlineBlock>{children}</Text>
      </h4>
    ),

    h5: ({ children }) => (
      <h5 className="sm:text-1xl md:text-2xl font-bold tracking-wider text-xs mb-6">
        <Text inlineBlock>{children}</Text>
      </h5>
    ),

    hr: () => (<hr className="bg-black h-1 mb-6" />),

    p: ({ children }) => (<Text inlineBlock className="mb-6">{children}</Text>),

    a: ({ children, ...args }) => {
      return (<Link {...args as LinkProps} target="_blank">{children}</Link>)
    },

    img: (props) => (<Image {...props} width={400} height={400} className="mx-auto object-fill" />),

    li: ({ children }) => {
      if (Array.isArray(children)) {
        const [titleNode, ...otherNode] = children

        return (
          <li>
            <Text inlineBlock>{titleNode}</Text>
            {...otherNode}
          </li>
        )
      }

      return (
        <li>
          <Text inlineBlock>{children}</Text>
        </li>
      )
    },

    ...components
  }
};
