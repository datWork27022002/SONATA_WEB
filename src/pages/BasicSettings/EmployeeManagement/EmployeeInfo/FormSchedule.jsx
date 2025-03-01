import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

function FormSchedule({ className }) {
    const [rangeTimeSunday, setRangeTimeSunday] = useState(['', '']);
    return (
        <div
            className={cx('mt-2 flex flex-wrap overflow-hidden transition-all duration-300', {
                [className]: className,
            })}
        >
            <div className={cx('flex-1 pr-4')}>
                <Input label="Sunday" rangeTime seletedValue={rangeTimeSunday} setSeletedValue={setRangeTimeSunday} />
                <Input label="Monday" rangeTime seletedValue={rangeTimeSunday} setSeletedValue={setRangeTimeSunday} />
                <Input label="Tuesday" rangeTime seletedValue={rangeTimeSunday} setSeletedValue={setRangeTimeSunday} />
                <Input
                    label="Wednesday"
                    rangeTime
                    seletedValue={rangeTimeSunday}
                    setSeletedValue={setRangeTimeSunday}
                />
                <Input label="Thursday" rangeTime seletedValue={rangeTimeSunday} setSeletedValue={setRangeTimeSunday} />
                <Input label="Friday" rangeTime seletedValue={rangeTimeSunday} setSeletedValue={setRangeTimeSunday} />
                <Input label="Saturday" rangeTime seletedValue={rangeTimeSunday} setSeletedValue={setRangeTimeSunday} />

                <div className={cx('mt-4 flex')}>
                    <Button orange className={cx('mr-4')}>
                        New
                    </Button>
                    <Button teal>Save</Button>
                </div>
            </div>
            <div className={cx('flex-1')}></div>
        </div>
    );
}

export default FormSchedule;
