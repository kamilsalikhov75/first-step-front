import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Logo } from "shared/ui/icons";
import { ROUTES } from "../model/meta";
import { useState } from "react";
import { AuthModal, UserMenu } from "features/auth";
import { openAuthModal, useAuth } from "entities/auth";
import { AuthModalMode } from "entities/auth/types";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth = useAuth();

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        classNames={{ wrapper: "px-0 max-w-full bg-white" }}
        disableAnimation
      >
        <NavbarBrand>
          <Link to="/">
            <Logo />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          {ROUTES.map((route, index) => {
            return (
              <NavbarItem key={index}>
                <Link color="foreground" to={route.href}>
                  {route.label}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          {!auth.user && (
            <>
              <NavbarItem>
                <Button
                  onClick={() => {
                    openAuthModal(AuthModalMode.Login);
                  }}
                  className="text-green-500 font-bold"
                  variant="light"
                >
                  Войти
                </Button>
              </NavbarItem>
              <NavbarItem className="hidden md:flex">
                <Button
                  onClick={() => {
                    openAuthModal(AuthModalMode.Register);
                  }}
                  className="bg-green-500 font-bold text-white"
                  variant="solid"
                >
                  Регистрация
                </Button>
              </NavbarItem>
            </>
          )}
          {auth.user && <UserMenu />}
        </NavbarContent>
        {isMenuOpen && (
          <NavbarMenu className="items-end bg-white">
            {ROUTES.map((route) => (
              <NavbarMenuItem key={`${route.label}-${route.href}`}>
                <Link className="w-full" to={route.href}>
                  {route.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        )}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </Navbar>
      <AuthModal />
    </>
  );
};
