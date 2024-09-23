import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listOption = ['PW and Reason', 'Reason', 'Forced Open'];

function CashDrawerOpenOption() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.CASH_DRAWER_OPEN_OPTION.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[450px]')}>
                        <Input
                            label="Cash drawer open option"
                            radioInput
                            listOptions={listOption}
                            labelClassName={'w-[150px]'}
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

export default CashDrawerOpenOption;
