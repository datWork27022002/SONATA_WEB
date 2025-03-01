import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { Modal, Loading } from '~/components';
import GeneralForm from './GeneralForm';
import PriceForm from './PriceForm';
import DiscountForm from './DiscountForm';
import { AddProductSchema } from '~/crema/schema';
import { addProductService, editProductService } from '~/services/ProductService';
import useCallApiPrivate from '~/hooks/useCallApiPrivate';
import { notifyError, notifySuccess } from '~/utils/notification';
import { convertToNumbers, formatNumberWithDots, convertToDecimal, formatDecimal } from '~/utils/helpers';

const ModalUpdateProduct = ({ isOpen, setIsOpen, data = undefined, handleGetListProduct }) => {
    const [loading, setLoading] = useState(false);
    const [formIndex, setFormIndex] = useState(0);
    const methods = useForm({
        resolver: zodResolver(AddProductSchema),
    });

    const { t } = useTranslation('translation', { keyPrefix: 'Product' });

    const { handleSubmit, clearErrors, setValue } = methods;

    const callApi = useCallApiPrivate();

    const forms = [
        { id: 0, title: t('general_information') },
        { id: 1, title: t('price_information') },
        { id: 2, title: t('discount_information') },
    ];

    const handleApply = async (formData) => {
        const bodyRequet = {
            barcode: formData?.barcode,
            productName: formData?.product_name,
            shortName: formData?.short_name,
            specification: formData?.specification,
            unit: formData?.unit,
            color: formData?.color,
            transactionType: formData?.transaction_type,
            taxCode: formData?.tax_code,
            inBoxQuantity: convertToNumbers(formData?.in_box_quantity),
            outBoxQuantity: convertToNumbers(formData?.out_box_quantity),
            catonBoxQuantity: convertToNumbers(formData?.caton_box_quantity),
            inBoxCode: formData?.in_box_code,
            outBoxCode: formData?.out_box_code,
            catonBoxCode: formData?.caton_box_code,
            taxType: formData?.tax_type, //chưa xử lý
            purchasePrice: convertToNumbers(formData?.purchase_price),
            purchaseTax: convertToNumbers(formData?.purchase_tax),
            purchaseAmount: convertToNumbers(formData?.purchase_amount),
            profitMargin: convertToDecimal(formData?.profit_margin),
            sellingPrice: convertToNumbers(formData?.selling_price),
            sellingTax: convertToNumbers(formData?.selling_tax),
            sellingAmount: convertToNumbers(formData?.selling_amount),
            consumerPrice: convertToNumbers(formData?.consumer_price),
            wholesalePrice1: convertToNumbers(formData?.wholesale_price_1),
            wholesalePrice2: convertToNumbers(formData?.wholesale_price_2),
            wholesalePrice3: convertToNumbers(formData?.wholesale_price_3),
            wholesalePrice4: convertToNumbers(formData?.wholesale_price_4),
            wholesalePrice5: convertToNumbers(formData?.wholesale_price_5),
            wholesalePrice6: convertToNumbers(formData?.wholesale_price_6),
            wholesalePrice7: convertToNumbers(formData?.wholesale_price_7),
            wholesalePrice8: convertToNumbers(formData?.wholesale_price_8),
            wholesalePrice9: convertToNumbers(formData?.wholesale_price_9),
            wholesalePrice10: convertToNumbers(formData?.wholesale_price_10),
            discountedPurchasePrice: convertToNumbers(formData?.discounted_purchase_price),
            discountedPurchaseTax: convertToNumbers(formData?.discounted_purchase_tax),
            discountedPurchaseAmount: convertToNumbers(formData?.discounted_purchase_amount),
            discountedProfitMargin: convertToNumbers(formData?.discounted_profit_margin),
            discountedSellingPrice: convertToNumbers(formData?.discounted_selling_price),
            discountedSellingTax: convertToNumbers(formData?.discounted_selling_amount),
            discountedSellingAmount: convertToNumbers(formData?.discounted_selling_amount),
            discountStartDate: formData?.discount_start_date,
            discountEndDate: formData?.discount_end_date,
            orderUnit: formData?.order_unit,
            pointApplication: formData?.point_application ? 'true' : 'false',
            pointScore: convertToNumbers(formData?.point_score),
            memberPriceApplication: formData?.member_price_application ? 'true' : 'false',
            memberPrice: convertToNumbers(formData?.member_price),
            memberTax: convertToNumbers(formData?.member_tax),
            memberAmount: convertToNumbers(formData?.member_amount),
            transactionStartDate: formData?.transaction_start_date,
            transactionEndDate: formData?.transaction_end_date,
            inBoxSellingAmount: convertToNumbers(formData?.in_box_selling_amount),
            outBoxSellingAmount: convertToNumbers(formData?.out_box_selling_amount),
            catonBoxSellingAmount: convertToNumbers(formData?.caton_box_selling_amount),
            remarks: formData?.remarks,
            sellingPurchase: false, //chưa xử lý
            emptyBottleCode: '', //chưa xử lý
            productType: formData?.product_type,
        };
        //console.log('bodyRequet', bodyRequet);
        let res;
        if (!data) {
            setLoading(true);
            res = await callApi(addProductService, bodyRequet);
            setLoading(false);
            if (!res) notifyError(t('add_product_failed'));
            else {
                notifySuccess(t('add_product_success'));
                setIsOpen(false);
                await handleGetListProduct();
            }
        } else {
            setLoading(true);
            res = await callApi(editProductService, bodyRequet);
            setLoading(false);
            if (!res) notifyError(t('update_product_failed'));
            else {
                notifySuccess(t('update_product_success'));
                setIsOpen(false);
                await handleGetListProduct();
            }
        }
    };

    const onSubmit = async (formData) => {
        handleApply(formData);
    };

    const onError = async (err) => {
        console.log('err formData', err);
    };

    useEffect(() => {
        if (isOpen) clearErrors();
        if (data) {
            setValue('barcode', data?.barcode);
            setValue('product_name', data?.productName);
            setValue('short_name', data?.shortName);
            setValue('product_type', data?.productType);
            setValue('specification', data?.specification);
            setValue('unit', data?.unit);
            setValue('color', data?.color);
            setValue('order_unit', data?.orderUnit);
            setValue('tax_type', data?.taxType);
            setValue('business_name', data?.businessName?.toString());
            setValue('transaction_start_date', data?.transactionStartDate?.toString());
            setValue('transaction_end_date', data?.transactionEndDate?.toString());
            setValue('remarks', data?.remarks?.toString());
            setValue('purchase_price', formatNumberWithDots(data?.purchasePrice));
            setValue('purchase_tax', formatNumberWithDots(data?.purchaseTax));
            setValue('purchase_amount', formatNumberWithDots(data?.purchaseAmount));
            setValue('profit_margin', formatDecimal(data?.profitMargin));
            setValue('selling_price', formatNumberWithDots(data?.sellingPrice));
            setValue('selling_tax', formatNumberWithDots(data?.sellingTax));
            setValue('selling_amount', formatNumberWithDots(data?.sellingAmount));
            setValue('consumer_price', formatNumberWithDots(data?.consumerPrice));
            setValue('wholesale_price_1', formatNumberWithDots(data?.wholesalePrice1));
            setValue('wholesale_price_2', formatNumberWithDots(data?.wholesalePrice2));
            setValue('wholesale_price_3', formatNumberWithDots(data?.wholesalePrice3));
            setValue('wholesale_price_4', formatNumberWithDots(data?.wholesalePrice4));
            setValue('wholesale_price_5', formatNumberWithDots(data?.wholesalePrice5));
            setValue('wholesale_price_6', formatNumberWithDots(data?.wholesalePrice6));
            setValue('wholesale_price_7', formatNumberWithDots(data?.wholesalePrice7));
            setValue('wholesale_price_8', formatNumberWithDots(data?.wholesalePrice8));
            setValue('wholesale_price_9', formatNumberWithDots(data?.wholesalePrice9));
            setValue('wholesale_price_10', formatNumberWithDots(data?.wholesalePrice10));
            setValue('in_box_quantity', formatNumberWithDots(data?.inBoxQuantity));
            setValue('in_box_selling_amount', formatNumberWithDots(data?.inBoxSellingAmount));
            setValue('in_box_code', data?.inBoxCode);
            setValue('out_box_quantity', formatNumberWithDots(data?.outBoxQuantity));
            setValue('out_box_selling_amount', formatNumberWithDots(data?.outBoxSellingAmount));
            setValue('out_box_code', data?.outBoxCode);
            setValue('caton_box_quantity', formatNumberWithDots(data?.catonBoxQuantity));
            setValue('caton_box_selling_amount', formatNumberWithDots(data?.catonBoxSellingAmount));
            setValue('caton_box_code', data?.catonBoxCode);
            setValue('discounted_purchase_price', formatNumberWithDots(data?.discountedPurchasePrice));
            setValue('discounted_purchase_tax', formatNumberWithDots(data?.discountedPurchaseTax));
            setValue('discounted_purchase_amount', formatNumberWithDots(data?.discountedPurchaseAmount));
            setValue('discounted_profit_margin', formatNumberWithDots(data?.discountedProfitMargin));
            setValue('discounted_selling_price', formatNumberWithDots(data?.discountedSellingPrice));
            setValue('discounted_selling_tax', formatNumberWithDots(data?.discountedSellingTax));
            setValue('discounted_selling_amount', formatNumberWithDots(data?.discountedSellingAmount));
            setValue('point_application', data?.pointApplication === 'true' ? true : false);
            setValue('point_score', formatNumberWithDots(data?.pointScore));
            setValue('member_price_application', data?.memberPriceApplication === 'true' ? true : false);
            setValue('member_price', formatNumberWithDots(data?.memberPrice));
            setValue('member_tax', formatNumberWithDots(data?.memberTax));
            setValue('member_amount', formatNumberWithDots(data?.memberAmount));
            setValue('discount_start_date', data?.discountStartDate);
            setValue('discount_end_date', data?.discountEndDate);
        } else {
            const now = new Date().toISOString().split('T')[0];
            setValue('transaction_start_date', now);
            setValue('transaction_end_date', now);
            setValue('discount_start_date', now);
            setValue('discount_end_date', now);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    return (
        <FormProvider {...methods}>
            <Modal
                title={data ? t('Edit_Product') : t('Add_Product')}
                visibleModal={isOpen}
                setVisibleModal={setIsOpen}
                onConfirm={handleSubmit(onSubmit, onError)}
                className={cx('h-[650px] w-[800px]')}
            >
                <div className={cx('mb-6 flex')}>
                    {forms.map((value, index) => (
                        <div
                            key={index}
                            className={cx(
                                'cursor-pointer rounded-sm bg-[#ddd] px-3 py-2 hover:bg-primary-color',
                                'border border-solid border-primary-color',
                                'transition-all duration-300 ease-in-out',
                                formIndex === value.id && '!bg-primary-color',
                            )}
                            onClick={() => setFormIndex(value.id)}
                        >
                            {value.title}
                        </div>
                    ))}
                </div>
                <div className={cx(formIndex === 0 ? 'block' : 'hidden')}>
                    <GeneralForm />
                </div>
                <div className={cx(formIndex === 1 ? 'block' : 'hidden')}>
                    <PriceForm />
                </div>
                <div className={cx(formIndex === 2 ? 'block' : 'hidden')}>
                    <DiscountForm />
                </div>
                {loading && <Loading />}
            </Modal>
        </FormProvider>
    );
};

export default ModalUpdateProduct;

ModalUpdateProduct.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    data: PropTypes.object,
    handleGetListProduct: PropTypes.func,
};
