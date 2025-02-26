import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';
import inputOptions from '~/config/inputOptions';

const cx = classNames;

const { listYesOrNo } = inputOptions;

function EmailServer() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.EMAIL_SERVER.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[300px]')}>
                        <Input label="SMTP Host" />
                        <Input label="SMTP Port" />
                        <Input label="SMTP ID" />
                        <Input label="SMTP Pwd" />
                        <Input label="Enable SSL" radioInput listOptions={listYesOrNo} />
                        <Input label="Select default sender E-mail Account" radioInput listOptions={listYesOrNo} />
                    </div>
                </div>
                <div className={cx('mt-4 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default EmailServer;
