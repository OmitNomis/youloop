import { FC } from "react";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";

interface LoopingPlayerProps {
  url: string;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  playerRef?: React.RefObject<ReactPlayer>;
  handleProgress: (props: OnProgressProps) => void;
  handlePlayerReady: () => void;
  playBackRate?: number;
}

export const LoopingPlayer: FC<LoopingPlayerProps> = ({
  url,
  isPlaying,
  setIsPlaying,
  playerRef,
  handleProgress,
  handlePlayerReady,
  playBackRate,
}) => {
  if (url) {
    return (
      <div className="flex justify-center w-full">
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          loop={true}
          onReady={handlePlayerReady}
          controls={true}
          onProgress={handleProgress}
          playbackRate={playBackRate}
        />
      </div>
    );
  }

  return (
    <div className="w-[90%] sm:w-[80%] h-[360px] border flex justify-center items-center rounded-lg">
      <div>Video URL unavailable</div>
    </div>
  );
};
