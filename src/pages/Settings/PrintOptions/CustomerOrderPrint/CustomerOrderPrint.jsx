import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listYesOrNo = ['YES', 'NO'];
const listOrderMenuOutputMethod = ['Print All', 'Additional Order Syntax', 'Add Order only'];
const listOutputByPriceAndAmount = ['Print All', 'Unit Price No Power', 'No Power'];

function CustomerOrderPrint() {
    const headerFormStyles = cx('rounded bg-blue-500 py-1 text-center text-[14px] font-semibold text-white');
    const wrapperFormStyles = cx(
        'sm:w-[400px] rounded border border-solid border-primary-color p-2 bg-[#f3f5f7]',
        'max-sm:w-full ',
    );
    const inputCommomProps = { radioInput: true, listOptions: listYesOrNo, labelClassName: 'w-[150px]' };
    return (
        <TitleLayout title={config.nameMap.itemLevel3.CUSTOMER_ORDER_PRINT.Visiblename}>
            <form className={cx('inline-block pb-[32px]')}>
                <div className={cx('mb-8 flex justify-start')}>
                    <Button teal>Save</Button>
                </div>
                {/* form */}
                <div className={cx('flex flex-wrap md:gap-8')}>
                    <div className={cx(wrapperFormStyles, '!w-[800px]')}>
                        <div className={headerFormStyles}>.</div>
                        <div className={cx('flex justify-between')}>
                            <div className={cx('w-[380px]')}>
                                <Input label="Print Logo" {...inputCommomProps} />
                                <Input label="Print Sales Items on Customer Copy" {...inputCommomProps} />
                                <Input label="Print in Take Out" {...inputCommomProps} />
                                <Input label="Print in Dine In" {...inputCommomProps} />
                                <Input label="Print for Specialty Store" {...inputCommomProps} />
                                <Input label="Show Sum of Qty in Order Print" {...inputCommomProps} />
                                <Input label="Item Barcode Print" {...inputCommomProps} />
                                <Input label="Packing Reversal Print" {...inputCommomProps} />
                                <Input label="Separate print for discounts" {...inputCommomProps} />
                                <Input label="Print Order History (Customer Order Print)" {...inputCommomProps} />
                            </div>
                            <div className={cx('w-[380px]')}>
                                <Input label="Print configuration for additional toppings" {...inputCommomProps} />
                                <Input label="Whether to output topping items" {...inputCommomProps} />
                                <Input label="Whether to output set items" {...inputCommomProps} />
                                <Input
                                    label="Output option according to material price and amount"
                                    radioInput
                                    listOptions={listOutputByPriceAndAmount}
                                    labelClassName={'w-[150px]'}
                                />
                                <Input label="Print customer orders only once" {...inputCommomProps} />
                                <Input
                                    label="Additional order menu output method"
                                    {...inputCommomProps}
                                    radioInput
                                    listOptions={listOrderMenuOutputMethod}
                                    labelClassName={'w-[120px]'}
                                />
                                <Input label="Print Quantity" />
                                <Input label="Message to Print" textarea />
                            </div>
                        </div>
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>User input output (KIOSK)</div>
                        <Input label="Bottom output phrase" />
                    </div>
                </div>
            </form>
        </TitleLayout>
    );
}

export default CustomerOrderPrint;
