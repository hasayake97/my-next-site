import {useCallback, useEffect, useState} from "react";
import {AudioState} from "./types";

const timeFormatter = (time: number | undefined) => {
  if (typeof time !== "number") { return "00:00" }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0");
};

const Loading = () => (
  <svg className="animate-spin h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="#fff" d="M21 12a9 9 0 01-9 9"/>
  </svg>
)

const Play = () => (
  <svg className="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const Pause = () => (
  <svg className="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

type OnChangeFunc = (playing: boolean) => void
const AudioButton = ({playing, loading, onChange}: { playing: boolean, loading: boolean, onChange: OnChangeFunc }) => {
  const onClick = useCallback(() => {
    onChange(!playing)
  }, [playing, onChange])

  return (
    <button onClick={onClick} className="flex p-1 items-center">
      {
        loading
          ? <Loading />
          : playing ? <Pause/> : <Play/>
      }
      {/*<Loading /> <Play />*/}
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
    requestAnimationFrame(() => setIsExpand(true));
  }, []);

  useEffect(() => {
    if (audioState.loading) {
      setIsExpand(true);
      return;
    }

    if (audioState.playing && !isExpand) {
      setIsExpand(true);
    }

    if (!audioState.playing && isExpand) {
      const timer = setTimeout(() => setIsExpand(false), 6 * 1000);
      return () => (clearTimeout(timer));
    }

  }, [audioState.loading, audioState.playing, isExpand]);

  return (
    <section className="h-[var(--music-player-height)]">
      <div
        className={`${isExpand ? "translate-y-0" : "translate-y-[var(--music-player-height)]"} box-border fixed left-0 bottom-0 bg-white transition-transform delay-300 duration-500 ease-in-out w-full h-[var(--music-player-height)] shadow-music-player bg-background-image z-[99] border-t-black border p-2`}>
        <div className="w-full h-full lg:w-[920px] lg:px-6 px-2 mx-auto flex items-center bg-white">
          <AudioButton playing={audioState.playing} loading={audioState.loading} onChange={onPlayingChange} />

          <div className="ml-4 h-full flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="max-w-[158px] sm:max-w-[68%] overflow-ellipsis overflow-hidden whitespace-nowrap sm:text-base text-sm font-bold" title={audioState.name}>{audioState.name || "请选择歌曲"}</span>
              <span className="ml-4 text-xs">{timeFormatter(Math.floor(audioState.currentTime))} / {timeFormatter(Math.floor(audioState.duration))}</span>
            </div>

            <Progress value={ audioState.currentTime / audioState.duration * 100 } />
          </div>
        </div>
      </div>
    </section>
  )
};

export default MusicControl;
