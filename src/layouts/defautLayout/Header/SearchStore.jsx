import classNames from 'classnames/bind';
import { useState } from 'react';
import { FaStore } from 'react-icons/fa6';
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
                'min-w-[150px] bg-background-color text-text-color p-2  rounded overflow-hidden',
                'border-primary-color border-solid border-[1px]',
            )}
        >
            <input
                placeholder="Search..."
                name="store"
                className={cx('border-primary-color border-solid border-[1px] p-1')}
                value={value}
                onChange={handleChange}
            />
            <ul className={cx('overflow-y-auto max-h-32')}>
                {listStore.map((item, index) => (
                    <li
                        key={index}
                        className={cx('p-2 cursor-pointer hover:bg-primary-color')}
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
                </div>
            </Tippy>
        </div>
    );
}

export default SearchStore;
