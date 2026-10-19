import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  /** "default" for page layouts, "narrow" for long-form reading text. */
  size?: "default" | "narrow";
  as?: ElementType;
  className?: string;
};

const sizes = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
};

export function Container({
  children,
  size = "default",
  as: Tag = "div",
  className = "",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full px-5 sm:px-8 ${sizes[size]} ${className}`}>
      {children}
    </Tag>
  );
}
