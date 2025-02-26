import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { CiStar } from 'react-icons/ci';
import { FaHouse } from 'react-icons/fa6';

import styles from './CardItem.module.scss';
import IconCustom from '~/components/IconCustom';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const CardItem = ({ item }) => {
    const handleClickMark = (e, item) => {
        e.stopPropagation(); // Ngăn không cho sự kiện nổi lên thẻ bên ngoài
    };

    const Comp = item.active ? Link : 'div';
    return (
        <Comp
            className={cx(
                'relative mb-3 mr-3 h-[110px] w-[135px] cursor-pointer border-2 border-solid border-primary-color',
                'relative flex flex-col rounded',
                item.active && 'hover:translate-y-[-1px] hover:opacity-70 hover:shadow-xl',
                !item.active && '!cursor-not-allowed',
                'transition-all duration-300 ease-in-out',
                'CardItem',
            )}
            to={item.to}
        >
            <IconCustom
                icon={CiStar}
                className={cx('absolute left-1 top-1 hover:text-red-500')}
                size={14}
                onClick={(e) => handleClickMark(e, item)}
            />
            <div className={cx('flex h-[60px] items-center justify-center')}>
                <IconCustom icon={item.icon || FaHouse} size={28} />
            </div>
            <div
                className={cx(
                    'flex-1 bg-primary-color text-text-color-secondnary',
                    'flex items-center justify-center text-center',
                )}
            >
                {item.name}
            </div>
            <div className={cx('absolute h-full w-full bg-red-500 opacity-40', item.active && 'hidden')}></div>
        </Comp>
    );
};

CardItem.propTypes = {
    item: PropTypes.object,
};

export default CardItem;
