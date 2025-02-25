import React, { useMemo, useState } from 'react';
import classNames from 'classnames/bind';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Table, Pagination } from 'antd';
import { utils as XLSXUtils, writeFile } from 'xlsx';

import { TitleLayout, Input, Button, OperationCell } from '~/components';
import ModalUpdateStore from './ModalUpdateStore';
import ModalDeleteStore from './ModalDeleteStore';
import config from '~/config';
import { storeListFake } from '~/crema/constant/datafake';
import { listStoreType } from '~/crema/constant/listOptionInput';

const cx = classNames.bind();

function StoreList() {
    const [dataModel, setDataModel] = useState({
        data: [...storeListFake],
        pageIndex: 1,
        pageSize: 15,
        totalRecord: 0,
    });
    const [selectedColumn, setSelectedColumn] = useState();
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [isModalDelete, setIsModalDelete] = useState(false);

    const methods = useForm();

    const { t } = useTranslation('translation', { keyPrefix: 'Store' });

    const { handleSubmit } = methods;

    const columns = [
        { title: t('Store_Code'), dataIndex: 'StoreCode', width: '100px', ellipsis: true },
        { title: t('Store_Type'), dataIndex: 'StoreType', width: '120px' },
        { title: t('Transaction_Type'), dataIndex: 'TransactionType', width: '120px', ellipsis: true },
        { title: t('Store_Name'), dataIndex: 'Name', width: '250px' },
        { title: t('Representative'), dataIndex: 'Representative', width: '200px' },
        { title: t('Representative_ID'), dataIndex: 'RepresentativeId', width: '100px', ellipsis: true },
        { title: t('Phone_Number'), dataIndex: 'PhoneNumber', width: '120px' },
        { title: t('Fax_Number'), dataIndex: 'FaxNumber', width: '120px' },
        { title: t('Email'), dataIndex: 'Email', width: '200px' },
        { title: t('Homepage'), dataIndex: 'Homepage', width: '200px' },
        { title: t('Total_Area'), dataIndex: 'TotalArea', width: '100px', ellipsis: true },
        { title: t('Store_Area'), dataIndex: 'StoreArea', width: '100px', ellipsis: true },
        { title: t('Parking_Space'), dataIndex: 'ParkingSpaces', width: '100px', ellipsis: true },
        { title: t('Employee_Count'), dataIndex: 'EmployeeCount', width: '100px', ellipsis: true },
        { title: t('Bank_Name'), dataIndex: 'BankName', width: '120px' },
        { title: t('Account_Number'), dataIndex: 'AccountNumber', width: '150px' },
        { title: t('Account_Holder'), dataIndex: 'AccountHolder', width: '150px' },
        { title: t('Transaction_Start_Date'), dataIndex: 'TransactionStartDate', width: '120px', ellipsis: true },
        { title: t('Transaction_End_Date'), dataIndex: 'TransactionEndDate', width: '120px', ellipsis: true },
        { title: t('Business_Number_1'), dataIndex: 'BusinessNumber1', width: '150px', ellipsis: true },
        { title: t('Business_Number_2'), dataIndex: 'BusinessNumber2', width: '150px', ellipsis: true },
        { title: t('Business_Number_3'), dataIndex: 'BusinessNumber3', width: '150px', ellipsis: true },
        { title: t('Postal_Code'), dataIndex: 'PostalCode', width: '100px', ellipsis: true },
        { title: t('Address'), dataIndex: 'Address', width: '200px' },
        { title: t('Detailed_Address'), dataIndex: 'DetailedAddress', width: '150px' },
        { title: t('Business_Type'), dataIndex: 'BusinessType', width: '150px', ellipsis: true },
        { title: t('Business_Category'), dataIndex: 'BusinessCategory', width: '120px', ellipsis: true },
        { title: t('Display_Order'), dataIndex: 'DisplayOrder', width: '100px', ellipsis: true },
        { title: t('Transaction_Level'), dataIndex: 'TransactionLevel', width: '100px', ellipsis: true },
        { title: t('Brand_ID'), dataIndex: 'BrandId', width: '100px', ellipsis: true },
        { title: t('Brand_Name'), dataIndex: 'BrandName', width: '120px', ellipsis: true },
        { title: t('Viettel_ID'), dataIndex: 'ViettelId', width: '100px' },
        { title: t('Viettel_Password'), dataIndex: 'ViettelPassword', width: '100px', ellipsis: true },
        { title: t('Template_Code'), dataIndex: 'TemplateCode', width: '100px', ellipsis: true },
        { title: t('Invoice_Series'), dataIndex: 'InvoiceSeries', width: '100px', ellipsis: true },
        {
            title: t('Operation'),
            dataIndex: 'StoreCode',
            width: '100px',
            render: (value, record) => (
                <OperationCell isDelete isEdit handleDelete={handeDelete} handleEdit={handleEdit} data={record} />
            ),
            fixed: 'right',
        },
    ];

    const scrollHeight = useMemo(() => window.innerHeight - 180 - 64 - 50, []);
    const handleChangeNavigation = (curentPage) => {};

    const handleEdit = (data) => {
        setSelectedColumn(data);
        setIsModalEdit(true);
    };
    const handeDelete = (data) => {
        setSelectedColumn(data);
        setIsModalDelete(true);
    };
    const handleClickBtnAddStore = () => {
        setSelectedColumn(undefined);
        setIsModalEdit(true);
    };
    const handleExportExcel = () => {
        const exportData = dataModel?.data ?? [];
        exportData.forEach((value) => {
            delete value?.key;
        });
        const ws = XLSXUtils.json_to_sheet(exportData);
        const wb = XLSXUtils.book_new();
        XLSXUtils.book_append_sheet(wb, ws, 'List Store');
        const headers = columns.map((value) => value?.title);
        headers.pop();
        XLSXUtils.sheet_add_aoa(ws, [headers], { origin: 'A1' });
        writeFile(wb, 'List store.xlsx');
    };
    const onSubmit = async (formData) => {};

    return (
        <TitleLayout title={config.nameMap.itemLevel3.STORE_LIST.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between gap-y-2')}>
                <FormProvider {...methods}>
                    <div className={cx('flex flex-wrap gap-5')}>
                        <Input name={'type'} label={t('Store_Type')} paddingLabel boldLabel />
                        <Input
                            name={'groupName'}
                            label={t('Business_Model')}
                            paddingLabel
                            boldLabel
                            dropDown
                            listOptions={listStoreType()}
                        />
                        <Input name={'storeName'} label={t('Store_Name')} paddingLabel boldLabel />
                        <Input
                            name={'phoneNumber'}
                            label={t('Phone_Number')}
                            paddingLabel
                            boldLabel
                            widthInput={'164px'}
                        />
                    </div>
                    <div className={cx('flex items-end gap-4')}>
                        <Button blue onClick={handleSubmit(onSubmit)}>
                            {t('Search')}
                        </Button>
                        <Button teal onClick={handleExportExcel}>
                            {t('Export_Excel')}
                        </Button>
                        <Button green onClick={handleClickBtnAddStore}>
                            {t('Add_Store')}
                        </Button>
                    </div>
                </FormProvider>
            </div>
            <Table
                dataSource={dataModel?.data}
                columns={columns}
                pagination={false}
                scroll={{ y: `${scrollHeight}px`, x: 'max-content' }}
            />
            <div className={cx('mt-4')}>
                <Pagination
                    total={dataModel.totalRecord}
                    onChange={handleChangeNavigation}
                    align="center"
                    hideOnSinglePage
                    showSizeChanger={false}
                />
            </div>
            <ModalUpdateStore isOpen={isModalEdit} setIsOpen={setIsModalEdit} data={selectedColumn} />
            <ModalDeleteStore isOpen={isModalDelete} setIsOpen={setIsModalDelete} data={selectedColumn} />
        </TitleLayout>
    );
}

export default StoreList;
