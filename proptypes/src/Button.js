import PropTypes, { number } from 'prop-types';

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin ?? '100px',   // default manual
        width: `${props.width}px`,
        height: `${props.width / 3}px`
      }}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  width: number.isRequired,
  margin: PropTypes.string
};

export default Button;
