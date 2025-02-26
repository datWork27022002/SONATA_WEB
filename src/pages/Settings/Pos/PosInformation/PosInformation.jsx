import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const { listLanguage, listTableGroup } = config.inputOptions;

function PosInformation() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.POS_INFORMATION.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input label="POS Name" required />
                        <Input label="Table Group" dropDown listOptions={listTableGroup} />
                        <Input label="Default Language" dropDown listOptions={listLanguage} />
                        <Input label="Device ID" disabled />
                        <Input label="Product Key" disabled />
                        <Input label="License Key" disabled />
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default PosInformation;
