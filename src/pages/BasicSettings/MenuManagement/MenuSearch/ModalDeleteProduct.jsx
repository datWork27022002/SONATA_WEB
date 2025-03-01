import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Modal, Loading } from '~/components';
import { deleteProductService } from '~/services/ProductService';
import useCallApiPrivate from '~/hooks/useCallApiPrivate';
import { notifyError, notifySuccess } from '~/utils/notification';

const ModalDeleteProduct = ({ isOpen, setIsOpen, data, handleGetListProduct }) => {
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'Product' });

    const callApi = useCallApiPrivate();

    const handleDelete = async () => {
        const params = {
            Barcode: data.barcode,
        };
        setLoading(true);
        const res = await callApi(deleteProductService, params);
        setLoading(false);
        if (!res) notifyError(t('delete_product_failed'));
        else {
            notifySuccess(t('delete_product_success'));
            setIsOpen(false);
            await handleGetListProduct();
        }
    };

    return (
        <Modal
            title={t('Delete_Product')}
            visibleModal={isOpen}
            setVisibleModal={setIsOpen}
            onConfirm={handleDelete}
            className={cx('w-[300px]')}
        >
            <div className={cx('text-center font-semibold')}>
                {t('Are_you_sure_you_want_to_delete_the_product')}{' '}
                <span className={cx('text-red-500')}>[{data?.productName}]</span> ?
            </div>
            {loading && <Loading />}
        </Modal>
    );
};

export default ModalDeleteProduct;

ModalDeleteProduct.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    data: PropTypes.object,
};
