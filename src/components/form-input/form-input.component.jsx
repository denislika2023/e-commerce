import "./form-input.styles.scss";

const FromInput = ({ label, inputOptions }) => {
  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />
      {label && (
        <label className={`${inputOptions ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FromInput;
