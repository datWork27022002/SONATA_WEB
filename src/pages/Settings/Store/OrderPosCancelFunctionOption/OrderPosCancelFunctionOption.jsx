import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listYesOrNo = ['YES', 'NO'];

function OrderPosCancelFunctionOption() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.ORDER_POS_CANCEL_FUNCTION_OPTION.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[500px]')}>
                        <Input
                            label="Use Order POS Cancel Function"
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

export default OrderPosCancelFunctionOption;
