const Button = ({ color, label }) => {
  return (
    <button style={{ color }} className={`btn`}>
      {label}
    </button>
  );
};

export default Button;
