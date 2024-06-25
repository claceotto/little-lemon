import "./Button.css";

function Button({ btext, disabled, handleClick, type, dataTestId }) {
  return (
    <button
      className={`styled-button ${disabled ? "disabled" : ""}`}
      onClick={handleClick}
      type={type}
      disabled={disabled}
      data-testid={dataTestId}
    >
      {btext}
    </button>
  );
}

export default Button;
