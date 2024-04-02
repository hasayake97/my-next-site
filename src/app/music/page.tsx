import LazyLoader from "@/components/lazy-loader";

const Page = () => <LazyLoader loader={() => import("./content.mdx")} />

export default Page;
