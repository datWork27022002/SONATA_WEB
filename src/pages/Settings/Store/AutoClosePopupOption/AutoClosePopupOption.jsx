import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listYesOrNo = ['YES', 'NO'];
const listTime = ['1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s'];

function AutoClosePopupOption() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.AUTO_CLOSE_POPUP_OPTION.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input
                            label="Automatic Shutdown time"
                            labelClassName={cx('w-[200px]')}
                            dropDown
                            listOptions={listTime}
                        />
                        <Input
                            label="Order Shutdown Options"
                            labelClassName={cx('w-[200px]')}
                            radioInput
                            listOptions={listYesOrNo}
                        />
                        <Input
                            label="Payment Shutdown Options"
                            labelClassName={cx('w-[200px]')}
                            radioInput
                            listOptions={listYesOrNo}
                        />
                        <Input
                            label="Point Shutdown Options"
                            labelClassName={cx('w-[200px]')}
                            radioInput
                            listOptions={listYesOrNo}
                        />
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default AutoClosePopupOption;
