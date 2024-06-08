import "./Button.css";

function Button({ btext, disabled, handleClick }) {
  return (
    <button
      className={`styled-button ${disabled ? "disabled" : ""}`}
      onClick={handleClick}
      type="button"
      disabled={disabled}
    >
      {btext}
    </button>
  );
}

export default Button;
