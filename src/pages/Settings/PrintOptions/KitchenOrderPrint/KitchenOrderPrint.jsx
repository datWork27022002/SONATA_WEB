import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const { listYesOrNo } = config.inputOptions;
const listToppingMenuOptions = ['Option Quantity Menu Quantity', 'Option Quantity'];

function KitchenOrderPrint() {
    const inputCommonProps = { radioInput: true, listOptions: listYesOrNo, labelClassName: cx('w-[200px]') };
    return (
        <TitleLayout title={config.nameMap.itemLevel3.KITCHEN_ORDER_PRINT.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input label="Print Logo" {...inputCommonProps} />
                        <Input label="Print for Specialty Store" {...inputCommonProps} />
                        <Input label="Packing Reversal Print" {...inputCommonProps} />
                        <Input label="Output of kitchen order by item" {...inputCommonProps} />
                        <Input label="Output the table group name" {...inputCommonProps} />
                        <Input label="Upside down inverted output" {...inputCommonProps} />
                        <Input label="Additional option of topping menu Whether to output" {...inputCommonProps} />
                        <Input label="Whether cancellation is output" {...inputCommonProps} />
                    </div>
                    <div className={cx('sm:w-[400px]')}>
                        <Input
                            label="Table move and collect table information Kitchen order output"
                            {...inputCommonProps}
                        />
                        <Input label="Output when processing the ordered item service" {...inputCommonProps} />
                        <Input label="Output in order of item name" {...inputCommonProps} />
                        <Input label="Table name reverse output (takeout)" {...inputCommonProps} />
                        <Input label="Barcode Output" {...inputCommonProps} />
                        <Input label="Print Quantity" />
                        <Input
                            label="Topping menu options Quantity display options"
                            radioInput
                            listOptions={listToppingMenuOptions}
                            labelClassName={'w-[150px]'}
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

export default KitchenOrderPrint;
