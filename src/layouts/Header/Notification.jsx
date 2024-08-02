import classNames from 'classnames/bind';
import { useState } from 'react';
import { FaBullhorn } from 'react-icons/fa6';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import IconCustom from '~/components/IconCustom';

const cx = classNames.bind(styles);

function Notification() {
    const [visibleNotification, setVisibleNotification] = useState(false);

    const openPopupNotification = () => {
        setVisibleNotification(!visibleNotification);
    };

    const RenderNotification = () => (
        <div
            className={cx(
                'min-w-[300px] bg-background-color text-text-color p-2  rounded overflow-hidden min-h-20',
                'border-primary-color border-solid border-[1px]  ',
            )}
        >
            <div className={cx('border-b-2 border-gray-400')}></div>
            <div className={cx(' flex justify-end')}>
                <button className={cx('bg-primary-color rounded py-1 px-2 mt-2 text-text-color-secondnary')}>
                    More
                </button>
            </div>
        </div>
    );

    return (
        <div className={cx('max-sm:hidden')}>
            <Tippy
                render={RenderNotification}
                interactive
                visible={visibleNotification}
                onClickOutside={openPopupNotification}
                placement="bottom-start"
            >
                <div className={cx('item-card', 'card-left')} onClick={openPopupNotification}>
                    <IconCustom icon={FaBullhorn} />
                    <span className={cx('ml-1', 'max-md:hidden')}> Notice</span>
                </div>
            </Tippy>
        </div>
    );
}

export default Notification;
