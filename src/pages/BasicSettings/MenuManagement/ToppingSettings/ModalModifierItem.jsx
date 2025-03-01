import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

import Modal from '~/components/Modal';
import Input from '~/components/Input';
import Button from '~/components/Button';
import TableCustom from '~/components/TableCustom';

const cx = classNames.bind();

const listYesNo = ['YES', 'NO'];

function ModalModifierItem({ isModal, setIsModal }) {
    const [automaticSelection, setAutomaticSelection] = useState(listYesNo[0]);
    const handleCloseModal = () => {};

    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [
        { additionalItem: 'No', price: '', convRate: '0' },
        { additionalItem: 'Add', price: '', convRate: '0' },
        { additionalItem: 'Extra', price: '', convRate: '0' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));
    const columns = [
        { name: 'Additional Item', selector: (row) => row.additionalItem, sortable: true },
        { name: 'Price', selector: (row) => row.price, sortable: true },
        { name: 'Conv Rate', selector: (row) => row.convRate, sortable: true },
    ];

    return (
        <Modal onClose={handleCloseModal} visibleModal={isModal} setVisibleModal={setIsModal} title="Modifier Item">
            <Input label="Item Name" disabled />
            <Input label="Topping name" iconRightInput={FaSearch} />
            <Input
                label="Automatic Selection"
                radioInput
                listOptions={listYesNo}
                seletedValue={automaticSelection}
                setSeletedValue={setAutomaticSelection}
            />
            <Input label="Image" type="file" />
            <Input label="Max. Quantity" type="number" />

            <div className={cx('w-[380px] overflow-auto')}>
                <TableCustom
                    className={cx('h-[200px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                    selectableRows
                />
            </div>

            <div className={cx('mt-8 flex justify-end gap-2')}>
                <Button green>Save</Button>
            </div>
        </Modal>
    );
}

ModalModifierItem.propTypes = {
    isModal: PropTypes.bool.isRequired,
    setIsModal: PropTypes.func.isRequired,
};

export default ModalModifierItem;
