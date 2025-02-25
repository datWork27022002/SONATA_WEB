import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import { Modal, Input } from '~/components';
import { AddStoreSchema } from '~/crema/schema';
import { listStoreType } from '~/crema/constant/listOptionInput';

const ModalUpdateStore = ({ isOpen, setIsOpen, data = undefined }) => {
    const methods = useForm({
        resolver: zodResolver(AddStoreSchema),
    });

    const { t } = useTranslation('translation', { keyPrefix: 'Store' });

    const { handleSubmit, clearErrors, setValue } = methods;

    const onSubmit = async (formData) => {
        console.log('formData', formData);
    };

    const onError = async (err) => {
        console.log('err formData', err);
    };

    useEffect(() => {
        if (isOpen) clearErrors();

        setValue('Store_Code', data?.StoreCode);
        setValue('Store Type', data?.StoreType);
        setValue('Transaction_Type', data?.TransactionType);
        setValue('Store_Name', data?.Name);
        setValue('Representative', data?.Representative);
        setValue('Representative_ID', data?.RepresentativeId);
        setValue('Phone_Number', data?.PhoneNumber);
        setValue('Fax_Number', data?.FaxNumber);
        setValue('Email', data?.Email);
        setValue('Homepage', data?.Homepage);
        setValue('Total_Area', data?.TotalArea);
        setValue('Store_Area', data?.StoreArea);
        setValue('Parking_Space', data?.ParkingSpaces);
        setValue('Employee_Count', data?.EmployeeCount);
        setValue('Bank_Name', data?.BankName);
        setValue('Account_Number', data?.AccountNumber);
        setValue('Account_Holder', data?.AccountHolder);
        setValue('Transaction_Start_Date', data?.TransactionStartDate);
        setValue('Transaction_End_Date', data?.TransactionEndDate);
        setValue('Business_Number_1', data?.BusinessNumber1);
        setValue('Business_Number_2', data?.BusinessNumber2);
        setValue('Business_Number_3', data?.BusinessNumber3);
        setValue('Postal_Code', data?.PostalCode);
        setValue('Address', data?.Address);
        setValue('Detailed_Address', data?.DetailedAddress);
        setValue('Business_Type', data?.BusinessType);
        setValue('Business_Category', data?.BusinessCategory);
        setValue('Display_Order', data?.DisplayOrder);
        setValue('Transaction_Level', data?.TransactionLevel);
        setValue('Brand_ID', data?.BrandId);
        setValue('Brand_Name', data?.BrandName);
        setValue('Viettel_ID', data?.ViettelId);
        setValue('Viettel_Password', data?.ViettelPassword);
        setValue('Template_Code', data?.TemplateCode);
        setValue('Invoice_Series', data?.InvoiceSeries);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    return (
        <FormProvider {...methods}>
            <Modal
                title={data ? t('Edit_Store') : t('Add_Store')}
                visibleModal={isOpen}
                setVisibleModal={setIsOpen}
                onConfirm={handleSubmit(onSubmit, onError)}
                className={cx('w-[1200x]')}
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
                        <Input name={'Transaction_Start_Date'} label={t('Transaction_Start_Date')} />
                        <Input name={'Transaction_End_Date'} label={t('Transaction_End_Date')} />
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
            </Modal>
        </FormProvider>
    );
};

export default ModalUpdateStore;

ModalUpdateStore.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    data: PropTypes.object,
};
