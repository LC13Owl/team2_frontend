import "./Button.css";

const Button = ({ text, className = "", onClick }) => {
  return (
    <button className={`Button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
