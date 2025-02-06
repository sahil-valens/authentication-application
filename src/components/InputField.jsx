const InputField = ({ label, type, name, value, placeholder, onChange }) => {
  return (
    <div className="input-fields">
      <label className="input-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        autocomplete="off"  
        autocorrect="off"   
        autocapitalize="off" 
        spellcheck="false" 
      />
    </div>
  );
};

export default InputField;