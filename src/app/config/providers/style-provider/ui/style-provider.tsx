import { NextUIProvider } from "@nextui-org/react";

interface StyleProviderProps {
  children: React.ReactNode;
}

export const StyleProvider = ({ children }: StyleProviderProps) => (
  <NextUIProvider>{children}</NextUIProvider>
);
