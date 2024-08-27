import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import FormMembershipList from './FormMembershipList';
import config from '~/config';

const cx = classNames.bind();

function MembershipList() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];

    const columns = [
        { name: 'Affiliate Store', selector: (row) => row.groupCode, sortable: true, width: '120px' },
        { name: 'Membebr Group', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Category 1', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Category 2', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Category 3', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Membership Card', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Member Name', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Phone Number', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Send SMS', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Mobile', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Email', selector: (row) => row.groupName, sortable: true, width: '200px' },
        { name: 'Bond Deposit', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Point Blance', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Count Visited', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Brithday', selector: (row) => row.groupName, sortable: true, width: '100px' },
        { name: 'Aniversary', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Date Added', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Date Visited', selector: (row) => row.groupName, sortable: true, width: '120px' },
        { name: 'Description', selector: (row) => row.groupName, sortable: true, width: '150px' },
        { name: 'Extended Description', selector: (row) => row.groupName, sortable: true, width: '150px' },
    ];

    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.MEMBERSHIP_LIST.Visiblename}>
            {/* form */}
            <FormMembershipList />
            {/* table */}
            <div className={cx('overflow-auto')}>
                <TableCustom
                    className={cx('h-[500px]')}
                    columns={columns}
                    data={data}
                    selectedRow={selectedRow}
                    setSelectedRow={setSelectedRow}
                />
            </div>
        </TitleLayout>
    );
}

export default MembershipList;
