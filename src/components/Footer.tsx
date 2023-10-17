import { MaxWidthComponent } from "./ui/MaxWidthComponent";

export const Footer = () => {
  return (
    <MaxWidthComponent as="footer" className="flex justify-center border-t-2">
      Made with <span className="text-red-400 px-1">{"<3"}</span> by OmitNomis
    </MaxWidthComponent>
  );
};
