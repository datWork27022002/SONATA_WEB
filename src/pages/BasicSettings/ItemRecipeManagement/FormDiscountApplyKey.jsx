import React, { useState } from 'react';
import classNames from 'classnames/bind';
import TableCustom from '~/components/TableCustom';

const cx = classNames.bind();

function FormDiscountApplyKey({ typeForm }) {
    const [selectedRowDiscountName, setSelectedRowDiscountName] = useState(null);

    const dataTableDiscountName = [];
    const columnsDiscountName = [{ name: 'Discount Name', selector: (row) => row.discountName, sortable: true }];
    const dataDiscountName = dataTableDiscountName.map((value, index) => ({ ...value, id: index + 1 }));
    return (
        <div
            className={cx(
                'mt-2 flex flex-wrap overflow-hidden transition-all duration-300',
                typeForm === 'Discount apply key' ? 'opacity-100' : 'mt-0 h-0 opacity-0',
            )}
        >
            <div className={cx('flex-1 md:pr-4')}>
                <TableCustom
                    className={cx('mb-4 h-[400px]')}
                    columns={columnsDiscountName}
                    data={dataDiscountName}
                    selectedRow={selectedRowDiscountName}
                    setSelectedRow={setSelectedRowDiscountName}
                />
            </div>
            <div className={cx('flex-1 max-sm:hidden')}></div>
        </div>
    );
}

export default FormDiscountApplyKey;
