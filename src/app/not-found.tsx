import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404',
  description: '苦海无涯，回头是岸.',
}

const NotFound = () => {
  return (
    <section className="h-full p-4 flex items-center justify-center">
      <span className="text-2xl py-1 pr-5 mr-5 border-r border-r-[#4A4B4D]">404</span>
      <span>This page could not be found.</span>
    </section>
  )
}

export default NotFound
