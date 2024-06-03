export interface ModalProps {
  link: string;
  onClick: () => void;
}

export default function Modal({ link, onClick }: ModalProps) {
  function closeModal(e: React.MouseEvent<HTMLDivElement>) {
    e.target === e.currentTarget && onClick();
  }

  return (
    <div
      style={{ backgroundColor: '#0f1923d5' }}
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center"
      onClick={e => closeModal(e)}
    >
      <div className="w-3/5">
        <img className="rounded-lg w-full" src={link} alt="img" />
      </div>
    </div>
  );
}
