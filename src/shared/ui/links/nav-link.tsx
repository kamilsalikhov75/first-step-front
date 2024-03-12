import { cva } from "class-variance-authority";
import { Link, useLocation } from "react-router-dom";
import { cn } from "shared/lib/utils";

export interface NavLinkProps {
  to: string;
  children: string;
}

const linkVariants = cva("", {
  variants: {
    variant: {
      active: "text-green-500",
      default: "text-foreground",
    },
  },
});

export const NavLink = ({ to, children }: NavLinkProps) => {
  const path = useLocation();
  return (
    <Link
      className={cn(
        linkVariants({ variant: path.pathname === to ? "active" : "default" })
      )}
      to={to}
    >
      {children}
    </Link>
  );
};
