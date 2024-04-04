import Text from "@/components/text";
import type { PlayList, PlayListItem } from "./types";

const MusicList = ({ playList, onPlayer }: {
  playList: PlayList,
  onPlayer: (event: PlayListItem) => void
}) => {
  return (
    <ul>
      {
        playList.map((musicItem, index) => (
          <li key={musicItem.Key} className="list-none">
            <Text
              className="sm:text-base inline-block max-w-[98%] overflow-hidden overflow-ellipsis whitespace-nowrap text-sm cursor-pointer">
              <span className="pr-2">{index + 1}.</span>
              <span className="hover:underline" onClick={() => onPlayer(musicItem)}>{musicItem.Key}</span>
            </Text>
          </li>
        ))
      }
    </ul>
  )
};

export default MusicList;
