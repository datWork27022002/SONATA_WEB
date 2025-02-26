import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listOption = ['Cancel a document', 'Cancel all items'];

function SetAllCancellationType() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.SET_ALL_CANCELLATION_TYPE.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input
                            label="Set all cancellation type"
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

export default SetAllCancellationType;
