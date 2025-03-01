import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import { useTranslation } from 'react-i18next';

import { Modal, Loading } from '~/components';
import { deleteStore } from '~/services/StoreService';
import useCallApiPrivate from '~/hooks/useCallApiPrivate';
import { notifyError, notifySuccess } from '~/utils/notification';

const ModalDeleteStore = ({ isOpen, setIsOpen, data, handleGetListStore }) => {
    const [loading, setLoading] = useState(false);
    const { t } = useTranslation('translation', { keyPrefix: 'Store' });

    const callApi = useCallApiPrivate();

    const handleDelete = async () => {
        const params = {
            storeCode: data.storeCode,
        };
        setLoading(true);
        const res = await callApi(deleteStore, params);
        setLoading(false);
        if (!res) notifyError(t('delete_store_failed'));
        else {
            notifySuccess(t('delete_store_success'));
            setIsOpen(false);
            await handleGetListStore();
        }
    };

    return (
        <Modal
            title={t('Delete_Store')}
            visibleModal={isOpen}
            setVisibleModal={setIsOpen}
            onConfirm={handleDelete}
            className={cx('w-[300px]')}
        >
            <div className={cx('text-center font-semibold')}>
                {t('Are_you_sure_you_want_to_delete_the_store')}{' '}
                <span className={cx('text-red-500')}>[{data?.name}]</span> ?
            </div>
            {loading && <Loading />}
        </Modal>
    );
};

export default ModalDeleteStore;

ModalDeleteStore.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    data: PropTypes.object,
};
