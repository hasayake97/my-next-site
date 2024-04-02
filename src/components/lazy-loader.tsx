import Loading from "@/components/loading";
import { lazy, Suspense, ComponentType } from "react";

type PromiseComponent = Promise<{default: ComponentType<any>}>
type Loader = () => PromiseComponent

const getRandom = (max: number) => Math.ceil(Math.random() * max)
const delayer = (delay: number, promise: PromiseComponent): Loader => {
  return () => new Promise(resolve => setTimeout(() => resolve(promise), delay))
}

const LazyLoader = ({ loader }: { loader: Loader }) => {
  const LazyComponent = lazy(delayer(
    getRandom(3),
    loader()
  ))

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyLoader;
