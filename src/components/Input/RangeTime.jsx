import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const cx = classNames.bind();

function RangeTime({ seletedValue, setSeletedValue }) {
    const [ennableInput, setEnnableInput] = useState(false);

    const changeEnnableInput = () => {
        if (ennableInput === true) {
            setSeletedValue(['', '']);
        } else {
            setSeletedValue(['', '']);
        }
        setEnnableInput(!ennableInput);
    };

    const handleChangeStart = (e) => {
        const newValue = [e.target.value, seletedValue[1]];
        setSeletedValue(newValue);
    };

    const handleChangeEnd = (e) => {
        const newValue = [seletedValue[0], e.target.value];
        setSeletedValue(newValue);
    };

    return (
        <div className="relative flex min-w-32 flex-1">
            <div
                className={cx(
                    'mr-6 flex w-8 cursor-pointer items-center justify-center py-1',
                    'border border-solid border-primary-color',
                    ennableInput && 'bg-primary-color',
                )}
                onClick={changeEnnableInput}
            >
                Y
            </div>
            <div className={cx('flex flex-1 items-center justify-between')}>
                <input
                    type="time"
                    className={cx('rounded border border-solid border-slate-400 p-1')}
                    disabled={!ennableInput}
                    value={seletedValue[0]}
                    onChange={(e) => handleChangeStart(e)}
                />
                ~
                <input
                    type="time"
                    className={cx('rounded border border-solid border-slate-400 p-1')}
                    disabled={!ennableInput}
                    value={seletedValue[1]}
                    onChange={(e) => handleChangeEnd(e)}
                />
            </div>
        </div>
    );
}

RangeTime.propTypes = {
    seletedValue: PropTypes.array,
    setSeletedValue: PropTypes.func,
};

export default RangeTime;
