import { ThemeSwitcher } from "./ThemeSwitcher";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";

export const Header = () => {
  return (
    <MaxWidthComponent className="flex justify-between items-center p-3 border-b-2">
      <div className="flex-1"></div>
      <div className="flex-1 flex items-center flex-col">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">YouLoop</h1>
        <h3 className=" text-md md:text-xl text-gray-500 mt-2 md:mt-4">
          Loop any Youtube Videos
        </h3>
      </div>
      <div className="flex-1 justify-end flex">
        <ThemeSwitcher />
      </div>
    </MaxWidthComponent>
  );
};
