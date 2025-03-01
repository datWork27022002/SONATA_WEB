import React from 'react';
import classNames from 'classnames';

import TitleLayout from '~/components/TitleLayout';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames;

const { listUseOrNotUse } = config.inputOptions;

function ShowAdditionalDataInEodPrintout() {
    const inputCommonProps = { radioInput: true, listOptions: listUseOrNotUse, labelClassName: cx('w-[200px]') };
    return (
        <TitleLayout title={config.nameMap.itemLevel3.SHOW_ADDITIONAL_DATA_IN_EOD_PRINTOUT.Visiblename}>
            <form className={cx('inline-block')}>
                {/* form */}
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[400px]')}>
                        <Input label="Total Sales Summary" {...inputCommonProps} />
                        <Input label="Revenue breakdown by payment method" {...inputCommonProps} />
                        <Input label="Actual Amount in Register" {...inputCommonProps} />
                        <Input label="Estimated Balance" {...inputCommonProps} />
                        <Input label="Credit Card Settlement" {...inputCommonProps} />
                        <Input label="Detailed Sales By Card Company" {...inputCommonProps} />
                        <Input label="Account, Deposit Sales Settlement" {...inputCommonProps} />
                    </div>
                    <div className={cx('sm:w-[400px]')}>
                        <Input label="Mark delivery sales history" {...inputCommonProps} />
                        <Input label="Show quantity by item" {...inputCommonProps} />
                        <Input label="Order Canceled by Item Quantities History" {...inputCommonProps} />
                        <Input label="Cancelled sales by item" {...inputCommonProps} />
                        <Input label="Sales breakdown by gift certificate type" {...inputCommonProps} />
                        <Input label="Number of Customers Customer Unit Price Sales Breakdown" {...inputCommonProps} />
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </form>
        </TitleLayout>
    );
}

export default ShowAdditionalDataInEodPrintout;
