function Dropdown({ label, options, value, onChange }) {
  return (
    <div className="form-input">
      <label>{label}</label>

      <select value={value} onChange={onChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
