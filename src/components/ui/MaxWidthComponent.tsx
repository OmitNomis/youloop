export const MaxWidthComponent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`w-full max-w-5xl ${className}`}>{children}</div>;
};
