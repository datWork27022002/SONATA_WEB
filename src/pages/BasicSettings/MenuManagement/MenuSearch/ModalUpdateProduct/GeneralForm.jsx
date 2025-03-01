import React, { useEffect, useMemo } from 'react';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import { useFormContext } from 'react-hook-form';

import { Input } from '~/components';
import { listProductType, listTransactionType, listOderingUnit } from '~/crema/constant/listOptionInput';
import { useDataContext } from '~/context/DataContext';

const GeneralForm = () => {
    const { t } = useTranslation('translation', { keyPrefix: 'Product' });

    const { watch, setValue } = useFormContext();

    const { listTax } = useDataContext();

    const listTaxOption = useMemo(() => listTax.map((value) => ({ name: value.name, code: value.taxCode })), [listTax]);
    const listProductTypeOption = useMemo(() => listProductType(), []);
    const listTransactionTypeOption = useMemo(() => listTransactionType(), []);
    const listOderingUnitOption = useMemo(() => listOderingUnit(), []);

    useEffect(() => {
        const arr = listTax?.filter((value) => value?.taxCode === watch('tax_code'));
        if (arr.length > 0) {
            setValue('tax_type', arr[0]?.rate);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch('tax_code')]);
    return (
        <div className={cx('flex')}>
            <div className={cx('flex flex-1 flex-col gap-3 pr-6')}>
                <Input name={'barcode'} label={t('barcode')} />
                <Input name={'product_name'} label={t('product_name')} />
                <Input name={'short_name'} label={t('short_name')} />
                <Input name={'product_type'} label={t('product_type')} dropDown listOptions={listProductTypeOption} />
                <Input
                    name={'transaction_type'}
                    label={t('transaction_type')}
                    dropDown
                    listOptions={listTransactionTypeOption}
                />
                <Input name={'specification'} label={t('specification')} />
                <Input name={'unit'} label={t('unit')} />
                <Input name={'color'} label={t('color')} />
            </div>
            <div className={cx('flex flex-1 flex-col gap-3 pl-6', 'border-l border-solid border-l-[#ddd]')}>
                <Input name={'order_unit'} label={t('order_unit')} dropDown listOptions={listOderingUnitOption} />
                <Input name={'tax_code'} label={t('tax_type')} dropDown listOptions={listTaxOption} />
                <Input name={'transaction_start_date'} label={t('transaction_start_date')} type="date" />
                <Input name={'transaction_end_date'} label={t('transaction_end_date')} type="date" />
                <Input name={'remarks'} label={t('remarks')} textarea />
            </div>
        </div>
    );
};

export default GeneralForm;
