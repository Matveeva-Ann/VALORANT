export interface BtnNextProps {
  onClick: () => void;
  children: string;
  disabled: boolean;
}

export default function Btn({ onClick, children, disabled }: BtnNextProps) {
  return (
    <button
      onClick={onClick}
      className="m-4 p-2 px-4 bg-white dark:bg-black text-black dark:text-white rounded-lg disabled:scale-100 disabled:opacity-50 active:scale-105"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
