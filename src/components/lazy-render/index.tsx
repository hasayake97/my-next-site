import Loading from "./loading";
import { lazy, Suspense, ComponentType } from "react";

type Loader = () => Promise<{default: ComponentType<any>}>

const LazyRender = ({ loader }: { loader: Loader }) => {
  const LazyComponent = lazy(loader)

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
}

export default LazyRender;
