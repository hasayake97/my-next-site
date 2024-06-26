import type { MDXComponents } from 'mdx/types'

import Text from '@/components/text'
import Image, { ImageProps } from 'next/image'
import LinkExt, { LinkExtProps } from '@/components/link-ext'

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    h1: ({ children }) => (
      <h1 className="sm:text-5xl lg:text-6xl font-bold md:tracking-wider text-3xl lg:mb-8 sm:mb-7 mb-6">
        <Text inlineBlock>{children}</Text>
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="sm:text-4xl lg:text-5xl font-bold md:tracking-wider text-2xl lg:mb-7 sm:mb-6 mb-5">
        <Text inlineBlock>{children}</Text>
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="sm:text-3xl lg:text-4xl font-bold md:tracking-wider text-xl lg:mb-6 sm:mb-5 mb-4">
        <Text inlineBlock>{children}</Text>
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="sm:text-2xl lg:text-3xl font-bold md:tracking-wider text-base lg:mb-6 sm:mb-5 mb-4">
        <Text inlineBlock>{children}</Text>
      </h4>
    ),

    h5: ({ children }) => (
      <h5 className="sm:text-1xl lg:text-2xl font-bold md:tracking-wider text-sm lg:mb-6 sm:mb-5 mb-4">
        <Text inlineBlock>{children}</Text>
      </h5>
    ),

    hr: () => <hr className="bg-black h-1 my-6" />,

    p: ({ children }) => <p className="lg:mb-6 sm:mb-5 mb-4 text-sm sm:text-base">{children}</p>,

    a: (props) => <LinkExt {...(props as LinkExtProps)} className="text-sm sm:text-base" />,

    img: (props) => (
      <Image
        {...({ ...props, width: 400, height: 400, className: 'mx-auto object-fill' } as ImageProps)}
        alt={props.alt || ''}
      />
    ),

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

    ...components,
  }
}
