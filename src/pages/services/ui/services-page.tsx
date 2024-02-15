import { SERVICES } from "shared/const";
import { InfoCard } from "shared/ui/info-card";

export const ServicesPage = () => {
  return (
    <main className="text-blue-900 flex flex-col gap-5">
      <section className="flex flex-col gap-5">
        <h2 className="font-bold text-2xl">Услуги центра</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((service, index) => {
            return <InfoCard key={index} {...service} />;
          })}
        </div>
      </section>
    </main>
  );
};
