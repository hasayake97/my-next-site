"use client";

import type { TextPropsType } from '@/types';
import { usePage } from "@/context/pageContext";

import Link from "next/link";

const Text = ({ children, inlineBlock }: TextPropsType) => {
  return (
    <p className={`p-1 bg-white ${inlineBlock ? 'inline-block' : ''}`}>
      {children}
    </p>
  );
};

export default function Page() {
  const { links, greeting, description } = usePage();

  return (
    <article>
      <h1 className="sm:text-5xl md:text-6xl font-bold tracking-wider text-3xl inline-block">
        <Text>{greeting}</Text>
      </h1>

      <section className="text-wrap max-w-4xl">
        {
          description.map(textItem => (
            <div key={textItem} className="mt-6">
              <Text>{textItem}</Text>
            </div>
          ))
        }
      </section>

      <section className="mt-6">
        <Text inlineBlock>您可以通过以下方式联系我：</Text>
        <ul className="mt-6">
          {
            links.map(link => (
              <li key={link[0]} className="mb-2 list-disc ml-4 pl-2">
                <Text inlineBlock>
                  <Link href={link[1]}>{link[0]}</Link>
                </Text>
              </li>
            ))
          }
        </ul>
      </section>

    </article>
  )
};

