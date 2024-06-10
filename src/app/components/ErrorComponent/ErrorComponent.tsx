import './errorStyle.css';

interface ErrorProps {
  children: string;
}
export default function ErrorComponent({ children }: ErrorProps) {
  return (
    <div className="o-404">
      <p className="a-message">{children}</p>
      <div className="o-cat">
        <div className="m-ears">
          <div className="m-ear -right"></div>
          <div className="m-ear -left"></div>
        </div>
        <div className="m-face">
          <div className="m-eyes">
            <div className="m-eye -left">
              <div className="a-eyePupil"></div>
            </div>
            <div className="m-eye -right">
              <div className="a-eyePupil"></div>
            </div>
          </div>
          <div className="m-nose"></div>
        </div>
      </div>
    </div>
  );
}