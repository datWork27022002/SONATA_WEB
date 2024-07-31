import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const IconCustom = ({ icon, size = 16 }) => {
    const Icon = icon;
    return <Icon size={size} />;
};

IconCustom.propTypes = {
    icon: PropTypes.object,
    size: PropTypes.number,
};

export default IconCustom;
