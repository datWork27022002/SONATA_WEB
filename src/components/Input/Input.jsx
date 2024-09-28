import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';
import IconCustom from '../IconCustom';
import RadioInput from './RadioInput';
import Dropdown from './DropDown';
import RangeTime from './RangeTime';
import CheckboxInput from './CheckboxInput';

const cx = classNames.bind(styles);

const Input = ({
    label,
    labelIcon,
    errolMesseage,
    icon,
    iconRightInput,
    textarea,
    radioInput,
    checkboxInput,
    dropDown,
    rangeTime,
    borderBottom,
    paddingLabel,
    boldLabel,
    widthInput,
    type = 'text',
    className,
    labelClassName,
    disabled,
    required,
    custom,
    ComponentCustom,
    listOptions,
    seletedValue,
    setSeletedValue = () => {},
    ...passProps
}) => {
    const Props = { ...passProps };

    const Comp = textarea ? 'textarea' : 'input';

    return (
        <div
            className={cx('mt-2 flex items-center text-[13px]', errolMesseage && 'mb-[20px]', {
                [className]: className,
            })}
        >
            {/* icon left input */}
            {icon && <IconCustom icon={icon} className={cx('mr-2 text-sm')} />}
            {/* label */}
            {(label || labelIcon) && (
                <label
                    className={cx(
                        paddingLabel ? 'pr-2' : 'mr-2 w-24',
                        required && 'font-semibold text-red-600',
                        boldLabel && 'font-semibold',
                        { [labelClassName]: labelClassName },
                    )}
                >
                    {label ? label : <IconCustom icon={labelIcon} />}
                </label>
            )}
            <div className={cx('relative', !widthInput && 'flex-1')}>
                {!radioInput && !dropDown && !rangeTime && !custom && !checkboxInput && (
                    <div className={cx('flex flex-1 items-center')}>
                        <Comp
                            type={type}
                            style={{ width: widthInput }}
                            className={cx(
                                'p-1',
                                !widthInput && 'flex-1',
                                borderBottom
                                    ? 'border-b-2 border-l-0 border-r-0 border-t-0 border-solid border-b-[#a8a8a8]'
                                    : 'rounded border-[1px] border-solid border-slate-400',
                                disabled && 'bg-slate-100',
                                textarea && 'h-16',
                            )}
                            disabled={disabled}
                            value={seletedValue}
                            onChange={(e) => setSeletedValue(e.target.value)}
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
                    <div className={cx('flex items-center', !widthInput && 'flex-1')} style={{ width: widthInput }}>
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
                {errolMesseage ? (
                    <div className={cx('absolute bottom-[-20px] text-[12px] text-red-600')}>{errolMesseage}</div>
                ) : (
                    <div className={cx('h-6px]')}></div>
                )}
            </div>
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    labelIcon: PropTypes.func,
    type: PropTypes.string,
    errolMesseage: PropTypes.string,
    className: PropTypes.string,
    labelClassName: PropTypes.string,
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
