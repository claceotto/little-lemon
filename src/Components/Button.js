import "./Button.css";

function Button({ btext, disabled }) {
  return (
    <button
      className={`styled-button ${disabled === "disabled" ? "disabled" : ""}`}
      type="button"
      disabled={disabled}
    >
      {btext}
    </button>
  );
}

export default Button;
