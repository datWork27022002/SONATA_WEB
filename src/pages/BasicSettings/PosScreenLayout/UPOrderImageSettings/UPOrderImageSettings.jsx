import React, { useState } from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Button from '~/components/Button';
import UploadImage from './Components/UploadImage';
import UploadVideo from './Components/UploadVideo';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listTypeForm = ['Image', 'Video'];

function UPOrderImageSettings() {
    const [typeForm, setTypeForm] = useState(listTypeForm[0]);

    const dataTable = [{ landscapeMode: '1280 X 800', portraitMode: '800 X 1280' }];
    const columns = [
        { name: 'Landscape mode', selector: (row) => row.landscapeMode, width: '120px' },
        { name: 'Portrait mode', selector: (row) => row.portraitMode, width: '150px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    const changeTypeForm = (value) => {
        setTypeForm(value);
    };

    return (
        <TitleLayout title={config.nameMap.itemLevel3.UP_ORDER_IMAGE_SETTINGS.Visiblename}>
            <div className={cx('flex flex-col items-start')}>
                {/* table */}
                <div>
                    <span>Recommended image resolution</span>
                    <TableCustom className={cx('mb-4')} columns={columns} data={data} />
                </div>

                <div className={cx('flex')}>
                    {listTypeForm.map((value, index) => (
                        <Button
                            key={index}
                            onClick={() => changeTypeForm(value)}
                            className={cx(value === typeForm && '!bg-primary-color !text-text-color-secondnary')}
                            noBorderRadius
                        >
                            {value}
                        </Button>
                    ))}
                </div>

                <UploadImage typeForm={typeForm} />
                <UploadVideo typeForm={typeForm} />
            </div>
        </TitleLayout>
    );
}

export default UPOrderImageSettings;
