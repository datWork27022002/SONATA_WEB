import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FaStore } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import IconCustom from '~/components/IconCustom';
import { handleLogicGetStores, removeDiacritics } from '~/utils/handleLogic';
import { updateStores } from '~/redux/dataStoreSlice';

const cx = classNames.bind(styles);

function SearchStore() {
    const [stores, setStores] = useState([]);
    const [store, setStore] = useState(stores[0] || '');
    const [visibleStore, setVisibleStore] = useState(false);

    const [value, setValue] = useState('');
    const [listVisibleStore, setListVisibleStore] = useState(stores);

    const dispatch = useDispatch();
    const { t } = useTranslation('translation', { keyPrefix: 'Header' });

    const handleChange = (e) => {
        setValue(e.target.value);
        const newListStore = stores.filter((item) =>
            removeDiacritics(item.storeName).includes(removeDiacritics(e.target.value)),
        );
        setListVisibleStore(newListStore);
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
                placeholder={t('search')}
                name="store"
                className={cx('border-[1px] border-solid border-primary-color p-1')}
                value={value}
                onChange={handleChange}
            />
            <ul className={cx('max-h-32 overflow-y-auto')}>
                {listVisibleStore.map((item, index) => (
                    <li
                        key={index}
                        className={cx('cursor-pointer p-2 hover:bg-primary-color')}
                        onClick={() => handleClickStore(item.storeName)}
                    >
                        {item.storeName}
                    </li>
                ))}
            </ul>
        </div>
    );

    const handeGetStores = async () => {
        const res = await handleLogicGetStores();

        if (!res) return;
        dispatch(updateStores(res));

        setStores(res);
        setListVisibleStore(res);
        setStore(res[0].storeName);
    };

    useEffect(() => {
        handeGetStores();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    <span className={cx('max-md:hidden')}>{t('select_store') + '('}</span>
                    <span className={cx('ml-1')}> {`${store}`}</span>
                    <span className={cx('max-md:hidden')}>{')'}</span>
                    <IconCustom icon={IoIosArrowDown} />
                </div>
            </Tippy>
        </div>
    );
}

export default SearchStore;
