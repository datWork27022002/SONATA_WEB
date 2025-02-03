import classNames from 'classnames/bind';
import { Fragment, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './Settings.module.scss';
import ItemFilter from '~/components/ItemFilter';
import CardItem from '~/components/CardItem';
import ChoosePos from './ChoosePos';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function Settings() {
    const menuStructure = config.menuStructure.SETTINGS;
    const menuCategories = Object.keys(menuStructure);
    const [isSelected, setIsSelected] = useState(0);
    const [listItem, setListItem] = useState(menuStructure[menuCategories[0]]);
    const [category, setCategory] = useState('');

    const navigate = useNavigate();
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const index = hash.toString().slice(1);
            if (index >= menuCategories.length) {
                navigate(`#${menuCategories.length - 1}`);
                return;
            }
            const categories = menuCategories[index];
            setCategory(categories);
            setListItem(menuStructure[categories]);
            setIsSelected(Number(index));
        } else {
            navigate('#0');
            setIsSelected(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [hash]);

    return (
        <Fragment>
            <div className={cx('my-2 py-2 text-xl font-semibold', 'border-b-[1px] border-solid border-b-[#ddd]')}>
                {'Settings'}
            </div>
            {/* Menu filter */}
            <ul
                className={cx(
                    'mt-4 flex text-text-color-fourth',
                    'flex-wrap border-b-[1px] border-solid border-b-[#ddd]',
                )}
            >
                {menuCategories.map((value, index) => (
                    <ItemFilter key={index} index={index} content={value} isSelected={isSelected} />
                ))}
            </ul>

            {category === 'POS' && <ChoosePos />}

            {/* Menu Card */}
            <ul className={cx('mt-6 flex flex-wrap text-primary-color', 'max-md:justify-center')}>
                {listItem.map((value, index) => (
                    <CardItem key={index} item={value} />
                ))}
            </ul>
            {(category === 'POS' || category === 'Store') && (
                <div className={cx('ml-4 mt-2 text-sm text-[#2e2e2e]')}>
                    All POS devices may be run with the identical setting by using the store configuration
                </div>
            )}
        </Fragment>
    );
}

export default Settings;
