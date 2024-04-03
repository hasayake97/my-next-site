"use client";

import { _Object } from "@aws-sdk/client-s3"

import Text from "@/components/text";

const MusicPlayer = async ({ playList }: {playList: _Object[] }) => {
  return (
    <section className="h-[var(--music-player-height)]">
      <div className="box-border fixed left-0 bottom-0 w-full h-[var(--music-player-height)] shadow-music-player bg-background-image z-[99] border-t-black border p-2">
        <Text className="w-full lg:w-[920px] lg:px-6 h-full mx-auto flex items-center">
          <span className="text-sm">{playList[0]?.Key}</span>
        </Text>
      </div>
    </section>
  )
};

export default MusicPlayer;
