import React from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

import { Input, Switch } from '~/components';

const DiscountForm = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Product' });

    return (
        <div className={cx('flex gap-4')}>
            <div className={cx('flex-1')}>
                {/* discount price */}
                <div className={cx('flex flex-1 flex-col gap-3', 'rounded border border-solid border-[#ddd] p-4')}>
                    <h2 className={cx('mb-2 text-sm font-semibold')}>{t('discount')}</h2>
                    <Input
                        name={'discounted_purchase_price'}
                        label={t('discounted_purchase_price')}
                        typeCustom="number"
                    />
                    <Input name={'discounted_purchase_tax'} label={t('discounted_purchase_tax')} typeCustom="number" />
                    <Input
                        name={'discounted_purchase_amount'}
                        label={t('discounted_purchase_amount')}
                        typeCustom="number"
                    />
                    <Input
                        name={'discounted_profit_margin'}
                        label={t('discounted_profit_margin')}
                        typeCustom="number"
                    />
                    <Input
                        name={'discounted_selling_price'}
                        label={t('discounted_selling_price')}
                        typeCustom="number"
                    />
                    <Input name={'discounted_selling_tax'} label={t('discounted_selling_tax')} typeCustom="number" />
                    <Input
                        name={'discounted_selling_amount'}
                        label={t('discounted_selling_amount')}
                        typeCustom="number"
                    />
                </div>
                {/* point */}
                <div className={cx('mt-4 flex flex-1 flex-col gap-3', 'rounded border border-solid border-[#ddd] p-4')}>
                    <h2 className={cx('mb-2 text-sm font-semibold')}>{t('point')}</h2>
                    <Switch label={t('apply')} name={'point_application'} />
                    <Input name={'point_score'} label={t('point_score')} typeCustom="number" />
                </div>
            </div>
            <div className={cx('flex-1')}>
                {/*member*/}
                <div className={cx('flex flex-1 flex-col gap-3', 'rounded border border-solid border-[#ddd] p-4')}>
                    <h2 className={cx('mb-2 text-sm font-semibold')}>{t('member')}</h2>
                    <Switch label={t('apply')} name={'member_price_application'} />
                    <Input name={'member_price'} label={t('member_price')} typeCustom="number" />
                    <Input name={'member_tax'} label={t('member_tax')} typeCustom="number" />
                    <Input name={'member_amount'} label={t('member_amount')} typeCustom="number" />
                </div>
                {/* tiem discount */}
                <div className={cx('mt-4 flex flex-1 flex-col gap-3', 'rounded border border-solid border-[#ddd] p-4')}>
                    <h2 className={cx('mb-2 text-sm font-semibold')}>{t('discount_time')}</h2>
                    <Input name={'discount_start_date'} label={t('discount_start_date')} type="date" />
                    <Input name={'discount_end_date'} label={t('discount_end_date')} type="date" />
                </div>
            </div>
        </div>
    );
};

export default DiscountForm;
