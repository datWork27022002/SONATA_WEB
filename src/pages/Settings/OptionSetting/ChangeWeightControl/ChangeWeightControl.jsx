import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

function ChangeWeightControl() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.CHANGE_WEIGHT_CONTROL.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input label="Reference weight" />
                        <Input label="Reference weight unit" dropDown listOptions={[]} />
                        <div className={cx('h-[2px] w-full bg-primary-color')}></div>
                        <Input label="Unit Price Unit" />
                        <Input label="How to process weight unit price" dropDown listOptions={[]} />
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default ChangeWeightControl;
