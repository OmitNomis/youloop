import { FC, useRef } from "react";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";

interface LoopingPlayerProps {
  url: string;
  startTime: number;
  endTime: number;
  isPlaying: boolean;
}

export const LoopingPlayer: FC<LoopingPlayerProps> = ({
  url,
  isPlaying,
  startTime,
  endTime,
}) => {
  const playerRef = useRef<ReactPlayer>(null);
  const handleProgress = (progress: OnProgressProps) => {
    if (progress.playedSeconds >= endTime) {
      playerRef.current?.seekTo(startTime);
    }
  };

  if (url) {
    return (
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={isPlaying}
        loop={true}
        controls={true}
        onProgress={handleProgress}
      />
    );
  }

  return (
    <div className="w-[80%] max-w-[90%] h-[360px] border flex justify-center items-center rounded-lg">
      <div>Video URL unavailable</div>
    </div>
  );
};
