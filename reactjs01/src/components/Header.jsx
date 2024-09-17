import PropTypes from "prop-types";

Header.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  children: PropTypes.string,
};

function Header({ title, name, email, children }) {
  console.log(title);
  console.log(name);
  console.log(email);

  return <header>HEADER {children}</header>;
}

export default Header;
