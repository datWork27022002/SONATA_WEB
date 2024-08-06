import classNames from 'classnames/bind';
import { IoGrid } from 'react-icons/io5';
import { FaThList } from 'react-icons/fa';

import styles from './Bookmark.module.scss';
import IconCustom from '~/components/IconCustom';
import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function Bookmark() {
    const [switchLayout, setSwitchLayout] = useState(false);
    return (
        <div
            className={cx(
                'my-2 py-2 text-xl font-semibold',
                'flex items-center justify-between border-b-[1px] border-solid border-b-[#ddd]',
            )}
        >
            <span>Bookmark</span>
            <div
                onClick={() => {
                    setSwitchLayout(!switchLayout);
                }}
                className={cx(
                    'mb-[-12px] border-[1px] border-solid border-primary-color p-1',
                    'hover:bg-primary-color hover:text-text-color-secondnary',
                )}
            >
                <IconCustom icon={switchLayout ? IoGrid : FaThList} size={18} />
            </div>
        </div>
    );
}

export default Bookmark;
