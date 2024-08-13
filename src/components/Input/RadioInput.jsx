import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const cx = classNames.bind(styles);

const RadioInput = ({ seletedRadio, setSeletedRadio }) => {
    return (
        <div className={cx('flex h-8 flex-1 cursor-pointer rounded', 'border-[1px] border-solid border-primary-color')}>
            <span
                onClick={() => {
                    setSeletedRadio(true);
                }}
                className={cx(seletedRadio === true && 'bg-primary-color', 'flex flex-1 items-center justify-center')}
            >
                YES
            </span>
            <span
                onClick={() => {
                    setSeletedRadio(false);
                }}
                className={cx(seletedRadio === false && 'bg-primary-color', 'flex flex-1 items-center justify-center')}
            >
                NO
            </span>
        </div>
    );
};

RadioInput.propTypes = {
    seletedRadio: PropTypes.bool,
    setSeletedRadio: PropTypes.func,
};

export default RadioInput;
