import TebiClient from "@/utils/tebi";

import Content from "./content.mdx";
import LazyLoader from "@/components/lazy-loader";

export const revalidate = 3600;

const Client = new TebiClient();

const Page = async () => {
  const playList = await Client.getObjects({
    bucket: process.env.NEXT_PUBLIC_TEBI_BUCKET_MUSIC_NAME as string
  });

  return (
    <>
      <Content />
      {
        playList.length && (<LazyLoader loader={() => import("@/components/music-player")} props={{ playList }} />)
      }
    </>
  )
}

export default Page;
