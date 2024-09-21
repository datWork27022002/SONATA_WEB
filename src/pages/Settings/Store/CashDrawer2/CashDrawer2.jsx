import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listYesOrNo = ['YES', 'NO'];
const listCashDrawerOpenOption = ['PW and reason', 'Reason', 'Forced Open'];

function CashDrawer2() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.CASH_DRAWER2.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('w-[500px]')}>
                        <Input
                            label="Auto-open for Card Processing"
                            labelClassName={cx('w-[200px]')}
                            radioInput
                            listOptions={listYesOrNo}
                        />
                        <Input
                            label="Auto-open for Check Processing"
                            labelClassName={cx('w-[200px]')}
                            radioInput
                            listOptions={listYesOrNo}
                        />
                        <Input
                            label="Cash drawer open option"
                            labelClassName={cx('w-[200px]')}
                            radioInput
                            listOptions={listCashDrawerOpenOption}
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

export default CashDrawer2;
