"use client";

import {
  useEffect,
  useReducer,
  useCallback
} from "react";
import useAudio from "./useAudio";
import MusicList from "./music-list";
import MusicControl from "./music-control";
import { PlayList, PlayListItem, AudioState, AudioAction } from "./types";

const getPlayUrl = (key: string) => {
  return [process.env.NEXT_PUBLIC_TEBI_END_POINT, process.env.NEXT_PUBLIC_TEBI_BUCKET_MUSIC_NAME, key].join('/')
}

const reducer = (state: AudioState, action: AudioAction) => {
  switch (action.type) {
    case "change": {
      return { ...state, ...action.payload };
    }
    default: { return state; }
  }
}
const MusicPlayer = ({ playList }: { playList: PlayList }) => {
  const firstKey = (playList[0].Key as string)
  const audio = useAudio();
  const [audioState, dispatchAudioState] = useReducer(reducer, {
    playing: false,
    volume: 0,
    duration: 0,
    currentTime: 0,
    name: firstKey,
    src: getPlayUrl(firstKey)
  })

  const onPlayer = useCallback((musicItem: PlayListItem) => {
    const fileKey = musicItem.Key as string

    dispatchAudioState({
      type: "change",
      payload: {
        name: fileKey,
        playing: false,
        src: getPlayUrl(fileKey)
      }
    })
  }, []);

  const onCanplay = useCallback((event: Event) => {
    dispatchAudioState({
      type: "change",
      payload: {
        playing: true,
        duration:  (event.target as HTMLAudioElement).duration
      }
    })
  }, [])

  const onTimeupdate = useCallback((event: Event) => {
    dispatchAudioState({
      type: "change",
      payload: {
        currentTime: (event.target as HTMLAudioElement).currentTime
      }
    })
  }, [])

  const onPlayingChange = useCallback((playing: boolean) => {
    if (audio.ref.current && !audio.ref.current?.src) {
      audio.ref.current.src = audioState.src;
    }

    dispatchAudioState({
      type: "change",
      payload: { playing }
    })
  }, [audioState.src])

  // Audio 创建或音乐文件发生变化
  useEffect(() => {
    audio.run(audioState.src, (ref) => {
      ref.addEventListener("canplay", onCanplay, false);
      ref.addEventListener("timeupdate", onTimeupdate, false);
    });
  }, [audioState.src]);

  useEffect(() => {
    if (audio.ref.current?.src) {
      audioState.playing ? audio.ref.current?.play() : audio.ref.current?.pause();
    }
  }, [audioState.playing]);

  // 组件卸载
  useEffect(() => {
    return () => {
      audio.destroy((ref) => {
        ref.removeEventListener("canplay", onCanplay, false);
        ref.removeEventListener("timeupdate", onTimeupdate, false);
      })
    }
  } ,[])

  return (
    <>
      <MusicList playList={playList} onPlayer={onPlayer} />
      <MusicControl audioState={audioState} onPlayingChange={onPlayingChange} />
    </>
  )
};

export default MusicPlayer;
