import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { forwardRef } from 'react';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const Input = forwardRef(({ label, type, textArea, className, errolMesseage, ...passProps }, ref) => {
    const Props = { ...passProps };

    const classes = cx('flex items-center mb-8', {
        [className]: className,
    });

    return (
        <div className={classes}>
            {label && <FontAwesomeIcon icon={label} color="#333333" className={cx('text-sm mr-2')} />}

            <input
                className={cx(
                    'w-full px-1 ',
                    'border-b-2 border-b-[#a8a8a8] border-solid border-t-0 border-l-0 border-r-0 ',
                )}
                type={type || 'text'}
                ref={ref}
                {...Props}
            />
            {errolMesseage && <span className={cx('text-sm text-red-600')}>{errolMesseage}</span>}
        </div>
    );
});

Input.propTypes = {
    label: PropTypes.object,
    textArea: PropTypes.bool,
    type: PropTypes.string,
    className: PropTypes.string,
    data: PropTypes.string,
    setData: PropTypes.func,
};

export default Input;
