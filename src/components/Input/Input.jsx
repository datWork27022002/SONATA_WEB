import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from './Input.module.scss';
import IconCustom from '../IconCustom';
import RadioInput from './RadioInput';
import Dropdown from './DropDown';
import RangeTime from './RangeTime';
import CheckboxInput from './CheckboxInput';

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
            checkboxInput,
            dropDown,
            custom,
            ComponentCustom,
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
                {/* icon left input */}
                {icon && <IconCustom icon={icon} className={cx('mr-2 text-sm')} />}
                {/* label */}
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
                {!radioInput && !dropDown && !rangeTime && !custom && !checkboxInput && (
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
                                textarea && 'h-20',
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
                {(radioInput || dropDown || rangeTime || custom || checkboxInput) && (
                    <div className={cx('flex flex-1 items-center')} style={{ width: widthInput }}>
                        {radioInput && (
                            <RadioInput
                                seletedRadio={seletedValue}
                                setSeletedRadio={setSeletedValue}
                                listOptions={listOptions}
                                className={cx('flex-1')}
                            />
                        )}
                        {checkboxInput && (
                            <CheckboxInput
                                seletedValue={seletedValue}
                                setSeletedValue={setSeletedValue}
                                listOptions={listOptions}
                                className={cx('flex-1')}
                            />
                        )}
                        {dropDown && (
                            <Dropdown
                                listOptions={listOptions}
                                seletedValue={seletedValue}
                                setSeletedValue={setSeletedValue}
                                className={cx('flex-1')}
                            />
                        )}
                        {rangeTime && <RangeTime seletedValue={seletedValue} setSeletedValue={setSeletedValue} />}

                        {custom && <ComponentCustom />}
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
    radioInput: PropTypes.bool,
    checkboxInput: PropTypes.bool,
    dropDown: PropTypes.bool,
    rangeTime: PropTypes.bool,
    listOptions: PropTypes.array,
    setSeletedValue: PropTypes.func,
    textarea: PropTypes.bool,
    custom: PropTypes.bool,
    ComponentCustom: PropTypes.func,
};

export default Input;
