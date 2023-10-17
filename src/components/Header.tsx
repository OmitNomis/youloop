import { ThemeSwitcher } from "./ThemeSwitcher";
import { MaxWidthComponent } from "./ui/MaxWidthComponent";

export const Header = () => {
  return (
    <MaxWidthComponent
      as="header"
      className="flex justify-between items-center border-b-2">
      <div className="hidden sm:flex flex-1"></div>
      <div className="flex-grow flex items-start sm:items-center flex-col">
        <h1 className="text-3xl sm:text-4xl font-bold text-primary">YouLoop</h1>
        <h3 className=" text-md sm:text-xl text-gray-500 mt-2 sm:mt-4">
          Loop any Youtube Video
        </h3>
      </div>
      <div className="flex-1 justify-end flex">
        <ThemeSwitcher />
      </div>
    </MaxWidthComponent>
  );
};
