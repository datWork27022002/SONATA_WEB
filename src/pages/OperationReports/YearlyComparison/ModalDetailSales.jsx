import classNames from 'classnames/bind';
import React from 'react';
import PropTypes from 'prop-types';

import Modal from '~/components/Modal';
import TableCustom from '~/components/TableCustom';

const cx = classNames.bind();

function ModalDetailSales({ isModal, setIsModal }) {
    const handleCloseModal = () => {};

    const dataTable = [];
    const columns = [
        { name: 'Item Name', selector: (row) => row.groupCode, sortable: true, width: '200px' },
        { name: 'Qty', selector: (row) => row.groupName, sortable: true, width: '60px' },
        { name: 'Order Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Discount Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Total Sales', selector: (row) => row.groupName, sortable: true, width: '120px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <Modal onClose={handleCloseModal} visibleModal={isModal} setVisibleModal={setIsModal} title="Detail Sales">
            <div className={cx('mt-6')}>
                <TableCustom className={cx('h-[400px]')} columns={columns} data={data} />
            </div>
        </Modal>
    );
}

ModalDetailSales.propTypes = {
    isModal: PropTypes.bool.isRequired,
    setIsModal: PropTypes.func.isRequired,
};

export default ModalDetailSales;
