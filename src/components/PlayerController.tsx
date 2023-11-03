import { FC } from "react";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";
import { Button } from "./ui/button";
import { Pause, Play, Share, TimerReset } from "lucide-react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { toast } from "./ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

type TimeRange = {
  startTime: number;
  endTime: number;
};

interface ControllerProps {
  timeRange: TimeRange;
  setTimeRange: (timeRange: TimeRange) => void;
  isPlaying: boolean;
  handlePlayPauseClicked: () => void;
  resetPlayer: () => void;
  setSpeed: (speed: number) => void;
  maxDuration: number;
}
const speedValues = [
  { value: 0.25, label: "0.25x" },
  { value: 0.5, label: "0.50x" },
  { value: 1, label: "1.00x" },
  { value: 1.25, label: "1.25x" },
  { value: 1.5, label: "1.50x" },
  { value: 2, label: "2.00x" },
  { value: 3, label: "3.00x" },
  { value: 4, label: "4.00x" },
];

export const PlayerController: FC<ControllerProps> = ({
  timeRange,
  setTimeRange,
  isPlaying,
  resetPlayer,
  maxDuration,
  handlePlayPauseClicked,
  setSpeed,
}) => {
  let { startTime, endTime } = timeRange;

  const handleSliderChange = (values: number | number[]) => {
    if (typeof values === "number") return;
    let [newStartTime, newEndTime] = values;
    setTimeRange({
      startTime: newStartTime,
      endTime: newEndTime,
    });
  };
  const handleShareClicked = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Copied to Clipboard!",
      duration: 3000,
    });
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <MaxWidthComponent className="flex flex-col items-center">
      <div className="w-full my-10 relative">
        <div className="w-full flex justify-between">
          <div>
            <span>{formatTime(startTime)}</span>
          </div>
          <div>
            <span>{formatTime(endTime)}</span>
          </div>
        </div>
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
              backgroundColor: "#E85A0C",
            },
            handle: {
              backgroundColor: "#E85A0C",
              border: "none",
            },
          }}
        />
      </div>
      <div className="flex items-center w-full flex-wrap">
        <div className="flex-1 hidden sm:flex"></div>
        <div className="flex-grow flex items-center justify-start sm:justify-center gap-5 sm:gap-10 ">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button size={"icon"} variant={"ghost"} onClick={resetPlayer}>
                  <TimerReset />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Reset Timer</span>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={handlePlayPauseClicked}>
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>{isPlaying ? "Pause" : "Play"}</span>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  onClick={handleShareClicked}>
                  <Share size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <span>Share</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex-1 flex justify-end">
          <select
            onChange={(e) => {
              setSpeed(Number(e.target.value));
            }}
            defaultValue={1}
            className="bg-inherit text-inherit p-2 rounded-lg">
            {speedValues.map((speed) => {
              return (
                <option key={speed.value} value={speed.value}>
                  {speed.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </MaxWidthComponent>
  );
};
