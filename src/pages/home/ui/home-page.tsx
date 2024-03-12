import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { SERVICES } from "shared/const";
import { InfoCard } from "shared/ui/info-card";
import image1 from "shared/assets/doc-patient.jpg";
import image2 from "shared/assets/building.jpg";
import image3 from "shared/assets/trainer-patient.jpg";

export const HomePage = () => {
  return (
    <main className="text-blue-900 flex flex-col gap-5">
      <section className="flex flex-col gap-3">
        <h1 className="font-bold text-3xl ">
          Добро пожаловать в сеть реабилитационных центров "Первый шаг"
        </h1>
        <p className="text-lg">
          Реабилитация и коррекция детей с диагнозом ДЦП (всех форм), ЗПР,
          психоневрологическими заболеваниями и заболеваниями
          опорно-двигательного аппарата.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Image className="h-full object-cover" src={image1} />
          <Image className="h-full object-cover" src={image2} />
          <Image className="h-full object-cover" src={image3} />
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h2 className="font-bold text-2xl">Услуги центра</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.slice(0, 3).map((service, index) => {
            return (
              <InfoCard
                key={index}
                title={service.title}
                description={
                  <div className="grid h-full gap-1">
                    <p>{service.description}</p>
                    <Image
                      removeWrapper
                      className="self-end w-full h-[200px] object-cover"
                      src={service.image}
                    />
                  </div>
                }
              />
            );
          })}
          <Link className="font-bold text-green-500 text-lg" to="/services">
            Посмотреть все услуги
          </Link>
        </div>
      </section>
    </main>
  );
};
