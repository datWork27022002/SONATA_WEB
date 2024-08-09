import classNames from 'classnames/bind';
import { useState } from 'react';
import { FaStore } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import IconCustom from '~/components/IconCustom';

const cx = classNames.bind(styles);

const stores = ['hyojung1', 'ahyojung2', 'bhyojung3', 'bhyojung4', 'hyojung5', 'hyojung6', 'hyojung7', 'Chyojung8'];

function SearchStore() {
    const [store, setStore] = useState(stores[0]);
    const [visibleStore, setVisibleStore] = useState(false);

    const [value, setValue] = useState('');
    const [listStore, setListStore] = useState(stores);

    const handleChange = (e) => {
        setValue(e.target.value);
        const newListStore = stores.filter((item) => item.startsWith(e.target.value));
        setListStore(newListStore);
    };

    const handleClickStore = (item) => {
        setStore(item);
        openPopupChooseStore();
    };

    const openPopupChooseStore = () => {
        setVisibleStore(!visibleStore);
    };

    const RenderSearchStore = () => (
        <div
            className={cx(
                'min-w-[150px] overflow-hidden rounded bg-background-color p-2 text-text-color',
                'border-[1px] border-solid border-primary-color',
            )}
        >
            <input
                placeholder="Search..."
                name="store"
                className={cx('border-[1px] border-solid border-primary-color p-1')}
                value={value}
                onChange={handleChange}
            />
            <ul className={cx('max-h-32 overflow-y-auto')}>
                {listStore.map((item, index) => (
                    <li
                        key={index}
                        className={cx('cursor-pointer p-2 hover:bg-primary-color')}
                        onClick={() => handleClickStore(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div>
            <Tippy
                render={RenderSearchStore}
                interactive
                visible={visibleStore}
                onClickOutside={openPopupChooseStore}
                placement="bottom-start"
            >
                <div onClick={openPopupChooseStore} className={cx('item-card', 'card-left')}>
                    <IconCustom icon={FaStore} />
                    <span className={cx('max-md:hidden')}>{'Select Store('}</span>
                    <span className={cx('ml-1')}> {`${store}`}</span>
                    <span className={cx('max-md:hidden')}>{')'}</span>
                    <IconCustom icon={IoIosArrowDown} />
                </div>
            </Tippy>
        </div>
    );
}

export default SearchStore;
