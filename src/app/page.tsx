import Link from 'next/link'
import Content from './page.content.mdx'


const Page = () => {
  const time = {
    start: 2017,
    end: new Date().getFullYear()
  }

  return (
    <article className="w-full h-[100vh] flex flex-col lg:flex-row">
      <header className="lg:w-[68%] lg:h-full w-full h-[30%] bg-no-repeat bg-center bg-[url('https://fs.uniandes.edu.ec/adfs/portal/illustration/illustration.jpg?id=16F3C24314ED92B9868731AFE40F13293AD255030123B39948AEF512B34C0123')]" />
      <section className="overflow-hidden flex-1 px-8 pt-8 sm:pt-12 lg:pt-16 pb-12 relative">
        <Content/>
        <footer className="absolute px-8 left-0 bottom-3 w-full text-xs sm:text-sm">
          &copy; {time.start} - {time.end} · Built with <Link href="https://nextjs.org" target="_blank">Next.js</Link> and <Link href="https://tailwind" target="_blank">Tailwind CSS</Link>.
        </footer>
      </section>
    </article>
  )
}

export default Page
