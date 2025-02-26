import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listOption = ['Bill Discount', 'Discount Order'];

function DiscountOrderOption() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.DISCOUNT_ORDER_OPTION.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input
                            label="Discount Order Type Setting"
                            radioInput
                            labelClassName={cx('w-[200px]')}
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

export default DiscountOrderOption;
