import { LoopingPlayer } from "./LoopingPlayer";
import { PlayerWrapper } from "./PlayerWrapper";
import { URLInput } from "./URLInput";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";
import { useState, useRef, useEffect } from "react";
import { PlayerController } from "./PlayerController";
import ReactPlayer from "react-player";
import { OnProgressProps } from "react-player/base";
import { toast } from "./ui/use-toast";

export const AppSection = () => {
  const [search, setSearch] = useState("");
  const [isPlayerPlaying, setIsPlayerPlaying] = useState(false);
  const [timeRange, setTimeRange] = useState({
    startTime: 0,
    endTime: 1,
  });
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const startTimeParam = urlParams.get("startTime");
    const endTimeParam = urlParams.get("endTime");
    const searchParam = urlParams.get("url");
    if (startTimeParam && endTimeParam && searchParam) {
      setTimeRange({
        startTime: Number(startTimeParam),
        endTime: Number(endTimeParam),
      });
      setSearch(searchParam);
    }
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const { startTime, endTime } = timeRange;
    urlParams.set("url", search || "");
    urlParams.set("startTime", startTime.toString());
    urlParams.set("endTime", endTime.toString());
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${urlParams.toString()}`
    );
  }, [timeRange, search]);

  const playerRef = useRef<ReactPlayer>(null);

  const handlePlayerReady = () => {
    toast({
      title: "Video Uploaded!",
      duration: 3000,
    });
    setTimeRange({
      startTime: 0,
      endTime: playerRef.current?.getDuration() || 1,
    });
    setIsPlayerPlaying(true);
  };

  const handleURLEntered = (url: string) => {
    setSearch(url);
  };

  const resetPlayer = () => {
    playerRef.current?.seekTo(0);
    setIsPlayerPlaying(false);
    setTimeRange({
      startTime: 0,
      endTime: playerRef.current?.getDuration() || 1,
    });
    toast({
      title: "Timer reset!",
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

  const handlePlayPauseClicked = () => {
    if (!playerRef.current) return;
    setIsPlayerPlaying(!isPlayerPlaying);
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
          playBackRate={speed}
        />
        <PlayerController
          timeRange={timeRange}
          setTimeRange={setTimeRange}
          isPlaying={isPlayerPlaying}
          handlePlayPauseClicked={handlePlayPauseClicked}
          resetPlayer={resetPlayer}
          maxDuration={playerRef.current?.getDuration() || 1}
          setSpeed={setSpeed}
        />
      </PlayerWrapper>
    </MaxWidthComponent>
  );
};
