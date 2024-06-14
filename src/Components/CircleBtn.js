import "./CircleBtn.css";
export default function CircleBtn({ activeClass, btnNumber, onClick, disabled }) {
  return (
    <button className={activeClass} onClick={onClick} disabled={disabled}>
      {btnNumber}
    </button>
  );
}
