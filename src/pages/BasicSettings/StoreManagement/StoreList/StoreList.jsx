import React, { useEffect, useMemo, useState } from 'react';
import cx from 'classnames';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';

import { TitleLayout, Input, Button, OperationCell, Loading, TablePagination } from '~/components';
import ModalUpdateStore from './ModalUpdateStore';
import ModalDeleteStore from './ModalDeleteStore';
import config from '~/config';
import { listStoreType } from '~/crema/constant/listOptionInput';
import { getListStore } from '~/services/StoreService';
import useCallApiPrivate from '~/hooks/useCallApiPrivate';
import { notifyError } from '~/utils/notification';
import { exportToExcel } from '~/utils/helpers';

function StoreList() {
    const [dataModel, setDataModel] = useState({
        data: [],
        pageIndex: 1,
        pageSize: 15,
        totalRecord: 0,
    });
    const [selectedColumn, setSelectedColumn] = useState();
    const [isModalEdit, setIsModalEdit] = useState(false);
    const [isModalDelete, setIsModalDelete] = useState(false);
    const [loading, setLoading] = useState(false);

    const methods = useForm();

    const callApi = useCallApiPrivate();

    const { t } = useTranslation('translation', { keyPrefix: 'Store' });

    const { watch } = methods;

    const columns = [
        { title: t('Store_Code'), dataIndex: 'storeCode', width: '100px', ellipsis: true },
        { title: t('Store_Type'), dataIndex: 'storeType', width: '120px' },
        { title: t('Transaction_Type'), dataIndex: 'transactionType', width: '120px', ellipsis: true },
        { title: t('Store_Name'), dataIndex: 'name', width: '250px' },
        { title: t('Representative'), dataIndex: 'representative', width: '200px' },
        { title: t('Representative_ID'), dataIndex: 'representativeId', width: '100px', ellipsis: true },
        { title: t('Phone_Number'), dataIndex: 'phoneNumber', width: '120px' },
        { title: t('Fax_Number'), dataIndex: 'faxNumber', width: '120px' },
        { title: t('Email'), dataIndex: 'email', width: '200px' },
        { title: t('Homepage'), dataIndex: 'homepage', width: '200px' },
        { title: t('Total_Area'), dataIndex: 'totalArea', width: '100px', ellipsis: true },
        { title: t('Store_Area'), dataIndex: 'storeArea', width: '100px', ellipsis: true },
        { title: t('Parking_Space'), dataIndex: 'parkingSpaces', width: '100px', ellipsis: true },
        { title: t('Employee_Count'), dataIndex: 'employeeCount', width: '100px', ellipsis: true },
        { title: t('Bank_Name'), dataIndex: 'bankName', width: '200px' },
        { title: t('Account_Number'), dataIndex: 'accountNumber', width: '150px' },
        { title: t('Account_Holder'), dataIndex: 'accountHolder', width: '150px' },
        { title: t('Transaction_Start_Date'), dataIndex: 'transactionStartDate', width: '120px', ellipsis: true },
        { title: t('Transaction_End_Date'), dataIndex: 'transactionEndDate', width: '120px', ellipsis: true },
        { title: t('Business_Number_1'), dataIndex: 'businessNumber1', width: '150px', ellipsis: true },
        { title: t('Business_Number_2'), dataIndex: 'businessNumber2', width: '150px', ellipsis: true },
        { title: t('Business_Number_3'), dataIndex: 'businessNumber3', width: '150px', ellipsis: true },
        { title: t('Postal_Code'), dataIndex: 'postalCode', width: '100px', ellipsis: true },
        { title: t('Address'), dataIndex: 'address', width: '600px' },
        { title: t('Detailed_Address'), dataIndex: 'detailedAddress', width: '400px' },
        { title: t('Business_Type'), dataIndex: 'businessType', width: '150px', ellipsis: true },
        { title: t('Business_Category'), dataIndex: 'businessCategory', width: '120px', ellipsis: true },
        { title: t('Display_Order'), dataIndex: 'displayOrder', width: '100px', ellipsis: true },
        { title: t('Transaction_Level'), dataIndex: 'transactionLevel', width: '100px', ellipsis: true },
        { title: t('Brand_ID'), dataIndex: 'brandId', width: '100px', ellipsis: true },
        { title: t('Brand_Name'), dataIndex: 'brandName', width: '120px', ellipsis: true },
        { title: t('Viettel_ID'), dataIndex: 'viettelId', width: '100px' },
        { title: t('Viettel_Password'), dataIndex: 'viettelPassword', width: '100px', ellipsis: true },
        { title: t('Template_Code'), dataIndex: 'templateCode', width: '100px', ellipsis: true },
        { title: t('Invoice_Series'), dataIndex: 'invoiceSeries', width: '100px', ellipsis: true },
        {
            title: t('Operation'),
            dataIndex: 'storeCode',
            width: '100px',
            render: (value, record) => (
                <OperationCell isDelete isEdit handleDelete={handleDelete} handleEdit={handleEdit} data={record} />
            ),
            fixed: 'right',
        },
    ];

    const scrollHeight = useMemo(() => window.innerHeight - 180 - 64 - 50, []);
    const handleChangeNavigation = (curentPage) => {
        handleGetListStore(curentPage, dataModel.pageSize);
    };

    const handleEdit = (data) => {
        setSelectedColumn(data);
        setIsModalEdit(true);
    };
    const handleDelete = (data) => {
        setSelectedColumn(data);
        setIsModalDelete(true);
    };
    const handleClickBtnAddStore = () => {
        setSelectedColumn(undefined);
        setIsModalEdit(true);
    };
    const handleExportExcel = async () => {
        setLoading(true);
        const bodyRequest = {
            StoreType: watch('Store_Type'),
            BusinessModel: watch('Business_Model'),
            StoreName: watch('Store_Name'),
            PhoneNumber: watch('Phone_Number'),
            pageIndex: 1,
            pageSize: 9999,
        };
        const res = await callApi(getListStore, bodyRequest);
        if (!res) notifyError('get data failed');
        const exportData = res?.data ?? [];
        exportToExcel(exportData, columns, 'List Store');
        setLoading(false);
    };

    const handleGetListStore = async (pageIndex, pageSize) => {
        const bodyRequest = {
            StoreType: watch('Store_Type'),
            BusinessModel: watch('Business_Model'),
            StoreName: watch('Store_Name'),
            PhoneNumber: watch('Phone_Number'),
            pageIndex: pageIndex || dataModel.pageIndex,
            pageSize: pageSize || dataModel.pageSize,
        };

        setLoading(true);
        const res = await callApi(getListStore, bodyRequest);
        setLoading(false);
        if (res) {
            res.data = res.data?.map((value, index) => ({
                ...value,
                key: index,
                transactionStartDate: value?.transactionStartDate?.split('T')[0],
                transactionEndDate: value?.transactionEndDate?.split('T')[0],
            }));
            setDataModel(res);
        } else {
            notifyError('get data failed');
        }
    };

    useEffect(() => {
        handleGetListStore();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TitleLayout title={config.nameMap.itemLevel3.STORE_LIST.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between gap-y-2')}>
                <FormProvider {...methods}>
                    <div className={cx('flex flex-wrap gap-5')}>
                        <Input name={'Store_Type'} label={t('Store_Type')} paddingLabel boldLabel />
                        <Input
                            name={'Business_Model'}
                            label={t('Business_Model')}
                            paddingLabel
                            boldLabel
                            dropDown
                            listOptions={listStoreType()}
                        />
                        <Input name={'Store_Name'} label={t('Store_Name')} paddingLabel boldLabel />
                        <Input
                            name={'Phone_Number'}
                            label={t('Phone_Number')}
                            paddingLabel
                            boldLabel
                            widthInput={'164px'}
                        />
                    </div>
                    <div className={cx('flex items-end gap-4')}>
                        <Button blue onClick={() => handleGetListStore(1)}>
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
                style={{ height: `${scrollHeight + 50}px` }}
                scroll={{ y: `${scrollHeight}px`, x: 'max-content' }}
            />

            <TablePagination dataModel={dataModel} handleChangeNavigation={handleChangeNavigation} />

            {isModalEdit && (
                <ModalUpdateStore
                    isOpen={isModalEdit}
                    setIsOpen={setIsModalEdit}
                    data={selectedColumn}
                    handleGetListStore={handleGetListStore}
                />
            )}
            <ModalDeleteStore
                isOpen={isModalDelete}
                setIsOpen={setIsModalDelete}
                data={selectedColumn}
                handleGetListStore={handleGetListStore}
            />
            {loading && <Loading />}
        </TitleLayout>
    );
}

export default StoreList;
