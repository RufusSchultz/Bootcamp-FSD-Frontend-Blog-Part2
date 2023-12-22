function InputField({ title, id, name, value, onChange }) {
    return (
        <div>
            <label htmlFor={id}>{title}</label>
            <input
                type="text"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className="input_field"
            />
        </div>
    )
}

export default InputField;