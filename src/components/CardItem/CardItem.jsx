import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { CiStar } from 'react-icons/ci';
import { FaHouse } from 'react-icons/fa6';

import styles from './CardItem.module.scss';
import IconCustom from '~/components/IconCustom';

const cx = classNames.bind(styles);

const CardItem = ({ item }) => {
    const handleClickMark = (e, item) => {
        e.stopPropagation(); // Ngăn không cho sự kiện nổi lên thẻ bên ngoài
    };
    return (
        <li
            className={cx(
                'mb-3 mr-3 h-[110px] w-[135px] cursor-pointer border-2 border-solid border-primary-color',
                'relative flex flex-col hover:translate-y-[-1px] hover:opacity-80',
                'CardItem',
            )}
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
        </li>
    );
};

CardItem.propTypes = {
    item: PropTypes.object,
};

export default CardItem;
