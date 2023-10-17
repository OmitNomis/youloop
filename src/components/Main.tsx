import { URLInput } from "./URLInput";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";
import { useState } from "react";

export const AppSection = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <MaxWidthComponent as="main" className="flex flex-grow flex-col">
      <URLInput setSearch={setSearch} />
    </MaxWidthComponent>
  );
};
