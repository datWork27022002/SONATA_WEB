import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';

import styles from './Input.module.scss';
import IconCustom from '../IconCustom';
import RadioInput from './RadioInput';
import Dropdown from './DropDown';
import RangeTime from './RangeTime';
import CheckboxInput from './CheckboxInput';
import { formatNumberWithDots, formatDecimal } from '~/utils/helpers';

const cx = classNames.bind(styles);

const Input = ({
    labelIcon,
    iconRightInput,
    radioInput,
    checkboxInput,
    dropDown,
    textarea,
    rangeTime,
    paddingLabel,
    boldLabel,
    widthInput,
    labelClassName,
    custom,
    ComponentCustom,
    name,
    placeholder = '',
    typeCustom,
    required,
    label,
    disabled = false,
    className,
    inputClassName,
    listOptions = [],
    type = '',
    top = false,
}) => {
    const {
        register,
        formState: { errors },
        trigger,
        watch,
        setValue,
    } = useFormContext();

    const error = errors[name]?.message;

    const handleValidate = () => {
        trigger(name);
    };

    const handeConvertTypeCustom = () => {
        if (typeCustom === 'number') {
            const newValue = formatNumberWithDots(watch(name));
            setValue(name, newValue);
        } else if (typeCustom === 'decimal') {
            const newValue = formatDecimal(watch(name));
            setValue(name, newValue);
        }
    };

    return (
        <div>
            <div className={cx('flex items-center', { [className]: className })}>
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
                    {!radioInput && !dropDown && !rangeTime && !custom && !checkboxInput && !textarea && (
                        <div className={cx('')}>
                            <input
                                autoComplete={name}
                                id={name}
                                type={type}
                                {...register(name, { onBlur: handleValidate, onChange: handeConvertTypeCustom })}
                                placeholder={placeholder}
                                style={{ width: widthInput }}
                                disabled={disabled}
                                className={cx(
                                    'w-full p-1',
                                    'rounded border-[1px] border-solid border-slate-400',
                                    disabled && 'bg-slate-100',
                                    error && '!border-red-500',
                                    { [inputClassName]: inputClassName },
                                )}
                            />

                            {iconRightInput && (
                                <div
                                    className={cx(
                                        'z-10 ml-[-3px] h-[30px] w-[30px] rounded-r bg-gray-300',
                                        'flex items-center justify-center',
                                        'cursor-pointer hover:bg-primary-color',
                                    )}
                                >
                                    <IconCustom icon={iconRightInput} />
                                </div>
                            )}
                        </div>
                    )}
                    {textarea && (
                        <textarea
                            id={name}
                            {...register(name, { onBlur: handleValidate })}
                            placeholder={placeholder}
                            style={{ width: widthInput }}
                            disabled={disabled}
                            rows={4}
                            className={cx(
                                'w-full p-1',
                                'rounded border-[1px] border-solid border-slate-400',
                                disabled && 'bg-slate-100',
                                error && '!border-red-500',
                                { [inputClassName]: inputClassName },
                            )}
                        ></textarea>
                    )}
                    {(radioInput || dropDown || rangeTime || custom || checkboxInput) && (
                        <div className={cx('flex items-center')} style={{ width: widthInput }}>
                            {radioInput && <RadioInput listOptions={listOptions} />}
                            {checkboxInput && <CheckboxInput listOptions={listOptions} />}
                            {dropDown && (
                                <Dropdown
                                    listOptions={listOptions}
                                    name={name}
                                    className={cx(!widthInput && 'flex-1')}
                                />
                            )}
                            {rangeTime && <RangeTime />}
                            {custom && <ComponentCustom />}
                        </div>
                    )}
                </div>
            </div>
            {error && <div className={cx('pl-[104px] text-[12px] text-red-600')}>{error}</div>}
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
    required: PropTypes.bool,
    radioInput: PropTypes.bool,
    checkboxInput: PropTypes.bool,
    dropDown: PropTypes.bool,
    rangeTime: PropTypes.bool,
    listOptions: PropTypes.array,
    custom: PropTypes.bool,
    ComponentCustom: PropTypes.func,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    typeCustom: PropTypes.string,
    inputClassName: PropTypes.string,
};

export default Input;
