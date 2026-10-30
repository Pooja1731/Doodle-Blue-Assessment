
function Dropdown({ label, options, value, onChange, placeholder }) {
  return (
    <div className="form-group">
      <select value={value} onChange={onChange}>
        <option value="">{placeholder}</option>

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
