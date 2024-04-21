import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404',
  description: '苦海无涯，回头是岸.'
}

const NotFound = () => (
  <section className="p-4">
    <h1>404: Not Found.</h1>
  </section>
)

export default NotFound
