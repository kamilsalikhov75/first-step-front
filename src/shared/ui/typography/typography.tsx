import clsx from "clsx";

type TypographyTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
type TypographyVariant =
  | "title-1"
  | "title-2"
  | "title-3"
  | "text-1"
  | "text-2"
  | "text-3";

interface TypographyProps {
  tag?: TypographyTag;
  variant: TypographyVariant;
  children: React.ReactNode;
}

export const Typography = ({
  tag: Tag = "div",
  variant,
  children,
}: TypographyProps) => {
  return <Tag className={clsx(variant)}>{children}</Tag>;
};
