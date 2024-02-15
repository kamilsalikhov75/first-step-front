export interface InfoCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="bg-green-100 border border-green-500 rounded-[10px] p-4 flex flex-col gap-2">
      <h5 className="text-lg font-bold">{title}</h5>
      <span className="text-base">{description}</span>
    </div>
  );
};
