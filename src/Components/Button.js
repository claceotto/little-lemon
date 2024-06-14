import "./Button.css";

function Button({ btext, disabled, handleClick, type }) {
  return (
    <button
      className={`styled-button ${disabled ? "disabled" : ""}`}
      onClick={handleClick}
      type={type}
      disabled={disabled}
    >
      {btext}
    </button>
  );
}

export default Button;
