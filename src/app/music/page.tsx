import TebiClient from "@/utils/tebi";

import Content from "./content.mdx";
import LazyLoader from "@/components/lazy-loader";

export const revalidate = 3600;

const Page = async () => {
  const playList = await TebiClient.getObjects({ bucket: process.env.TEBI_BUCKET_MUSIC_NAME as string });

  return (
    <>
      <Content />
      <LazyLoader loader={() => import("@/components/music-player")} props={{ playList }} />
    </>
  )
}

export default Page;
