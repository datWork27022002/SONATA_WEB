import React from 'react';
import classNames from 'classnames/bind';

import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import config from '~/config';
import Button from '~/components/Button';
import Dropdown from '~/components/Input/DropDown';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

const listOrderBottomImage = [
    { title: 'Order Bottom Image 1 ', img: require('~/assets/img/KioskImageSettings/OrderBottomImage1.jpg') },
    { title: 'Order Bottom Image 2 ', img: require('~/assets/img/KioskImageSettings/OrderBottomImage2.jpg') },
    { title: 'Order Bottom Image 3 ', img: require('~/assets/img/KioskImageSettings/OrderBottomImage3.jpg') },
    { title: 'Order Bottom Image 4 ', img: require('~/assets/img/KioskImageSettings/OrderBottomImage4.jpg') },
];

const listTypeImage = ['Main Screen Image', 'Nutrition Infomatiom Image'];
function KioskImageSettings() {
    const dataTable = [
        {
            screenSize: '15 inch',
            mainScreenImage: '768 x 1024    ',
            orderBottomImage: '768 x 232',
            nutritionInformationImage: '768 x 1024 (Max 2048)',
        },
        {
            screenSize: '21.5 inch',
            mainScreenImage: '1080 x 1920',
            orderBottomImage: '1080 x 328',
            nutritionInformationImage: '1080 x 1920 (Max 3840)',
        },
    ];
    const columns = [
        { name: 'Screen size', selector: (row) => row.screenSize, width: '120px' },
        { name: 'Main Screen Image', selector: (row) => row.mainScreenImage, width: '150px' },
        { name: 'Order Bottom Image', selector: (row) => row.orderBottomImage, width: '150px' },
        { name: 'Nutrition information image', selector: (row) => row.nutritionInformationImage, width: '180px' },
    ];
    const data = dataTable.map((value, index) => ({ ...value, id: index + 1 }));

    return (
        <TitleLayout title={config.nameMap.itemLevel3.KIOSK_IMAGE_SETTINGS.Visiblename}>
            <div className={cx('flex flex-col items-start')}>
                {/* table */}
                <div className={cx('')}>
                    <TableCustom className={cx('mb-4 h-[100px]')} columns={columns} data={data} />
                </div>
                <div className={cx('flex gap-4')}>
                    <Dropdown listOptions={listTypeImage} />
                    <Button border>Main Screen Default Image</Button>
                </div>
                <div className={cx('flex gap-4')}>
                    <div className={cx('my-2 rounded bg-gray-100 p-2')}>
                        <div className={cx('my-2 flex items-center justify-between')}>
                            <span>Main Screen Image Upload</span>
                            <div className={cx('flex gap-2')}>
                                <Button border>Upload</Button>
                                <Button red>Delete</Button>
                            </div>
                        </div>
                        <img
                            src={require('~/assets/img/KioskImageSettings/MainScreenImage.jpg')}
                            alt=""
                            width="700px"
                        />
                    </div>
                    <div className={cx('my-2 rounded bg-gray-100 p-2')}>
                        {listOrderBottomImage.map((value, index) => (
                            <div className={cx('mb-4')} key={index}>
                                <div className={cx('my-2 flex items-center justify-between')}>
                                    <span>{value.title}</span>
                                    <div className={cx('flex gap-2')}>
                                        <Button border>Upload</Button>
                                        <Button red>Delete</Button>
                                    </div>
                                </div>
                                <img src={value.img} alt="" className={cx('h-[200px] w-[500px] object-fill')} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TitleLayout>
    );
}

export default KioskImageSettings;
