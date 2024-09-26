import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';
import OrderBottomImage4 from '~/assets/img/KioskImageSettings/OrderBottomImage4.jpg';

const cx = classNames;

const listYesOrNo = ['YES', 'NO'];
const listReceiptPrintOption = ['After Each Tender', 'After Final Tender'];
const listQRCodeIsPrinter = ['Yes', 'No', 'Return Point'];
const listOutputByPriceAndAmount = ['Print All', 'Unit Price No Power', 'No Power'];

function Receipt() {
    const headerFormStyles = cx('rounded bg-blue-500 py-1 text-center text-[14px] font-semibold text-white');
    const wrapperFormStyles = cx(
        'sm:w-[400px] rounded border border-solid border-primary-color p-2 bg-[#f3f5f7]',
        'max-sm:w-full ',
    );
    const inputCommomProps = { radioInput: true, listOptions: listYesOrNo, labelClassName: 'w-[150px]' };
    return (
        <TitleLayout title={config.nameMap.itemLevel3.RECEIPT.Visiblename}>
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
                                <Input label="Receipt Print Option" radioInput listOptions={listReceiptPrintOption} />
                                <Input label="Print Sales Items on Customer Copy" {...inputCommomProps} />
                                <Input label="Print Sales Items on Merchant Copy" {...inputCommomProps} />
                                <Input label="Print Receipt Cash Order" {...inputCommomProps} />
                                <Input label="Signature output" {...inputCommomProps} />
                                <Input label="Print Barcode On Receipt" {...inputCommomProps} />
                                <Input label="Item Barcode Print" {...inputCommomProps} />
                                <Input
                                    label="QR code Whether the receipt is printed"
                                    radioInput
                                    listOptions={listQRCodeIsPrinter}
                                    labelClassName={cx('w-[150px]')}
                                />
                            </div>
                            <div className={cx('w-[380px]')}>
                                <Input label="Discount History Available separately" {...inputCommomProps} />
                                <Input label="Merchant store receipt output" {...inputCommomProps} />
                                <Input label="room order history output" {...inputCommomProps} />
                                <Input
                                    label="Whether to display additional options for the topping menu"
                                    {...inputCommomProps}
                                />
                                <Input label="Print Quantity" />
                                <Input label="Message to Print" textarea />
                                <Input label="Packing history output by item" {...inputCommomProps} />
                                <Input label="Whether the topping item is printed" {...inputCommomProps} />
                                <Input label="Whether to output set items" {...inputCommomProps} />
                            </div>
                        </div>
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>User input output</div>
                        <Input label="Top Output1" textarea />
                        <Input label="Top Output2" textarea />
                        <Input label="Top Output3" textarea />
                        <Input label="Bottom Output1" textarea />
                        <Input label="Bottom Output2" textarea />
                        <Input label="Bottom Output3" textarea />
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>User input output (KIOSK)</div>
                        <Input label="Bottom output phrase" textarea labelClassName={'w-[150px]'} />
                        <div className={cx('h-[2px] w-full bg-primary-color')}></div>
                        <Input label="Enter the changeable period" labelClassName={'w-[150px]'} />
                        <Input label="Receipt output per item" {...inputCommomProps} />
                        <Input label="Output of receipt by quantity" {...inputCommomProps} />
                        <Input
                            label="Output of receipt by quantity"
                            radioInput
                            listOptions={listOutputByPriceAndAmount}
                            labelClassName={'w-[150px]'}
                        />
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Receipt Bottom Printout Image</div>
                        <div className={cx('mb-4')}>
                            <div className={cx('my-2 flex items-center justify-between')}>
                                <div className={cx('flex gap-2')}>
                                    <Button border>Upload</Button>
                                    <Button red>Delete</Button>
                                </div>
                            </div>
                            <img
                                src={OrderBottomImage4}
                                alt=""
                                className={cx('h-[200px] w-[500px] rounded object-fill')}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </TitleLayout>
    );
}

export default Receipt;
