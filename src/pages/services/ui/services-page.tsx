import { Image } from "@nextui-org/react";
import { SERVICES } from "shared/const";
import { InfoCard } from "shared/ui/info-card";

export const ServicesPage = () => {
  return (
    <main className="text-blue-900 flex flex-col gap-5">
      <section className="flex flex-col gap-5">
        <h2 className="font-bold text-2xl">Услуги центра</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Отрисовка услуг */}
          {SERVICES.map((service, index) => {
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
        </div>
      </section>
    </main>
  );
};
