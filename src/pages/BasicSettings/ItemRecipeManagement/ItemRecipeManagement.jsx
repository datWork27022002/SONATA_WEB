import React, { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ItemRecipeManagement.module.scss';
import TitleLayout from '~/components/TitleLayout';
import TableCustom from '~/components/TableCustom';
import Button from '~/components/Button';
import FormMenuInfo from './FormMenuInfo';
import FormItemPolicy from './FormItemPolicy';
import FormTimeService from './FormTimeService';
import FormDiscountApplyKey from './FormDiscountApplyKey';
import ModalAddCategory from './ModalAddCategory';
import Input from '~/components/Input';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function ItemRecipeManagement() {
    const listTypeForm = ['Menu Info', 'Item Policy', 'Time Service', 'Discount apply key'];

    const [selectedRowItemRecipe, setSelectedRowItemRecipe] = useState(null);
    const [selectedRowCategory, setSelectedRowCategory] = useState(null);
    const [typeForm, setTypeForm] = useState(listTypeForm[0]);
    const [modalAddCategory, setModalAddCategory] = useState(false);

    const dataTableCategory = [
        { category: ' 돼지고기 Thit Heo TD ' },
        { category: ' 돼지고기 세트 Thit Heo SET TD ' },
        { category: ' 사이드메뉴 ' },
        { category: ' 소고기 세트 Thit Bo SET TD ' },
        { category: '  점심특선메뉴 Thuc don dac biet bua trua TD  ' },
        { category: '  them topping  ' },
        { category: '  MEMBERSHIP  ' },
        { category: '  음료 Do uong TD  ' },
    ];
    const columnsCategory = [{ name: 'Category', selector: (row) => row.category, sortable: true }];
    const dataCategory = dataTableCategory.map((value, index) => ({ ...value, id: index + 1 }));

    const dataTableItemRecipe = [
        { menu: ' TriangleFruitCake과일생크림조각케익 ', price: '150,000', dateModified: '02/08/2024 3:39:53 CH' },
        { menu: '  망고요거트케익Banhkemxoaisuachua  ', price: '75,000', dateModified: '02/08/2024 3:39:53 CH' },
        { menu: '  바스크치즈케이크Banhphomaichay  ', price: '80,000', dateModified: '02/08/2024 3:39:53 CH' },
        { menu: '  망고크림치즈타르트MangoCreamCheeseTart  ', price: '100,000', dateModified: '02/08/2024 3:39:53 CH' },
        { menu: '  블루베리요거트Banhkemsuachuavietquat  ', price: '70,000', dateModified: '02/08/2024 3:39:53 CH' },
        {
            menu: '   자몽크림치즈타르트GrapefruitCreamCheeseTart   ',
            price: '10,000',
            dateModified: '02/08/2024 3:39:53 CH',
        },
        { menu: '   티라미슈Tiramisu   ', price: '15,000', dateModified: '02/08/2024 3:39:53 CH' },
    ];

    const columnsItemRecipe = [
        { name: 'Menu', selector: (row) => row.menu, sortable: true },
        { name: 'Price', selector: (row) => row.price, sortable: true, width: '120px' },
        { name: 'Date modified', selector: (row) => row.dateModified, sortable: true, width: '160px' },
    ];

    const dataItemRecipe = dataTableItemRecipe.map((value, index) => ({ ...value, id: index + 1 }));

    const changeTypeForm = (value) => {
        setTypeForm(value);
    };

    const openModalAddCategory = () => {
        setModalAddCategory(true);
    };

    return (
        <TitleLayout title={config.nameMap.itemLevel3.ITEM_RECEIPT_MANAGEMENT.Visiblename}>
            <div className={cx('flex max-lg:flex-col')}>
                {/* table */}
                <div className={cx('w-[40%] pr-4 max-lg:!w-full max-lg:pr-0 lg:mr-4')}>
                    <div className={cx('mb-2 flex justify-end')}>
                        <Button red onClick={openModalAddCategory}>
                            Add Category
                        </Button>
                    </div>
                    <div className={cx('mb-4')}>
                        <TableCustom
                            className={cx('mb-4 h-[200px]')}
                            columns={columnsCategory}
                            data={dataCategory}
                            selectedRow={selectedRowCategory}
                            setSelectedRow={setSelectedRowCategory}
                        />
                    </div>
                    <div className={cx('')}>
                        <div className={cx('flex items-center justify-end')}>
                            <Input className={cx('mr-2')} />
                            <Button blue>Search</Button>
                        </div>
                        <TableCustom
                            className={cx('h-[300px]')}
                            columns={columnsItemRecipe}
                            data={dataItemRecipe}
                            showHideList
                            selectedRow={selectedRowItemRecipe}
                            setSelectedRow={setSelectedRowItemRecipe}
                        />
                    </div>
                </div>
                {/* form */}
                <div className={cx('flex-1')}>
                    <div className={cx('mb-4 flex gap-2 max-lg:mt-6')}>
                        <Button orange>New</Button>
                        <Button green>Save</Button>
                        <Button red>Apply All</Button>
                        <Button teal>Excel Upload</Button>
                    </div>
                    <div className={cx('flex flex-wrap')}>
                        {listTypeForm.map((value, index) => (
                            <Button
                                key={index}
                                onClick={() => changeTypeForm(value)}
                                className={cx(value === typeForm && '!bg-primary-color !text-text-color-secondnary')}
                            >
                                {value}
                            </Button>
                        ))}
                    </div>
                    <FormMenuInfo typeForm={typeForm} />
                    <FormItemPolicy typeForm={typeForm} />
                    <FormTimeService typeForm={typeForm} />
                    <FormDiscountApplyKey typeForm={typeForm} />
                </div>
            </div>
            <ModalAddCategory isModal={modalAddCategory} setIsModal={setModalAddCategory} />
        </TitleLayout>
    );
}

export default ItemRecipeManagement;
