import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind();

function POSUserDefinitionLanguage() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'ID', selector: (row) => row.groupCode, sortable: true, width: '100px' },
        { name: 'Korean', selector: (row) => row.groupName, sortable: true, width: '300px' },
        { name: 'User Defind', selector: (row) => row.groupName, sortable: true, width: '300px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.POS_USER_DEFINITION_LANGUAGE.Visiblename}>
            {/* form */}
            <div className={cx('mb-2 flex flex-wrap gap-4')}>
                <div className={cx('flex flex-wrap')}>
                    <Input label="Search" paddingLabel boldLabel placeholder="ID, Korean, User define" />
                </div>
                <div className={cx('flex items-center gap-4')}>
                    <Button blue>Search</Button>
                    <Button teal>Export Excel</Button>
                    <Button red>User Define Clear</Button>
                </div>
            </div>
            {/* table */}
            <div className={cx('flex justify-start overflow-auto')}>
                <div className={cx('')}>
                    <TableCustom
                        className={cx('h-[500px]')}
                        columns={columns}
                        data={data}
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                    />
                </div>
            </div>
        </TitleLayout>
    );
}

export default POSUserDefinitionLanguage;
