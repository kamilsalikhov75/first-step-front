import { InfoCard } from "shared/ui/info-card";
import { FEEDBACKS } from "../model/meta";

export const FeedbackPage = () => {
  return (
    <main className="text-blue-900 flex flex-col gap-5">
      <section className="flex flex-col gap-5">
        <h2 className="font-bold text-2xl">Отзывы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Отрисовка отзывов */}
          {FEEDBACKS.map((feedback, index) => {
            return (
              <InfoCard
                key={index}
                title={feedback.name}
                description={feedback.text}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};
