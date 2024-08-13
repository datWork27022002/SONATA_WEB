import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from './Input.module.scss';
import IconCustom from '../IconCustom';
import RadioInput from './RadioInput';

const cx = classNames.bind(styles);

const Input = forwardRef(
    (
        {
            label,
            type,
            errolMesseage,
            className,
            disabled,
            icon,
            borderBottom,
            required,
            yesNoOptions,
            seletedRadio,
            setSeletedRadio,
            ...passProps
        },
        ref,
    ) => {
        const Props = { ...passProps };

        return (
            <div
                className={cx('flex items-center py-2 text-[13px]', {
                    [className]: className,
                })}
            >
                {icon && <IconCustom icon={icon} className={cx('mr-2 text-sm')} />}
                {label && <label className={cx('w-32', required && 'font-semibold text-red-600')}>{label}</label>}
                {!yesNoOptions && (
                    <input
                        className={cx(
                            'min-w-32 flex-1 p-1',
                            borderBottom
                                ? 'border-b-2 border-l-0 border-r-0 border-t-0 border-solid border-b-[#a8a8a8]'
                                : 'rounded border-[1px] border-solid border-slate-400',
                            disabled && 'bg-slate-100',
                        )}
                        disabled={disabled}
                        {...Props}
                    />
                )}
                {yesNoOptions && <RadioInput seletedRadio={seletedRadio} setSeletedRadio={setSeletedRadio} />}
                {errolMesseage && <span className={cx('text-sm text-red-600')}>{errolMesseage}</span>}
            </div>
        );
    },
);

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    errolMesseage: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.func,
    borderBottom: PropTypes.bool,
    seletedRadio: PropTypes.bool,
    setSeletedRadio: PropTypes.func,
};

export default Input;
