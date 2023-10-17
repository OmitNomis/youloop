import { FC } from "react";
import ReactPlayer from "react-player";

interface LoopingPlayerProps {
  url: string;
}

export const LoopingPlayer: FC<LoopingPlayerProps> = ({ url }) => {
  if (url) {
    return <ReactPlayer url={url} playing={true} loop={true} controls={true} />;
  }

  return (
    <div className="w-[80%] max-w-[90%] h-[360px] border flex justify-center items-center rounded-lg">
      <div>Video URL unavailable</div>
    </div>
  );
};
