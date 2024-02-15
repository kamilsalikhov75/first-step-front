import { InfoCard } from "shared/ui/info-card";

export const ContactsPage = () => {
  return (
    <main className="text-blue-900 flex flex-col gap-5">
      <section className="flex flex-col gap-5">
        <h2 className="font-bold text-2xl">Контакты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac8606a412d5201f83e4db6bd4aee33766ac7146ed226c17f8bc7c73597273537&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
          ></iframe>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac8606a412d5201f83e4db6bd4aee33766ac7146ed226c17f8bc7c73597273537&amp;source=constructor"
            width="100%"
            height="400"
            frameBorder="0"
          ></iframe>
          <InfoCard
            title="МЦ 'Первый шаг' в Казани"
            description={
              <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <span>г. Казань, ул.Айдарова д.22</span>
                  <span>8 (843) 207-01-58</span>
                  <span>info@1shag.org</span>
                </div>
                <div className="grid gap-2">
                  <h6 className="font-bold">График работы</h6>
                  <span>Пн. - Пт. с 08:00 до 18:00</span>
                  <span>Сб, Вс.- выходной</span>
                </div>
              </div>
            }
          />

          <InfoCard
            title="ОЦ 'Первый шаг' в Волгограде"
            description={
              <div className="grid grid-cols-2 gap-2">
                <div className="grid gap-2">
                  <span>г. Волгоград, ул.Новороссийская 2К</span>
                  <span>8 (8442) 96-88-67</span>
                  <span>info@1shag.org</span>
                </div>
                <div className="grid gap-2">
                  <h6 className="font-bold">График работы</h6>
                  <span>Пн. - Пт. с 08:00 до 19:00</span>
                  <span>Сб, Вс.- выходной</span>
                </div>
              </div>
            }
          />
        </div>
      </section>
    </main>
  );
};
