interface NextButtonProps {
  onClick: () => void; // Функція без параметрів та без результату
}

export default function NextButton({ onClick }: NextButtonProps) {
  return (
    <div className="w-4/5 mx-auto">
      <button
        className="bg-gradient-to-r from-slate-500 to-slate-800 hover:from-slate-400 hover:to-slate-700 duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline focus:shadow-outline shadow-md"
        onClick={onClick}
      >
        Load more
      </button>
    </div>
  );
}
