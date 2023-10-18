import { LoopingPlayer } from "./LoopingPlayer";
import { PlayerWrapper } from "./PlayerWrapper";
import { URLInput } from "./URLInput";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";
import { useState, useRef } from "react";
import { PlayerController } from "./PlayerController";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";

export const AppSection = () => {
  const [search, setSearch] = useState("");
  const [isPlayerPlaying, setIsPlayerPlaying] = useState(false);
  const [timeRange, setTimeRange] = useState({
    startTime: 0,
    endTime: 0,
  });
  const playerRef = useRef<ReactPlayer>(null);

  const handlePlayerReady = () => {
    setTimeRange((prev) => {
      return {
        ...prev,
        endTime: playerRef.current?.getDuration() || 0,
      };
    });
    setIsPlayerPlaying(true);
  };

  const handleURLEntered = (url: string) => {
    setSearch(url);
  };

  const resetPlayer = () => {
    playerRef.current?.seekTo(0);
    setIsPlayerPlaying(false);
    setTimeRange((prev) => {
      return {
        ...prev,
        endTime: playerRef.current?.getDuration() || 0,
      };
    });
  };

  const handleProgress = (progress: OnProgressProps) => {
    const { startTime, endTime } = timeRange;
    if (progress.playedSeconds >= endTime) {
      playerRef.current?.seekTo(startTime);
    }
    if (progress.playedSeconds <= startTime) {
      playerRef.current?.seekTo(startTime);
    }
  };

  return (
    <MaxWidthComponent as="main" className="flex flex-grow flex-col">
      <URLInput setSearch={handleURLEntered} />
      <PlayerWrapper>
        <LoopingPlayer
          url={search}
          playerRef={playerRef}
          isPlaying={isPlayerPlaying}
          setIsPlaying={setIsPlayerPlaying}
          handleProgress={handleProgress}
          handlePlayerReady={handlePlayerReady}
        />
        <PlayerController
          timeRange={timeRange}
          setTimeRange={setTimeRange}
          isPlaying={isPlayerPlaying}
          setIsPlaying={setIsPlayerPlaying}
          resetPlayer={resetPlayer}
        />
      </PlayerWrapper>
    </MaxWidthComponent>
  );
};
