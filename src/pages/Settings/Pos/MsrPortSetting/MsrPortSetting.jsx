import React, { useState } from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listPrinterPort = [
    'None',
    'Keyboard wedge',
    'Network',
    'Bluetooth',
    'COM1',
    'COM2',
    'COM3',
    'COM4',
    'COM5',
    'COM6',
    'COM7',
    'COM8',
    'COM9',
    'COM10',
    'COM11',
];

function MsrPortSetting() {
    const [indexPort, setIndexPort] = useState(0);

    const changePort = (index) => setIndexPort(index);

    return (
        <TitleLayout title={config.nameMap.itemLevel3.MSR_PORT_SETTING.Visiblename}>
            <form className={cx('inline-block text-[13px]')}>
                <div className={cx('flex flex-wrap md:ml-8')}>
                    <div className={cx('mr-8 w-[150px] rounded border border-solid border-[#ccc] py-2')}>
                        {listPrinterPort.map((value, index) => (
                            <div
                                key={index}
                                className={cx(
                                    'cursor-pointer px-2 py-1',
                                    'hover:bg-primary-color',
                                    indexPort === index && 'bg-primary-color',
                                )}
                                onClick={() => changePort(index)}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                    {/* form */}
                    <div className={cx('flex w-[400px] flex-col')}>
                        <Input label={'IP number'} />
                        <div className={cx('mt-8 flex flex-1 items-end justify-end')}>
                            <Button teal>Save</Button>
                        </div>
                    </div>
                </div>
            </form>
        </TitleLayout>
    );
}

export default MsrPortSetting;
