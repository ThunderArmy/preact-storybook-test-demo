import { h } from 'preact';
import style from './style.module.css';
import PropTypes from "prop-types";

const Button = ({backgroundColor, label, ...props}) => (
    <button className={style.Button} type="button"
            style={backgroundColor && { backgroundColor }}
            {...props}>{label}</button>
);

Button.propTypes = {
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    onClick: undefined,
};

export default Button;
