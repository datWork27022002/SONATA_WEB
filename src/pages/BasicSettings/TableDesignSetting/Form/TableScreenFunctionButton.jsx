import classNames from 'classnames/bind';
import { useState } from 'react';

import WrapperForm from './WrapperForm';
import RadioInput from '~/components/Input/RadioInput';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listYesNo = ['YES', 'NO'];

function TableScreenFunctionButton() {
    const [use, setUse] = useState(listYesNo[0]);

    const classes = cx('w-[150px]  flex justify-center items-center gap-x-1');
    return (
        <WrapperForm title="Table screen function button">
            <div className={cx('flex gap-2 bg-gray-100 px-2 py-1 text-center')}>
                <div className={classes}></div>
                <div className={classes}>Use</div>
                <div className={classes}></div>
            </div>
            <div className={cx('p-2')}>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes}>Whether to output images</div>
                    <div className={classes}>
                        <RadioInput listOptions={listYesNo} seletedRadio={use} setSeletedRadio={setUse} />
                    </div>
                </div>
                <div className={cx('flex items-center gap-2 py-1')}>
                    <div className={classes}>Set font size</div>
                    <div className={classes}>
                        <input type="number" className={cx('w-20 p-1')} />
                    </div>
                </div>
            </div>
        </WrapperForm>
    );
}

export default TableScreenFunctionButton;
