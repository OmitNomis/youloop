import { MaxWidthComponent } from "./ui/MaxWidthComponent";
import { useState } from "react";

export const AppSection = () => {
  const [loading, setLoading] = useState(false);

  return (
    <MaxWidthComponent as="main" className="flex flex-grow flex-col">
      Main
    </MaxWidthComponent>
  );
};
