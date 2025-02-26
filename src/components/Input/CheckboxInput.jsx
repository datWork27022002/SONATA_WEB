import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const CheckboxInput = ({ seletedValue, setSeletedValue = () => {}, listOptions = [], className }) => {
    const [valueInput, setValueInput] = useState(seletedValue || []);
    const changeValue = (value) => {
        const newValue = [...valueInput];
        if (newValue.includes(value)) {
            const index = newValue.indexOf(value);
            newValue.splice(index, 1);
        } else {
            newValue.push(value);
        }
        setValueInput(newValue);
        setSeletedValue(newValue);
    };

    return (
        <div
            className={cx('flex cursor-pointer flex-wrap gap-2', {
                [className]: className,
            })}
        >
            {listOptions.map((value, index) => (
                <span
                    onClick={() => changeValue(value)}
                    className={cx(
                        valueInput.includes(value) === true && 'bg-primary-color',
                        'flex flex-none items-center justify-center px-2 py-1',
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
