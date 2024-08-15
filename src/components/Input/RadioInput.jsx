import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const RadioInput = ({ seletedRadio, setSeletedRadio, listOptions }) => {
    return (
        <div className={cx('flex h-8 flex-1 cursor-pointer rounded', 'border-[1px] border-solid border-primary-color')}>
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
};

export default RadioInput;
