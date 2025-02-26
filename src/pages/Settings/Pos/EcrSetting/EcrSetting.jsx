import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listYesOrNo = ['YES', 'NO'];

function EcrSetting() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.ECR_SETTING.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input label="Card Processor" dropDown listOptions={[]} />
                        <Input label="Terminal" dropDown listOptions={[]} />
                        <Input label="Terminal ID" />
                        <Input label="Timeout" />
                        <Input label="Port" dropDown listOptions={[]} />
                        <Input label="ECR Credit Card shortcut" radioInput listOptions={listYesOrNo} />
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end gap-4')}>
                    <Button red>Port Setting</Button>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default EcrSetting;
