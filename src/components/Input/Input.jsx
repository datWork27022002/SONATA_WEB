import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from './Input.module.scss';
import IconCustom from '../IconCustom';
import RadioInput from './RadioInput';
import Dropdown from './DropDown';
import RangeTime from './RangeTime';

const cx = classNames.bind(styles);

const Input = forwardRef(
    (
        {
            label,
            errolMesseage,
            icon,
            iconRightInput,
            borderBottom,
            paddingLabel,
            boldLabel,
            widthInput,
            type = 'text',
            textarea,
            className,
            disabled,
            required,
            radioInput,
            dropDown,
            rangeTime,
            listOptions,
            seletedValue,
            setSeletedValue,
            ...passProps
        },
        ref,
    ) => {
        const Props = { ...passProps };

        const Comp = textarea ? 'textarea' : 'input';

        return (
            <div
                className={cx('flex items-center py-2 text-[13px]', {
                    [className]: className,
                })}
            >
                {icon && <IconCustom icon={icon} className={cx('mr-2 text-sm')} />}
                {label && (
                    <label
                        className={cx(
                            paddingLabel ? 'pr-2' : 'w-32',
                            required && 'font-semibold text-red-600',
                            boldLabel && 'font-semibold',
                        )}
                    >
                        {label}
                    </label>
                )}
                {!radioInput && !dropDown && !rangeTime && (
                    <div className={cx('flex flex-1 items-center')}>
                        <Comp
                            type={type}
                            style={{ width: widthInput }}
                            ref={ref}
                            className={cx(
                                'flex-1 p-1',
                                borderBottom
                                    ? 'border-b-2 border-l-0 border-r-0 border-t-0 border-solid border-b-[#a8a8a8]'
                                    : 'rounded border-[1px] border-solid border-slate-400',
                                disabled && 'bg-slate-100',
                            )}
                            disabled={disabled}
                            {...Props}
                        />

                        {iconRightInput && (
                            <div
                                className={cx(
                                    'z-10 ml-[-3px] h-[29px] w-[29px] rounded-r bg-gray-300',
                                    'flex items-center justify-center',
                                    'cursor-pointer hover:bg-primary-color',
                                )}
                            >
                                <IconCustom icon={iconRightInput} />
                            </div>
                        )}
                    </div>
                )}
                {(radioInput || dropDown || rangeTime) && (
                    <div className={cx('flex flex-1 items-center')} style={{ width: widthInput }}>
                        {radioInput && (
                            <RadioInput
                                seletedRadio={seletedValue}
                                setSeletedRadio={setSeletedValue}
                                listOptions={listOptions}
                            />
                        )}
                        {dropDown && (
                            <Dropdown
                                listOptions={listOptions}
                                seletedValue={seletedValue}
                                setSeletedValue={setSeletedValue}
                            />
                        )}
                        {rangeTime && <RangeTime seletedValue={seletedValue} setSeletedValue={setSeletedValue} />}
                    </div>
                )}

                {errolMesseage && <span className={cx('text-sm text-red-600')}>{errolMesseage}</span>}
            </div>
        );
    },
);

Input.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    errolMesseage: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    icon: PropTypes.func,
    iconRightInput: PropTypes.func,
    borderBottom: PropTypes.bool,
    required: PropTypes.bool,
    dropDown: PropTypes.bool,
    rangeTime: PropTypes.bool,
    listOptions: PropTypes.array,
    setSeletedValue: PropTypes.func,
    textarea: PropTypes.bool,
};

export default Input;
