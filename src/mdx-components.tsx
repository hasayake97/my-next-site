import type { MDXComponents } from "mdx/types";

import Text from "@/components/text";
import Link, { LinkProps } from "next/link";
import Image, { ImageProps } from "next/image";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h1: ({ children }) => (
      <h1 className="sm:text-5xl lg:text-6xl font-bold md:tracking-wider text-3xl lg:mb-8 sm:mb-7 mb-5">
        <Text inlineBlock>{children}</Text>
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="sm:text-4xl lg:text-5xl font-bold md:tracking-wider text-2xl mb-7 sm:mb-6 mb-4">
        <Text inlineBlock>{children}</Text>
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="sm:text-3xl lg:text-4xl font-bold md:tracking-wider text-xl mb-6 sm:mb-5 mb-3">
        <Text inlineBlock>{children}</Text>
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="sm:text-2xl lg:text-3xl font-bold md:tracking-wider text-base mb-6 sm:mb-4 mb-2">
        <Text inlineBlock>{children}</Text>
      </h4>
    ),

    h5: ({ children }) => (
      <h5 className="sm:text-1xl lg:text-2xl font-bold md:tracking-wider text-sm mb-6 sm:mb-3 mb-1">
        <Text inlineBlock>{children}</Text>
      </h5>
    ),

    hr: () => (<hr className="bg-black h-1 mb-6" />),

    p: ({ children }) => (<Text inlineBlock className="lg:mb-6 sm:mb-5 mb-4">{children}</Text>),

    a: (props) => (<Link {...({ ...props, target: "_blank" } as LinkProps)} />),

    img: (props) => (<Image {...({ ...props, width: 400, height: 400, className: "mx-auto object-fill" } as ImageProps)} />),

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
