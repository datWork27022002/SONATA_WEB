import classNames from 'classnames/bind';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from '~/components/Modal';
import TableCustom from '~/components/TableCustom';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

const listYesNo = ['YES', 'NO'];

function ModalAddCategory({ isModal, setIsModal }) {
    const [selectedRowCategory, setSelectedRowCategory] = useState(null);
    const [hide, setHide] = useState(listYesNo[0]);
    const handleCloseModal = () => {};

    const dataTableCategory = [
        { category: ' 돼지고기 Thit Heo TD ', order: '8' },
        { category: ' 돼지고기 세트 Thit Heo SET TD ', order: '9' },
        { category: ' 사이드메뉴 ', order: '8' },
        { category: ' 소고기 세트 Thit Bo SET TD ', order: '8' },
        { category: '  점심특선메뉴 Thuc don dac biet bua trua TD  ', order: '12' },
        { category: '  them topping  ', order: '8' },
        { category: '  MEMBERSHIP  ', order: '8' },
        { category: '  음료 Do uong TD  ', order: '8' },
    ];
    const columnsCategory = [
        { name: 'Category', selector: (row) => row.category, sortable: true, width: '200px' },
        { name: 'Order', selector: (row) => row.order, sortable: true, width: '80px' },
    ];
    const dataCategory = dataTableCategory.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <Modal onClose={handleCloseModal} visibleModal={isModal} setVisibleModal={setIsModal} title="Add Category">
            <div className={cx('mt-6 flex gap-4')}>
                <div className={cx('flex-1')}>
                    <TableCustom
                        className={cx('mb-4 h-[400px]')}
                        columns={columnsCategory}
                        data={dataCategory}
                        selectedRow={selectedRowCategory}
                        setSelectedRow={setSelectedRowCategory}
                    />
                </div>
                {/* form */}
                <div className={cx('flex-1')}>
                    <Input label="Name" required />
                    <Input label="Order" required type="number" />

                    <Input
                        label="Hide"
                        radioInput
                        listOptions={listYesNo}
                        seletedValue={hide}
                        setSeletedValue={setHide}
                    />
                    <p className={cx('mt-2')}>* Menu Group Add, you can select if it's new.</p>
                    <div className={cx('mt-8 flex justify-end gap-2')}>
                        <Button orange>New</Button>
                        <Button green>Save</Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

ModalAddCategory.propTypes = {
    isModal: PropTypes.bool.isRequired,
    setIsModal: PropTypes.func.isRequired,
};

export default ModalAddCategory;
