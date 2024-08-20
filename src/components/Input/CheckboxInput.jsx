import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const CheckboxInput = ({ seletedValue, setSeletedValue = () => {}, listOptions = [], className }) => {
    const changeValue = (value) => {
        const newValue = [...seletedValue];
        if (newValue.includes(value)) {
            const index = newValue.indexOf(value);
            newValue.splice(index, 1);
        } else {
            newValue.push(value);
        }

        setSeletedValue(newValue);
    };

    return (
        <div
            className={cx('flex h-8 cursor-pointer gap-2', {
                [className]: className,
            })}
        >
            {listOptions.map((value, index) => (
                <span
                    onClick={() => changeValue(value)}
                    className={cx(
                        seletedValue.includes(value) === true && 'bg-primary-color',
                        'flex flex-1 items-center justify-center',
                        'rounded border border-solid border-primary-color',
                    )}
                    key={index}
                >
                    {value}
                </span>
            ))}
        </div>
    );
};

CheckboxInput.propTypes = {
    seletedValue: PropTypes.array,
    setSeletedValue: PropTypes.func,
    listOptions: PropTypes.array,
    className: PropTypes.string,
};

export default CheckboxInput;
