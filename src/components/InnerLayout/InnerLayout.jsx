import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Fragment, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from './InnerLayout.module.scss';
import ItemFilter from '~/components/ItemFilter';
import CardItem from '~/components/CardItem';

const cx = classNames.bind(styles);

const InnerLayout = ({ title, menuStructure }) => {
    const menuCategories = Object.keys(menuStructure);
    const [isSelected, setIsSelected] = useState(0);
    const [listItem, setListItem] = useState(menuStructure[menuCategories[0]]);

    const navigate = useNavigate();
    const { hash } = useLocation();

    useEffect(() => {
        if (menuCategories[0] === 'noFilter') return;

        if (hash) {
            const index = hash.toString().slice(1);
            if (index >= menuCategories.length) {
                navigate(`#${menuCategories.length - 1}`);
                return;
            }
            const categories = menuCategories[index];
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
                {title}
            </div>
            {menuCategories[0] !== 'noFilter' && (
                <ul
                    className={cx(
                        'mt-4 flex text-text-color-fourth',
                        'max-w-[950px] flex-wrap border-b-[1px] border-solid border-b-[#ddd]',
                    )}
                >
                    {menuCategories.map((value, index) => (
                        <ItemFilter key={index} index={index} content={value} isSelected={isSelected} />
                    ))}
                </ul>
            )}
            <ul className={cx('mt-6 flex max-w-[950px] flex-wrap text-primary-color', 'max-md:justify-center')}>
                {listItem.map((value, index) => (
                    <CardItem key={index} item={value} />
                ))}
            </ul>
        </Fragment>
    );
};

InnerLayout.propTypes = {
    menuCategories: PropTypes.array,
    title: PropTypes.string,
};

export default InnerLayout;
