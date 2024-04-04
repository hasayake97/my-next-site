"use client";

import {useCallback, useEffect, useState} from "react";
import { AudioState } from "./types";

const timeFomatter = (time: number | undefined) => {
  if (typeof time !== "number") { return "00:00" }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
};

const Play = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
          clipRule="evenodd"/>
  </svg>

);

const Pause = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z"
          clipRule="evenodd"/>
  </svg>
);

type OnChangeFunc = (playing: boolean) => void
const AudioButton = ({ playing, onChange } : { playing: boolean, onChange: OnChangeFunc }) => {
  const onClick = useCallback(() => {
    onChange(!playing)
  }, [playing, onChange])

  return (
    <button onClick={onClick}>
      { playing ? <Pause/> : <Play/> }
    </button>
  )
};

const Progress = ({value}: { value: number }) => {
  return (
    <div className="w-full h-[4px] bg-black relative">
      <div className="bg-gray-300 w-0 h-full absolute left-0 top-0 transition-[width] " style={{width: `${value}%`}}></div>
    </div>
  )
};


const MusicControl = ({ audioState, onPlayingChange }: { audioState: AudioState, onPlayingChange: OnChangeFunc }) => {
  const [isExpand, setIsExpand] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setIsExpand(true))
  }, []);

  return (
    <section className="h-[var(--music-player-height)]">
      <div
        className={`${isExpand && "translate-y-0"} box-border fixed left-0 bottom-0 bg-white translate-y-[var(--music-player-height)] transition-transform delay-500 duration-500 ease-in-out w-full h-[var(--music-player-height)] shadow-music-player bg-background-image z-[99] border-t-black border p-2`}>
        <div className="w-full h-full lg:w-[920px] lg:px-6 px-2 mx-auto flex items-center bg-white">
          <AudioButton playing={audioState.playing} onChange={onPlayingChange} />

          <div className="ml-4 h-full flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="max-w-[158px] sm:max-w-[68%] overflow-ellipsis overflow-hidden whitespace-nowrap sm:text-base text-sm font-bold" title={audioState.name}>{audioState.name || "请选择歌曲"}</span>
              <span className="ml-4 text-xs">{timeFomatter(Math.floor(audioState.currentTime))} / {timeFomatter(Math.floor(audioState.duration))}</span>
            </div>

            <Progress value={ audioState.currentTime / audioState.duration * 100 } />
          </div>
        </div>
      </div>
    </section>
  )
};

export default MusicControl;
