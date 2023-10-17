type Tag = "div" | "section" | "article" | "main" | "header" | "footer";

export const MaxWidthComponent = ({
  children,
  className,
  hasPadding = true,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  hasPadding?: boolean;
  as?: Tag;
}) => {
  const getClassName = () => {
    let newClassName = `w-full max-w-4xl`;
    if (hasPadding) {
      newClassName += ` p-2 sm:p-4`;
    }
    if (className) {
      newClassName += ` ${className}`;
    }
    return newClassName;
  };

  const Tag = as;
  return <Tag className={`${getClassName()}`}>{children}</Tag>;
};
