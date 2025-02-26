import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const { listYesOrNo } = config.inputOptions;

function OneTouchOption() {
    const inputCommonProps = { radioInput: true, listOptions: listYesOrNo, labelClassName: cx('w-[150px]') };
    return (
        <TitleLayout title={config.nameMap.itemLevel3.ONE_TOUCH_OPTION.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input label="Item Discount (M#)" {...inputCommonProps} />
                        <Input label="Price Change (M#)" {...inputCommonProps} />
                        <Input label="Transaction Memo (M#)" {...inputCommonProps} />
                        <Input label="Hold Time (M#)" {...inputCommonProps} />
                        <Input label="Select the Check" {...inputCommonProps} />
                        <Input label="Select Date" {...inputCommonProps} />
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default OneTouchOption;
