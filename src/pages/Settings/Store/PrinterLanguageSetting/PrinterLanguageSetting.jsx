import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listLanguage = ['VIETNAM', 'ENGLISH', 'KOREAN', 'JAPANESE', 'CHINESE', 'SPANISH', 'THAI', 'APARIC', 'GERMAN'];

function PrinterLanguageSetting() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.PRINTER_LANGUAGE_SETTING.Visiblename}>
            <form className={cx('inline-block h-[500px]')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('w-[300px]')}>
                        <Input label="Language" dropDown listOptions={listLanguage} />
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default PrinterLanguageSetting;
