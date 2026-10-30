function Button({ type = "button", children }) {
  return (
    <button className="form-button" type={type}>
      {children}
    </button>
  );
}

export default Button;
