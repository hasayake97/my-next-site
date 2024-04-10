import { useRef, useMemo, useCallback } from 'react'

interface Callback {
  (ref: HTMLAudioElement): void
}

const useAudio = () => {
  const audioRef = useRef<HTMLAudioElement>()

  const run = useCallback((url: string, callback: Callback) => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = url
      return
    }

    callback((audioRef.current = new Audio()))
  }, [])

  const destroy = useCallback((callback: Callback) => {
    if (audioRef.current) {
      audioRef.current.pause()
      callback(audioRef.current)
      audioRef.current = void 0
    }
  }, [])

  return useMemo(
    () => ({
      run,
      destroy,
      ref: audioRef,
    }),
    [run, destroy, audioRef],
  )
}

export default useAudio
