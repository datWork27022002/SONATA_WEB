import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listYesOrNo = ['YES', 'NO'];
const listOptionOutputKitchen = ['Output to kitchen printer', 'Output with receipt', 'Do no print'];

function WindowsKioksOption() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.WINDOWS_KIOSK_OPTIONS.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[650px]')}>
                        <Input
                            label="Whether a single kiosk is used"
                            labelClassName={cx('w-[200px]')}
                            radioInput
                            listOptions={listYesOrNo}
                        />
                        <Input
                            label="Option to output kitchen order when using single kiosk"
                            labelClassName={cx('w-[200px]')}
                            radioInput
                            paddingLabel
                            listOptions={listOptionOutputKitchen}
                        />
                        <Input
                            label="Order screen latency"
                            labelClassName={cx('w-[200px]')}
                            widthInput={'100px'}
                            dropDown
                            listOptions={[]}
                        />
                        <Input
                            label="Receipt order number Start string option"
                            labelClassName={cx('w-[200px]')}
                            widthInput={'100px'}
                            dropDown
                            listOptions={[]}
                        />
                        <Input
                            label="Order Screen Menu Row Count"
                            labelClassName={cx('w-[200px]')}
                            widthInput={'100px'}
                            dropDown
                            listOptions={[]}
                        />
                        <Input
                            label="Order Screen Menu Column Count"
                            labelClassName={cx('w-[200px]')}
                            widthInput={'100px'}
                            dropDown
                            listOptions={[]}
                        />
                        <Input
                            label="Whether a Membership feature is used"
                            labelClassName={cx('w-[200px]')}
                            radioInput
                            listOptions={listYesOrNo}
                        />
                        <Input
                            label="Use from receipt order number 001"
                            labelClassName={cx('w-[200px]')}
                            radioInput
                            listOptions={listYesOrNo}
                        />
                        <Input
                            label="Whether nutritional information is used"
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

export default WindowsKioksOption;
