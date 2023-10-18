import { LoopingPlayer } from "./LoopingPlayer";
import { PlayerWrapper } from "./PlayerWrapper";
import { URLInput } from "./URLInput";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";
import { useState } from "react";

export const AppSection = () => {
  const [search, setSearch] = useState("");
  const [isPlayerPlaying, setIsPlayerPlaying] = useState(false);
  const [timeRange, setTImeRange] = useState([0, 0]);

  const handleURLEntered = (url: string) => {
    setSearch(url);
    setIsPlayerPlaying(true);
  };

  return (
    <MaxWidthComponent as="main" className="flex flex-grow flex-col">
      <URLInput setSearch={handleURLEntered} />
      <PlayerWrapper>
        <LoopingPlayer
          url={search}
          startTime={0}
          endTime={10}
          isPlaying={isPlayerPlaying}
        />
      </PlayerWrapper>
    </MaxWidthComponent>
  );
};
