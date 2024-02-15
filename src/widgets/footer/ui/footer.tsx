import { Link } from "react-router-dom";
import { Logo } from "shared/ui/icons";

export const Footer = () => {
  return (
    <footer className="mt-auto bg-green-100 py-10">
      <div className="max-w-[1240px] mx-auto  px-[10px] sm:px-5 ">
        <div className="flex flex-col gap-8 items-center lg:flex-row lg:justify-between">
          <Link to="/">
            <Logo />
          </Link>
          <p className="text-base text-blue-900 max-w-[650px]">
            ООО «ТИМА», 420037, Респ. Татарстан, г. Казань, ул. Айдарова д.22,
            помещение 1015 ИНН 1661035100, КПП 16610001, ОГРН
            1131690001959.Лицензия на осуществление медицинской деятельности №
            Л041-01176-11/00315106 от 22.03.2019 г.
          </p>
          <div className="flex flex-col gap-[10px] items-start text-xl text-blue-900">
            <a href="tel:8-800-700-31-48">8-800-700-31-48</a>
            <a href="mailto:info@1shag.org">info@1shag.org</a>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 w-full h-[1px] my-5" />
      <p className="text-sm text-blue-900 text-center max-w-[1240px] mx-auto px-[10px] sm:px-5 lg:text-2xl">
        ВОЗМОЖНЫ ПРОТИВОПОКАЗАНИЯ.ТРЕБУЕТСЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА
      </p>
    </footer>
  );
};
