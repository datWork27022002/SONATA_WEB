import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Input from '~/components/Input';
import Button from '~/components/Button';
import FormAnnouncement from './FormAnnouncement';

const cx = classNames.bind();

const listTime = ['Date add', 'Progress'];

function Announcement() {
    const [selectedRow, setSelectedRow] = useState(null);

    const dataTable = [];
    const columns = [
        { name: 'Title', selector: (row) => row.groupCode, sortable: true },
        { name: 'Date Added', selector: (row) => row.groupName, sortable: true },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.ANNOUNCEMENT.Visiblename}>
            <div className={cx('flex max-lg:flex-col lg:gap-4')}>
                {/* table */}
                <div className={cx('w-[45%] pr-4 max-lg:!w-full max-lg:pr-0')}>
                    {/* input */}
                    <div className={cx('flex items-center justify-between')}>
                        <div className={cx('flex flex-wrap lg:gap-4')}>
                            <Input dropDown listOptions={listTime} />
                            <div className={cx('flex items-center')}>
                                <Input type="date" />~<Input type="date" />
                            </div>
                        </div>
                        <Button blue>Search</Button>
                    </div>
                    {/* table */}
                    <TableCustom
                        className={cx('mb-4 h-[450px]')}
                        columns={columns}
                        data={data}
                        showHideList
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                    />
                </div>
                {/* form */}
                <FormAnnouncement />
            </div>
        </TitleLayout>
    );
}

export default Announcement;
