import Link from 'next/link'
import Content from './page.content.mdx'

const Page = async () => {
  const response = await fetch('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', {
    next: { revalidate: 3600 },
  })
  const data = await response.json()

  const imageUrl = `https://cn.bing.com${data.images[0].url}`

  const time = {
    start: 2017,
    end: new Date().getFullYear(),
  }

  return (
    <article className="w-full h-full flex flex-col lg:flex-row">
      <header
        className="lg:w-[68%] lg:h-full md:h-[30%] w-full h-[24%] relative bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <section className="overflow-hidden flex-1 px-8 pt-8 sm:pt-12 lg:pt-16 pb-12 relative">
        <Content />
        <footer className="absolute px-8 left-0 bottom-3 w-full text-xs sm:text-sm">
          &copy; {time.start} - {time.end} · Built with{' '}
          <Link href="https://nextjs.org" target="_blank">
            Next.js
          </Link>{' '}
          and{' '}
          <Link href="https://tailwindcss.com" target="_blank">
            Tailwind CSS
          </Link>
          .
        </footer>
      </section>
    </article>
  )
}

export default Page
