"use client";

import { usePage } from "@/context/pageContext";

import Link from "next/link";
import Text from "@/components/text";

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
        <Text inlineBlock>您可以通过以下方式找到我：</Text>
        <ul className="mt-6">
          {
            links.map(link => (
              <li key={link[0]} className="mb-2 list-disc ml-4 pl-2">
                <Text inlineBlock>
                  <Link href={link[1]} target="_blank">{link[0]}</Link>
                </Text>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
};

