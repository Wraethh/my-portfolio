import styles from "./FormInput.module.css";
import PropTypes from "prop-types";

export default function FormInput({ label, handleChange, ...inputProps }) {
  return (
    <div className={styles.formInput}>
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} onChange={(e) => handleChange(e)} />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
