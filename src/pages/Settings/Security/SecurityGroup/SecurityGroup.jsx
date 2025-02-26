import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Button from '~/components/Button';
import Input from '~/components/Input';

const cx = classNames.bind();

const listSecurityGroup = ['Cashier', 'Server', 'Owner', 'Manager'];
const listWorkUnit = ['Default', 'Not Authorize', 'Password'];

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
        <TitleLayout title={config.nameMap.itemLevel3.SECURITY_GROUP.Visiblename}>
            <div className={cx('inline-block')}>
                <div className={cx('flex flex-wrap md:ml-8 md:gap-16')}>
                    <div className={cx('sm:w-[500px]')}>
                        <div className={cx('flex items-center gap-4')}>
                            <Input label={'Security Group '} dropDown listOptions={listSecurityGroup} />
                            <Button red>Add/Update</Button>
                        </div>
                        <Input label={'Work Unit'} dropDown listOptions={listWorkUnit} widthInput={'150px'} />
                        <TableCustom
                            className={cx('mb-4 h-[400px]')}
                            columns={columns}
                            data={data}
                            selectedRow={selectedRow}
                            setSelectedRow={setSelectedRow}
                        />
                    </div>
                </div>
                <div className={cx('mt-4 flex justify-end')}>
                    <Button teal>Save</Button>
                </div>
            </div>
        </TitleLayout>
    );
}

export default UseSecurityFunctionByTasks;
