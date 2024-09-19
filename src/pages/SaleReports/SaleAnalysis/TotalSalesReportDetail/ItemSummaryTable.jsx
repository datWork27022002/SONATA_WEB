import classNames from 'classnames';
import { Fragment } from 'react';

import TableCustom from '~/components/TableCustom';

const cx = classNames;

function ItemSummaryTable() {
    const dataTable = [];

    const columns = [
        { name: 'Category Name', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Item Name', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Quantity', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Amount', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Ratio', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <Fragment>
            <h1 className={cx('mb-2 text-center text-[14px] font-semibold')}>Item Summary</h1>
            <div className={cx('overflow-auto')}>
                <TableCustom className={cx('h-[250px]')} columns={columns} data={data} />
            </div>
        </Fragment>
    );
}

export default ItemSummaryTable;
