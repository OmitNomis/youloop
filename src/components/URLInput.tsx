import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useRef } from "react";
import { validateYoutubeUrl } from "@/helpers/validateYoutubeUrl";
import { useToast } from "./ui/use-toast";

export const URLInput = ({
  setSearch,
}: {
  setSearch: (search: string) => void;
}) => {
  const { toast } = useToast();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isValid = validateYoutubeUrl(inputRef.current?.value ?? "");
    if (inputRef.current?.value !== "") {
      if (isValid) {
        setSearch(inputRef.current?.value ?? "");
      } else {
        toast({
          title: "Invalid URL",
          description: "Please enter a valid Youtube URL",
          duration: 3000,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <form className="flex gap-2" onSubmit={handleSearch}>
      <Input placeholder="Enter URL" ref={inputRef} />
      <Button type="submit" size={"icon"}>
        <Search size={18} />
      </Button>
    </form>
  );
};
