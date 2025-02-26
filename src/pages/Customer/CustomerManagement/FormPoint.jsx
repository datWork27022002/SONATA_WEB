import React, { useState } from 'react';
import classNames from 'classnames/bind';

import Input from '~/components/Input';
import Button from '~/components/Button';
import TableCustom from '~/components/TableCustom';

const cx = classNames.bind();

const listStore = ['hyojung'];

function FormPoint({ typeForm }) {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];
    const columns = [
        { name: 'Store Name', selector: (row) => row.customerGroup, sortable: true, width: '120px' },
        { name: 'Type', selector: (row) => row.customerGroup, sortable: true, width: '100px' },
        { name: 'Increase', selector: (row) => row.customerGroup, sortable: true, width: '100px' },
        { name: 'Decrease', selector: (row) => row.customerGroup, sortable: true, width: '100px' },
        { name: 'Edit By', selector: (row) => row.customerGroup, sortable: true, width: '100px' },
        { name: 'Ref.No', selector: (row) => row.customerGroup, sortable: true, width: '120px' },
        { name: 'Apply Date', selector: (row) => row.customerGroup, sortable: true, width: '100px' },
        { name: 'Note', selector: (row) => row.customerGroup, sortable: true, width: '150px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <div
            className={cx(
                'mt-2 overflow-hidden transition-all duration-300',
                typeForm === 'Point' ? 'mt-[-16px] opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex items-center gap-4')}>
                <Input paddingLabel boldLabel label="Store" dropDown listOptions={listStore} />
                <Button blue>Search</Button>
                <Button orange>New</Button>
            </div>
            <div className={cx('flex items-center gap-4')}>
                <Input paddingLabel label="Add Pts" widthInput="100px" />
                <Input paddingLabel label="Used" widthInput="100px" />
                <Input paddingLabel label="Balance" widthInput="100px" />
            </div>
            <div className={cx('mb-4 w-[700px]')}>
                <TableCustom
                    className={cx('mb-4 h-[400px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </div>
    );
}

export default FormPoint;
