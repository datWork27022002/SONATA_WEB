import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import { forwardRef } from 'react';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const Input = forwardRef(({ label, type, errolMesseage, className, disabled, ...passProps }, ref) => {
    const Props = { ...passProps };

    return (
        <div className={cx('flex items-center py-2 text-[13px]')}>
            <label className={cx('w-32')}>{label}</label>
            <input
                className={cx(
                    'min-w-32 flex-1 rounded p-1',
                    'border-[1px] border-solid border-slate-400',
                    disabled && 'bg-slate-100',
                    {
                        [className]: className,
                    },
                )}
                disabled={disabled}
                {...Props}
            />
            {errolMesseage && <span className={cx('text-sm text-red-600')}>{errolMesseage}</span>}
        </div>
    );
});

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    errolMesseage: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Input;
