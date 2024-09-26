import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Button from '~/components/Button';

const cx = classNames.bind();

function UseSecurityFunctionByTasks2() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [{ topMenu: 'Web Login', middleMenu: '', workUnit: 'Web Login' }];

    const columns = [
        { name: 'Top Menu', selector: (row) => row.topMenu, sortable: true, width: '200px' },
        { name: 'Middle Menu', selector: (row) => row.middleMenu, sortable: true, width: '200px' },
        { name: 'Work Unit', selector: (row) => row.workUnit, sortable: true },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.USE_SECURITY_FUNCTION_BY_TASKS2.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap justify-end')}>
                <div className={cx('flex items-center gap-4')}>
                    <Button green>Save</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[500px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                    selectableRows
                />
            </div>
        </TitleLayout>
    );
}

export default UseSecurityFunctionByTasks2;
