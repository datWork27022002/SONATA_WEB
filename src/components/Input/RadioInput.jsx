import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const RadioInput = ({ seletedRadio = '', setSeletedRadio = () => {}, listOptions = [], className }) => {
    const [valueInput, setValueInput] = useState(seletedRadio || listOptions[0]);

    const changeValue = (value) => {
        setValueInput(value);
        setSeletedRadio(value);
    };
    return (
        <div
            className={cx('flex min-w-[128px] cursor-pointer rounded', 'border border-solid border-primary-color', {
                [className]: className,
            })}
        >
            {listOptions.map((value, index) => (
                <span
                    onClick={() => {
                        changeValue(value);
                    }}
                    className={cx(
                        valueInput === value && 'bg-primary-color',
                        'flex flex-1 items-center justify-center py-1 text-center',
                    )}
                    key={index}
                >
                    {value}
                </span>
            ))}
        </div>
    );
};

RadioInput.propTypes = {
    seletedRadio: PropTypes.string,
    setSeletedRadio: PropTypes.func,
    listOptions: PropTypes.array,
    className: PropTypes.string,
};

export default RadioInput;
