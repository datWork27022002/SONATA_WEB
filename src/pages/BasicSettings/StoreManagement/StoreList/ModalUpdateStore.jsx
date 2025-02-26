import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { Modal, Input, Loading } from '~/components';
import { AddStoreSchema } from '~/crema/schema';
import { listStoreType } from '~/crema/constant/listOptionInput';
import { addStoreService, editStoreService } from '~/services/StoreService';
import useCallApiPrivate from '~/hooks/useCallApiPrivate';
import { notifyError, notifySuccess } from '~/utils/notification';

const ModalUpdateStore = ({ isOpen, setIsOpen, data = undefined, handleGetListStore }) => {
    const [loading, setLoading] = useState(false);
    const methods = useForm({
        resolver: zodResolver(AddStoreSchema),
    });

    const { t } = useTranslation('translation', { keyPrefix: 'Store' });

    const { handleSubmit, clearErrors, setValue } = methods;

    const callApi = useCallApiPrivate();

    const handleApply = async (formData) => {
        const bodyRequet = {
            storeCode: formData?.Store_Code,
            storeType: formData?.Store_Type,
            transactionType: formData?.Transaction_Type,
            name: formData?.Store_Name,
            representative: formData?.Representative,
            representativeId: formData?.Representative_ID,
            phoneNumber: formData?.Phone_Number,
            faxNumber: formData?.Fax_Number,
            email: formData?.Email,
            homepage: formData?.Homepage,
            totalArea: formData?.Total_Area,
            storeArea: formData?.Store_Area,
            parkingSpaces: formData?.Parking_Space,
            employeeCount: formData?.Employee_Count,
            bankName: formData?.Bank_Name,
            accountNumber: formData?.Account_Number,
            accountHolder: formData?.Account_Holder,
            transactionStartDate: formData?.Transaction_Start_Date ?? new Date().toISOString(),
            transactionEndDate: formData?.Transaction_End_Date ?? new Date().toISOString(),
            businessNumber1: formData?.Business_Number_1,
            businessNumber2: formData?.Business_Number_2,
            businessNumber3: formData?.Business_Number_3,
            postalCode: formData?.Postal_Code,
            address: formData?.Address,
            detailedAddress: formData?.Detailed_Address,
            businessType: formData?.Business_Type,
            businessCategory: formData?.Business_Category,
            displayOrder: formData?.Display_Order,
            transactionLevel: formData?.Transaction_Level,
            brandId: formData?.Brand_ID,
            brandName: formData?.Brand_Name,
            viettelId: formData?.Viettel_ID,
            viettelPassword: formData?.Viettel_Password,
            templateCode: formData?.Template_Code,
            invoiceSeries: formData?.Invoice_Series,
        };
        console.log('bodyRequet', bodyRequet);
        let res;
        if (!data) {
            setLoading(true);
            res = await callApi(addStoreService, bodyRequet);
            setLoading(false);
            if (!res) notifyError(t('add_store_failed'));
            else {
                notifySuccess(t('add_store_success'));
                setIsOpen(false);
                await handleGetListStore();
            }
        } else {
            setLoading(true);
            res = await callApi(editStoreService, bodyRequet);
            setLoading(false);
            if (!res) notifyError(t('update_store_failed'));
            else {
                notifySuccess(t('update_store_success'));
                setIsOpen(false);
                await handleGetListStore();
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
            setValue('Store_Code', data?.storeCode);
            setValue('Store_Type', data?.storeType);
            setValue('Transaction_Type', data?.transactionType);
            setValue('Store_Name', data?.name);
            setValue('Representative', data?.representative);
            setValue('Representative_ID', data?.representativeId);
            setValue('Phone_Number', data?.phoneNumber);
            setValue('Fax_Number', data?.faxNumber);
            setValue('Email', data?.email);
            setValue('Homepage', data?.homepage);
            setValue('Total_Area', data?.totalArea.toString());
            setValue('Store_Area', data?.storeArea?.toString());
            setValue('Parking_Space', data?.parkingSpaces.toString());
            setValue('Employee_Count', data?.employeeCount.toString());
            setValue('Bank_Name', data?.bankName);
            setValue('Account_Number', data?.accountNumber);
            setValue('Account_Holder', data?.accountHolder);
            setValue('Transaction_Start_Date', data?.transactionStartDate);
            setValue('Transaction_End_Date', data?.transactionEndDate);
            setValue('Business_Number_1', data?.businessNumber1);
            setValue('Business_Number_2', data?.businessNumber2);
            setValue('Business_Number_3', data?.businessNumber3);
            setValue('Postal_Code', data?.postalCode);
            setValue('Address', data?.address);
            setValue('Detailed_Address', data?.detailedAddress);
            setValue('Business_Type', data?.businessType);
            setValue('Business_Category', data?.businessCategory);
            setValue('Display_Order', data?.displayOrder.toString());
            setValue('Transaction_Level', data?.transactionLevel.toString());
            setValue('Brand_ID', data?.brandId);
            setValue('Brand_Name', data?.brandName);
            setValue('Viettel_ID', data?.viettelId);
            setValue('Viettel_Password', data?.viettelPassword);
            setValue('Template_Code', data?.templateCode);
            setValue('Invoice_Series', data?.invoiceSeries);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    return (
        <FormProvider {...methods}>
            <Modal
                title={data ? t('Edit_Store') : t('Add_Store')}
                visibleModal={isOpen}
                setVisibleModal={setIsOpen}
                onConfirm={handleSubmit(onSubmit, onError)}
                className={cx('w-[1200px]')}
            >
                <div className={cx('flex')}>
                    <div className={cx('flex flex-1 flex-col gap-3 pr-6')}>
                        <Input name={'Store_Code'} label={t('Store_Code')} />
                        <Input name={'Store_Type'} label={t('Store_Type')} />
                        <Input
                            name={'Transaction_Type'}
                            label={t('Transaction_Type')}
                            dropDown
                            listOptions={listStoreType()}
                        />
                        <Input name={'Store_Name'} label={t('Store_Name')} />
                        <Input name={'Representative'} label={t('Representative')} />
                        <Input name={'Representative_ID'} label={t('Representative_ID')} />
                        <Input name={'Phone_Number'} label={t('Phone_Number')} />
                        <Input name={'Fax_Number'} label={t('Fax_Number')} />
                        <Input name={'Email'} label={t('Email')} />
                        <Input name={'Homepage'} label={t('Homepage')} />
                        <Input name={'Total_Area'} label={t('Total_Area')} />
                        <Input name={'Store_Area'} label={t('Store_Area')} />
                    </div>
                    <div
                        className={cx(
                            'flex flex-1 flex-col gap-3 px-6',
                            'border-l border-r border-solid border-l-[#ddd] border-r-[#ddd]',
                        )}
                    >
                        <Input name={'Parking_Space'} label={t('Parking_Space')} />
                        <Input name={'Employee_Count'} label={t('Employee_Count')} />
                        <Input name={'Bank_Name'} label={t('Bank_Name')} />
                        <Input name={'Account_Number'} label={t('Account_Number')} />
                        <Input name={'Account_Holder'} label={t('Account_Holder')} />
                        <Input name={'Transaction_Start_Date'} label={t('Transaction_Start_Date')} type="date" />
                        <Input name={'Transaction_End_Date'} label={t('Transaction_End_Date')} type="date" />
                        <Input name={'Business_Number_1'} label={t('Business_Number_1')} />
                        <Input name={'Business_Number_2'} label={t('Business_Number_2')} />
                        <Input name={'Business_Number_3'} label={t('Business_Number_3')} />
                        <Input name={'Postal_Code'} label={t('Postal_Code')} />
                    </div>
                    <div className={cx('flex flex-1 flex-col gap-3 pl-6')}>
                        <Input name={'Address'} label={t('Address')} />
                        <Input name={'Detailed_Address'} label={t('Detailed_Address')} />
                        <Input name={'Business_Type'} label={t('Business_Type')} />
                        <Input name={'Business_Category'} label={t('Business_Category')} />
                        <Input name={'Display_Order'} label={t('Display_Order')} />
                        <Input name={'Transaction_Level'} label={t('Transaction_Level')} />
                        <Input name={'Brand_ID'} label={t('Brand_ID')} />
                        <Input name={'Brand_Name'} label={t('Brand_Name')} />
                        <Input name={'Viettel_ID'} label={t('Viettel_ID')} />
                        <Input name={'Viettel_Password'} label={t('Viettel_Password')} />
                        <Input name={'Template_Code'} label={t('Template_Code')} />
                        <Input name={'Invoice_Series'} label={t('Invoice_Series')} />
                    </div>
                </div>
                {loading && <Loading />}
            </Modal>
        </FormProvider>
    );
};

export default ModalUpdateStore;

ModalUpdateStore.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    data: PropTypes.object,
    handleGetListStore: PropTypes.func,
};
