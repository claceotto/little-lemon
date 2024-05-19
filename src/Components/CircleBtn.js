import "./CircleBtn.css";
export default function CircleBtn({ activeClass, btnNumber, onClick }) {
  return (
    <button className={activeClass} onClick={onClick}>
      {btnNumber}
    </button>
  );
}
