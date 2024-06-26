import Loading from '@/components/loading'
import { lazy, Suspense, ComponentType } from 'react'

type PromiseComponent = Promise<{ default: ComponentType<any> }>
type Loader = () => PromiseComponent
interface LazyLoaderProps {
  props?: {}
  loader: Loader
}

// const getRandom = (max: number) => Math.ceil(Math.random() * max)

// const delayer = (delay: number, promise: PromiseComponent): Loader => {
//   return () => new Promise(resolve => setTimeout(() => resolve(promise), delay))
// }

const LazyLoader = ({ props, loader }: LazyLoaderProps) => {
  const LazyComponent = lazy(loader)

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default LazyLoader
