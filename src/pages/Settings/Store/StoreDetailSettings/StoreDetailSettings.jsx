import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const listHide = ['YES', 'NO'];
const listTypeEarnPoints = ['Item', 'By billing method'];
const listApplyPointType = ['Apply to Total Amount', 'Apply to before Tax'];

function StoreDetailSettings() {
    const headerFormStyles = cx('rounded bg-blue-500 py-1 text-center text-[14px] font-semibold text-white');
    const wrapperFormStyles = cx(
        'w-[400px] rounded border border-solid border-primary-color p-2 bg-[#f3f5f7]',
        'max-sm:w-full ',
    );
    return (
        <TitleLayout title={config.nameMap.itemLevel3.STORE_DETAIL_SETTING.Visiblename}>
            <form className={cx('inline-block pb-[32px]')}>
                <div className={cx('mb-8 flex justify-start')}>
                    <Button teal>Save</Button>
                </div>
                {/* form */}
                <div className={cx('flex flex-wrap md:gap-8')}>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Business Hours</div>
                        <Input label="POS automatic closing" radioInput listOptions={listHide} />
                        <Input label="Closing Time" type="time" />
                        <div className={cx('flex items-center gap-1')}>
                            <Input label="Breakfast Hours" type="time" />~<Input type="time" />
                        </div>
                        <div className={cx('flex items-center gap-1')}>
                            <Input label="Lunch Hours" type="time" />~<Input type="time" />
                        </div>
                        <div className={cx('flex items-center gap-1')}>
                            <Input label="Dinner Hours" type="time" />~<Input type="time" />
                        </div>
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Business Hours</div>
                        <Input
                            label="How to earn points"
                            dropDown
                            listOptions={listTypeEarnPoints}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input
                            label="Apply Point Type"
                            dropDown
                            listOptions={listApplyPointType}
                            labelClassName={cx('w-[150px]')}
                        />
                        <div className={cx('flex')}>
                            <Input label="Cash Ratio" className={cx('flex-1')} widthInput={'80px'} />
                            <Input label="Card Ratio" className={cx('flex-1')} widthInput={'80px'} />
                        </div>
                        <div className={cx('flex')}>
                            <Input label="KakaoPay Ratio" className={cx('flex-1')} widthInput={'80px'} />
                            <Input label="ZeroPay Ratio" className={cx('flex-1')} widthInput={'80px'} />
                        </div>
                        <div className={cx('flex')}>
                            <Input label="SmartOrder PG Ratio" className={cx('flex-1')} widthInput={'80px'} />
                            <Input label="Payco accumulation rate" className={cx('flex-1')} widthInput={'80px'} />
                        </div>
                        <Input label="CashReceipt Ratio" className={cx('flex-1')} widthInput={'80px'} />
                        <div className={cx('flex')}>
                            <Input label="Membership points" className={cx('flex-1')} widthInput={'80px'} />
                            <Input label="Payment available point" className={cx('flex-1')} widthInput={'80px'} />
                        </div>
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Business Hours</div>
                        <Input
                            label="Use Stamp function"
                            radioInput
                            listOptions={listHide}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input label="Stamp Expire Month" dropDown listOptions={[]} labelClassName={cx('w-[150px]')} />
                        <Input label="Stamp Exchange to Coupon Count" labelClassName={cx('w-[150px]')} />
                        <Input label="Coupon Name" labelClassName={cx('w-[150px]')} />
                        <Input label="Coupon amount" labelClassName={cx('w-[150px]')} />
                        <Input label="Coupon Expire Month" dropDown listOptions={[]} labelClassName={cx('w-[150px]')} />
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Table View</div>
                        <Input
                            label="Disable Clear Table"
                            radioInput
                            listOptions={listHide}
                            labelClassName={cx('w-[150px]')}
                        />
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Discount</div>
                        <Input
                            label="Disable 'Discount Item' button"
                            radioInput
                            listOptions={listHide}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input
                            label="Disable 'Discount Line Item' button"
                            radioInput
                            listOptions={listHide}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input
                            label="Disable 'Discount Order' button"
                            radioInput
                            listOptions={listHide}
                            labelClassName={cx('w-[150px]')}
                        />
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Auto Popup Windows</div>
                        <Input
                            label="Display Change after Tender"
                            radioInput
                            listOptions={listHide}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input
                            label="Input Quantity(Quick Serve)"
                            radioInput
                            listOptions={listHide}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input
                            label="Input Quantity(Take Out)"
                            radioInput
                            listOptions={listHide}
                            labelClassName={cx('w-[150px]')}
                        />
                    </div>
                    <div className={wrapperFormStyles}>
                        <div className={headerFormStyles}>Auto Popup Windows</div>
                        <Input
                            label="Show Service Type Icon"
                            radioInput
                            listOptions={listHide}
                            labelClassName={cx('w-[150px]')}
                        />
                        <Input
                            label="Show Ordered Items Individually"
                            radioInput
                            listOptions={listHide}
                            labelClassName={cx('w-[150px]')}
                        />
                    </div>
                </div>
            </form>
        </TitleLayout>
    );
}

export default StoreDetailSettings;
