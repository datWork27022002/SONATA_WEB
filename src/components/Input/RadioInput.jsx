import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const RadioInput = ({ seletedRadio, setSeletedRadio, listOptions, className }) => {
    return (
        <div
            className={cx('flex h-8 cursor-pointer rounded', 'border-[1px] border-solid border-primary-color', {
                [className]: className,
            })}
        >
            {listOptions.map((value, index) => (
                <span
                    onClick={() => {
                        setSeletedRadio(value);
                    }}
                    className={cx(
                        seletedRadio === value && 'bg-primary-color',
                        'flex flex-1 items-center justify-center',
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
