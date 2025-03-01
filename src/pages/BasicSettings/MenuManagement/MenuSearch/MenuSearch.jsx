import React, { useEffect, useMemo, useState } from 'react';
import cx from 'classnames';
import { useForm, FormProvider } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';

import { TitleLayout, Input, Button, OperationCell, Loading, TablePagination } from '~/components';
import ModalUpdateProduct from './ModalUpdateProduct';
import ModalDeleteProduct from './ModalDeleteProduct';
import config from '~/config';
import { getListProductService } from '~/services/ProductService';
import useCallApiPrivate from '~/hooks/useCallApiPrivate';
import { notifyError } from '~/utils/notification';
import { exportToExcel } from '~/utils/helpers';

function MenuSearch() {
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

    const { t } = useTranslation('translation', { keyPrefix: 'Product' });

    const { watch } = methods;

    const columns = [
        { title: t('barcode'), dataIndex: 'barcode', width: '100px', ellipsis: true },
        { title: t('product_name'), dataIndex: 'productName', width: '200px' },
        { title: t('short_name'), dataIndex: 'shortName', width: '200px' },
        { title: t('product_type'), dataIndex: 'productType', width: '100px', ellipsis: true },
        { title: t('specification'), dataIndex: 'specification', width: '200px' },
        { title: t('unit'), dataIndex: 'unit', width: '100px' },
        { title: t('purchase_amount'), dataIndex: 'purchaseAmount', width: '120px', ellipsis: true },
        { title: t('selling_amount'), dataIndex: 'sellingAmount', width: '120px', ellipsis: true },
        { title: t('profit_margin'), dataIndex: 'profitMargin', width: '120px' },
        { title: t('business_name'), dataIndex: 'storeName', width: '200px', ellipsis: true },
        { title: t('tax_name'), dataIndex: 'taxName', width: '100px', ellipsis: true },
        { title: t('tax_type'), dataIndex: 'taxType', width: '100px', ellipsis: true },
        { title: t('in_box_quantity'), dataIndex: 'inBoxQuantity', width: '100px', ellipsis: true },
        { title: t('out_box_quantity'), dataIndex: 'outBoxQuantity', width: '100px', ellipsis: true },
        { title: t('caton_box_quantity'), dataIndex: 'catonBoxQuantity', width: '100px', ellipsis: true },
        { title: t('purchase_price'), dataIndex: 'purchasePrice', width: '120px' },
        { title: t('purchase_tax'), dataIndex: 'purchaseTax', width: '120px' },
        { title: t('selling_tax'), dataIndex: 'sellingPrice', width: '120px', ellipsis: true },
        { title: t('consumer_price'), dataIndex: 'sellingTax', width: '120px', ellipsis: true },
        { title: t('transaction_end_date'), dataIndex: 'transactionEndDate', width: '150px', ellipsis: true },
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
        handleGetListProduct(curentPage, dataModel.pageSize);
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
            Barcode: watch('barcode'),
            ProductName: watch('productName'),
            pageIndex: 1,
            pageSize: 9999,
        };
        const res = await callApi(getListProductService, bodyRequest);
        if (!res) notifyError('get data failed');
        const exportData = res?.data ?? [];
        exportToExcel(exportData, columns, 'List Store');
        setLoading(false);
    };

    const handleGetListProduct = async (pageIndex, pageSize) => {
        const bodyRequest = {
            Barcode: watch('barcode'),
            ProductName: watch('productName'),
            pageIndex: pageIndex || dataModel.pageIndex,
            pageSize: pageSize || dataModel.pageSize,
        };

        setLoading(true);
        const res = await callApi(getListProductService, bodyRequest);
        setLoading(false);
        if (res) {
            res.data = res.data?.map((value, index) => ({
                ...value,
                key: index,
                transactionStartDate: value?.transactionStartDate?.split('T')[0],
                transactionEndDate: value?.transactionEndDate?.split('T')[0],
                discountStartDate: value?.discountStartDate?.split('T')[0],
                discountEndDate: value?.discountEndDate?.split('T')[0],
            }));
            setDataModel(res);
        } else {
            notifyError('get data failed');
        }
    };

    useEffect(() => {
        handleGetListProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TitleLayout title={config.nameMap.itemLevel3.MENU_SEARCH.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-between gap-y-2')}>
                <FormProvider {...methods}>
                    <div className={cx('flex flex-wrap gap-5')}>
                        <Input name={'barcode'} label={t('barcode')} paddingLabel boldLabel />
                        <Input name={'productName'} label={t('product_name')} paddingLabel boldLabel />
                    </div>
                    <div className={cx('flex items-end gap-4')}>
                        <Button blue onClick={() => handleGetListProduct(1)}>
                            {t('Search')}
                        </Button>
                        <Button teal onClick={handleExportExcel}>
                            {t('Export_Excel')}
                        </Button>
                        <Button green onClick={handleClickBtnAddStore}>
                            {t('Add_Product')}
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
                <ModalUpdateProduct
                    isOpen={isModalEdit}
                    setIsOpen={setIsModalEdit}
                    data={selectedColumn}
                    handleGetListProduct={handleGetListProduct}
                />
            )}
            <ModalDeleteProduct
                isOpen={isModalDelete}
                setIsOpen={setIsModalDelete}
                data={selectedColumn}
                handleGetListProduct={handleGetListProduct}
            />
            {loading && <Loading />}
        </TitleLayout>
    );
}

export default MenuSearch;
