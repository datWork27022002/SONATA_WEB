import React from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

import { Input } from '~/components';

const PriceForm = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Product' });

    return (
        <>
            <div className={cx('flex gap-4')}>
                <div className={cx('flex flex-1 flex-col gap-3', 'rounded border border-solid border-[#ddd] p-4')}>
                    <Input name={'purchase_price'} label={t('purchase_price')} typeCustom="number" />
                    <Input name={'purchase_tax'} label={t('purchase_tax')} typeCustom="number" />
                    <Input name={'purchase_amount'} label={t('purchase_amount')} typeCustom="number" />
                    <Input name={'profit_margin'} label={t('profit_margin')} typeCustom="decimal" />
                    <Input name={'selling_price'} label={t('selling_price')} typeCustom="number" />
                    <Input name={'selling_tax'} label={t('selling_tax')} typeCustom="number" />
                    <Input name={'selling_amount'} label={t('selling_amount')} typeCustom="number" />
                    <Input name={'consumer_price'} label={t('consumer_price')} typeCustom="number" />
                </div>
                <div className={cx('flex flex-1 flex-col gap-3', 'rounded border border-solid border-[#ddd] p-4')}>
                    <Input name={'wholesale_price_1'} label={t('wholesale_price_1')} typeCustom="number" />
                    <Input name={'wholesale_price_2'} label={t('wholesale_price_2')} typeCustom="number" />
                    <Input name={'wholesale_price_3'} label={t('wholesale_price_3')} typeCustom="number" />
                    <Input name={'wholesale_price_4'} label={t('wholesale_price_4')} typeCustom="number" />
                    <Input name={'wholesale_price_5'} label={t('wholesale_price_5')} typeCustom="number" />
                    <Input name={'wholesale_price_6'} label={t('wholesale_price_6')} typeCustom="number" />
                    <Input name={'wholesale_price_7'} label={t('wholesale_price_7')} typeCustom="number" />
                    <Input name={'wholesale_price_8'} label={t('wholesale_price_8')} typeCustom="number" />
                    <Input name={'wholesale_price_9'} label={t('wholesale_price_9')} typeCustom="number" />
                    <Input name={'wholesale_price_10'} label={t('wholesale_price_10')} typeCustom="number" />
                </div>
            </div>
            <div className={cx('mt-4 flex gap-5', 'rounded border border-solid border-[#ddd] p-3')}>
                <div className={cx('flex flex-1 flex-col gap-3')}>
                    <Input name={'in_box_quantity'} label={t('in_box_quantity')} typeCustom="number" />
                    <Input name={'in_box_selling_amount'} label={t('in_box_selling_amount')} typeCustom="number" />
                    <Input name={'in_box_code'} label={t('in_box_code')} />
                </div>
                <div className={cx('flex flex-1 flex-col gap-3')}>
                    <Input name={'out_box_quantity'} label={t('out_box_quantity')} typeCustom="number" />
                    <Input name={'out_box_selling_amount'} label={t('out_box_selling_amount')} typeCustom="number" />
                    <Input name={'out_box_code'} label={t('out_box_code')} />
                </div>
                <div className={cx('flex flex-1 flex-col gap-3')}>
                    <Input name={'caton_box_quantity'} label={t('caton_box_quantity')} typeCustom="number" />
                    <Input
                        name={'caton_box_selling_amount'}
                        label={t('caton_box_selling_amount')}
                        typeCustom="number"
                    />
                    <Input name={'caton_box_code'} label={t('caton_box_code')} />
                </div>
            </div>
        </>
    );
};

export default PriceForm;
