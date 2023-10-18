import { FC } from "react";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";
import { Button } from "./ui/button";
import { Pause, Play, Share, TimerReset } from "lucide-react";

interface ControllerProps {
  timeRange: number[];
  setTimeRange: (timeRange: number[]) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  resetPlayer: () => void;
}

export const PlayerController: FC<ControllerProps> = ({
  timeRange,
  setTimeRange,
  isPlaying,
  setIsPlaying,
  resetPlayer,
}) => {
  const handlePlayPauseClicked = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <MaxWidthComponent className="flex flex-col items-center">
      <div></div>
      <div className="flex gap-10">
        <Button size={"icon"} variant={"ghost"} onClick={resetPlayer}>
          <TimerReset />
        </Button>
        <Button
          size={"icon"}
          variant={"ghost"}
          onClick={handlePlayPauseClicked}>
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Share size={18} />
        </Button>
      </div>
    </MaxWidthComponent>
  );
};
