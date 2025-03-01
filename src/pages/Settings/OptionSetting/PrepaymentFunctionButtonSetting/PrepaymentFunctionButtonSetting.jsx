import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listOption = ['Take out', 'Eat in', 'Maintenace of state'];

function PrepaymentFunctionButtonSetting() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.PREPAYMENT_FUNCTION_BUTTON_SETTING.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[500px]')}>
                        <Input
                            label="Prepayment function button Setting"
                            radioInput
                            labelClassName={'w-[150px] '}
                            listOptions={listOption}
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

export default PrepaymentFunctionButtonSetting;
