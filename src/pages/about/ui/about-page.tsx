import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import image1 from "shared/assets/about/about-1.jpg";
import image2 from "shared/assets/about/about-2.jpg";
import image3 from "shared/assets/about/about-3.jpg";

export const AboutPage = () => {
  return (
    <main className="text-blue-900 flex flex-col gap-5">
      <section className="flex flex-col gap-5">
        <h2 className="font-bold text-2xl">Информация о центре и врачах</h2>
        <p>
          Сеть детских реабилитационных центров "Первый шаг" специализируется на
          восстановительном лечении детей с детским церебральным параличом,
          задержкой психического и речевого развития, травмами
          опорно-двигательного аппарата, а также различными генетическими
          синдромами.{" "}
        </p>
        <p>
          В своей работе мы делаем упор на реабилитацию без лекарств и операций.
          Наша главная цель - реализовать потенциал, заложенный в каждого
          человека с рождения. Поэтому для всех пациентов мы составляем
          индивидуальную программу лечения, и стремимся к достижению реальных
          целей.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Image className="h-full object-cover" src={image1} />
          <Image className="h-full object-cover" src={image2} />
          <Image className="h-full object-cover" src={image3} />
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h2 className="font-bold text-2xl">Филиалы в крупных городах</h2>
        <p>
          Первая клиника сети реабилитационных центров "Первый шаг" была
          основана в 2014 году в г. Казань. Бессменным руководителем сети
          является Елена Анатольевна Нургалиева. Она открыла клинику для лечения
          её собственного сына, и таких же детей, нуждающихся в помощи
          профессиональных врачей.{" "}
        </p>
        <p>
          На данный момент функционируют 2 центра сети "Первый шаг":{" "}
          <Link className="text-green-500" to="/contacts">
            Подробнее
          </Link>
        </p>
      </section>
    </main>
  );
};
