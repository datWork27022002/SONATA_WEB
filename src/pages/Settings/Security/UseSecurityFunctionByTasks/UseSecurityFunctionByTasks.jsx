import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Button from '~/components/Button';

const cx = classNames.bind();

function UseSecurityFunctionByTasks() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [
        { workUnit: 'Dine-in' },
        { workUnit: 'Quick Serve' },
        { workUnit: 'Receipt Management' },
        { workUnit: 'Multi Payment' },
        { workUnit: 'Cashier In' },
        { workUnit: 'Cashier Out' },
        { workUnit: 'Dine-in' },
        { workUnit: 'Quick Serve' },
        { workUnit: 'Receipt Management' },
        { workUnit: 'Multi Payment' },
        { workUnit: 'Cashier In' },
        { workUnit: 'Cashier Out' },
        { workUnit: 'Dine-in' },
        { workUnit: 'Quick Serve' },
        { workUnit: 'Receipt Management' },
        { workUnit: 'Multi Payment' },
        { workUnit: 'Cashier In' },
        { workUnit: 'Cashier Out' },
    ];
    const columns = [{ name: 'Work Unit', selector: (row) => row.workUnit, sortable: true }];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.USE_SECURITY_FUNCTION_BY_TASKS.Visiblename}>
            <div className={cx('inline-block')}>
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[500px]')}>
                        <TableCustom
                            className={cx('mb-4 h-[420px]')}
                            columns={columns}
                            data={data}
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                            selectableRows
                        />
                    </div>
                </div>
                <div className={cx('mt-8 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </div>
        </TitleLayout>
    );
}

export default UseSecurityFunctionByTasks;
