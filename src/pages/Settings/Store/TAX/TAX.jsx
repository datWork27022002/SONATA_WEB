import React, { useState } from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';
import FormTaxIncluded from './FormTaxIncluded';
import FormTaxExcluded from './FormTaxExcluded';

const cx = classNames;

const listYesOrNo = ['YES', 'NO'];

function TAX() {
    const listTypeForm = ['Tax Included', 'Tax Excluded'];

    const [typeForm, setTypeForm] = useState(listTypeForm[0]);

    const changeTypeForm = (value) => {
        setTypeForm(value);
    };
    return (
        <TitleLayout title={config.nameMap.itemLevel3.TAX.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('w-[500px]')}>
                        <div>
                            <div className={cx('flex')}>
                                {listTypeForm.map((value, index) => (
                                    <Button
                                        key={index}
                                        onClick={() => changeTypeForm(value)}
                                        className={cx(
                                            value === typeForm && '!bg-primary-color !text-text-color-secondnary',
                                        )}
                                    >
                                        {value}
                                    </Button>
                                ))}
                            </div>
                            <FormTaxIncluded typeForm={typeForm} />
                            <FormTaxExcluded typeForm={typeForm} />
                        </div>
                    </div>
                    <div className={cx('w-[400px]')}>
                        <Input
                            label="No Dine-in Tax"
                            labelClassName={cx('w-[150px]')}
                            radioInput
                            listOptions={listYesOrNo}
                        />
                        <label className={cx('text-[13px]')}>No Quickserve Tax</label>
                        <div className={cx('ml-4')}>
                            <Input
                                label="No Eat-in Tax"
                                labelClassName={cx('w-[150px]')}
                                radioInput
                                listOptions={listYesOrNo}
                            />
                            <Input
                                label="No Take-out Tax"
                                labelClassName={cx('w-[150px]')}
                                radioInput
                                listOptions={listYesOrNo}
                            />
                            <Input
                                label="Apply Tax before Discount"
                                labelClassName={cx('w-[150px]')}
                                radioInput
                                listOptions={listYesOrNo}
                            />
                        </div>
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default TAX;
