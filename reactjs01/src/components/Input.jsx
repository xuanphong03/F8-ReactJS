import PropTypes from "prop-types";

Input.propTypes = {
  onChange: PropTypes.func,
};

function Input({ onChange }) {
  return (
    <div>
      <input type="text" placeholder="Nhập tên" onChange={onChange} />
    </div>
  );
}

export default Input;
