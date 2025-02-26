import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const { listUseOrNotUse } = config.inputOptions;

function TenderMethod() {
    const inputCommonProps = { radioInput: true, listOptions: listUseOrNotUse, labelClassName: cx('w-[150px]') };
    return (
        <TitleLayout title={config.nameMap.itemLevel3.TENDER_METHOD_WHEN_MAKING_REFUND_RECEIPT.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input label="Use Weight Barcode" {...inputCommonProps} />
                        <Input label="Scale Code" labelClassName={'w-[150px]'} />
                        <Input label="Weight Scale Unit" dropDown listOptions={[]} labelClassName={'w-[150px]'} />
                        <Input label="Round off Option" dropDown listOptions={[]} labelClassName={'w-[150px]'} />
                        <div className={cx('mt-4')}>
                            <div className={cx('flex text-center text-[14px] font-semibold')}>
                                <div className={cx('w-[104px]')}>Type</div>
                                <div className={cx('flex-1')}>Digit</div>
                            </div>
                            <div className={cx('h-[1px] w-full bg-primary-color')}></div>
                            <Input label={'Scale Code'} />
                            <Input label={'Item Code'} />
                            <Input label={'Amount'} />
                            <Input label={'Weight'} />
                            <Input label={'Check Digit'} />
                        </div>
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default TenderMethod;
