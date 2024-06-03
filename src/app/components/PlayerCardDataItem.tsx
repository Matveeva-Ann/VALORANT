export interface PlayerCardDataItemProps {
  title: string;
  children: React.ReactNode;
}

export default function PlayerCardDataItem({ title, children }: PlayerCardDataItemProps) {
  return (
    <div className="flex mb-1">
      <dt className="font-medium text-slate-500 mr-2">{title}</dt>
      <dd>{children}</dd>
    </div>
  );
}
