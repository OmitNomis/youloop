import { FC } from "react";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";
import { Button } from "./ui/button";
import { Pause, Play, Share, TimerReset } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type TimeRange = {
  startTime: number;
  endTime: number;
};

interface ControllerProps {
  timeRange: TimeRange;
  setTimeRange: (timeRange: TimeRange) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  resetPlayer: () => void;
  maxDuration: number;
}

export const PlayerController: FC<ControllerProps> = ({
  timeRange,
  setTimeRange,
  isPlaying,
  setIsPlaying,
  resetPlayer,
  maxDuration,
}) => {
  const handlePlayPauseClicked = () => {
    setIsPlaying(!isPlaying);
  };
  let { startTime, endTime } = timeRange;

  const handleSliderChange = (values: number | number[]) => {
    if (typeof values === "number") return;
    let [newStartTime, newEndTime] = values;
    setTimeRange({
      startTime: newStartTime,
      endTime: newEndTime,
    });
  };

  return (
    <MaxWidthComponent className="flex flex-col items-center">
      <div className="w-full my-10 relative">
        <Slider
          range
          min={0}
          max={maxDuration}
          defaultValue={[startTime, endTime]}
          value={[startTime, endTime]}
          onChange={handleSliderChange}
          step={0.1}
          styles={{
            track: {
              backgroundColor: "rgb(242, 107, 17)",
            },
            rail: {
              backgroundColor: "rgb(148, 148, 148)",
            },
            handle: {
              backgroundColor: "rgb(242, 107, 17)",
              border: "none",
            },
          }}
        />
      </div>
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
