"use client"

import { usePage } from "@/context/pageContext";

const Text = ({ children }: { children: React.ReactNode }) => (
  <div className="p-1 bg-white">{children}</div>
)

export default function Page() {
  const { greeting, description } = usePage();

  return (
    <div>
      <h1 className="sm:text-6xl font-bold sm:tracking-wider text-3xl inline-block">
        <Text>{greeting}</Text>
      </h1>

      <div className="text-wrap max-w-4xl">
        {
          description.map(textItem => (
            <section key={textItem} className="mt-6 text-base">
              <Text>{textItem}</Text>
            </section>
          ))
        }
      </div>
    </div>
    
  )
}

