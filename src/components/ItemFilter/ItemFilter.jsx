import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import styles from './ItemFilter.module.scss';

const cx = classNames.bind(styles);

const ItemFilter = ({ content, index, isSelected }) => {
    const navigate = useNavigate();

    const handleClickTypeItem = (index) => {
        navigate(`#${index}`);
    };

    return (
        <li
            className={cx(
                'cursor-pointer bg-[#e5e5e5] px-3 py-2 font-[13px] hover:bg-primary-color',
                'border-[1px] border-solid border-white',
                'hover:border-b-2 hover:border-solid hover:border-b-[#333]',
                isSelected === index && 'border-b-2 border-solid border-b-[#333] !bg-primary-color',
            )}
            onClick={() => handleClickTypeItem(index)}
        >
            {content}
        </li>
    );
};

ItemFilter.propTypes = {
    content: PropTypes.string,
    index: PropTypes.number,
};

export default ItemFilter;
