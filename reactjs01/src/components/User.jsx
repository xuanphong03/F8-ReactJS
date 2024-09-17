import PropTypes from "prop-types";

User.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

function User({ name, email }) {
  return (
    <div
      style={{
        background: "yellow",
        padding: "10px",
        margin: "10px",
        borderRadius: "4px",
      }}
    >
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
    </div>
  );
}

export default User;
