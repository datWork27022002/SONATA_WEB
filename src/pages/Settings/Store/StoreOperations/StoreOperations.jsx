import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listLanguage = ['VIETNAM', 'ENGLISH', 'KOREAN', 'JAPANESE', 'CHINESE', 'SPANISH', 'THAI', 'APARIC', 'GERMAN'];

function StoreOperations() {
    return (
        <TitleLayout title={config.nameMap.itemLevel3.STORE_OPERATIONS.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('w-[300px]')}>
                        <Input label="Business Name" required />
                        <Input label="Account Number" />
                        <Input label="First Name" />
                        <Input label="Middle Name" />
                        <Input label="Last Name" />
                        <Input label="Address" required />
                        <Input label="City" required />
                        <Input label="State" required />
                        <Input label="Zip code" required />
                    </div>
                    <div className={cx('w-[300px]')}>
                        <Input label="Default Language" dropDown listOptions={listLanguage} />
                        <Input label="Phone Number" required />
                        <Input label="Secondary Number" />
                        <Input label="Fax" />
                        <Input label="Website" />
                        <Input label="E-mail" required />
                        <Input label="Logo" required type="file" />
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default StoreOperations;
