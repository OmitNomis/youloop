import { ReactNode } from "react";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";

export const PlayerWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthComponent
      as="section"
      className="mt-5 sm:mt-10 border rounded-lg flex flex-col items-center">
      {children}
    </MaxWidthComponent>
  );
};
