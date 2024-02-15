export interface WithLabelProps {
  children: React.ReactNode;
  label: React.ReactNode;
}

export const WithLabel = ({ label, children }: WithLabelProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span>{label}</span>
      <span>{children}</span>
    </div>
  );
};
