import type {_Object} from "@aws-sdk/client-s3";

export interface AudioState {
  name: string
  src: string
  volume: number
  playing: boolean
  duration: number
  currentTime: number
};

export type AudioAction = {
  type: "change",
  payload: {
    [k in keyof AudioState]?: AudioState[k]
  }
}

export type PlayListItem = _Object;

export type PlayList = PlayListItem[];
