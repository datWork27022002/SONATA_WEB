import classNames from 'classnames';
import { Fragment } from 'react';

import TableCustom from '~/components/TableCustom';

const cx = classNames;

function OtherSummaryTable() {
    const dataTable = [];

    const columns = [
        { name: 'Other Info', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Quantity or Amount', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <Fragment>
            <h1 className={cx('mb-2 text-center text-[14px] font-semibold')}>Other Summary</h1>
            <div className={cx('overflow-auto')}>
                <TableCustom className={cx('h-[250px]')} columns={columns} data={data} />
            </div>
        </Fragment>
    );
}

export default OtherSummaryTable;
