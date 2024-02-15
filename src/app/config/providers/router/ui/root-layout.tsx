import { Outlet } from "react-router-dom";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";

export const RootLayout = () => {
  return (
    <div className="min-h-dvh flex flex-col gap-5">
      <div className="w-full max-w-[1240px] px-[10px] mx-auto flex flex-col gap-5">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
