import propTypes from "prop-types";

export default function SpinnerWrapper({ children }) {
  return <div className="spinner">{children}</div>;
}

SpinnerWrapper.propTypes = {
  children: propTypes.element,
};
