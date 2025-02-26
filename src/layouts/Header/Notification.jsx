import classNames from 'classnames/bind';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBullhorn } from 'react-icons/fa6';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import IconCustom from '~/components/IconCustom';

const cx = classNames.bind(styles);

function Notification() {
    const [visibleNotification, setVisibleNotification] = useState(false);

    const { t } = useTranslation('translation', { keyPrefix: 'Header' });

    const openPopupNotification = () => {
        setVisibleNotification(!visibleNotification);
    };

    const RenderNotification = () => (
        <div
            className={cx(
                'min-h-20 min-w-[300px] overflow-hidden rounded bg-background-color p-2 text-text-color',
                'border-[1px] border-solid border-primary-color',
            )}
        >
            <div className={cx('border-b-2 border-gray-400')}></div>
            <div className={cx('flex justify-end')}>
                <button className={cx('mt-2 rounded bg-primary-color px-2 py-1 text-text-color-secondnary')}>
                    {t('more')}
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
                    <span className={cx('ml-1', 'max-md:hidden')}> {t('notice')}</span>
                </div>
            </Tippy>
        </div>
    );
}

export default Notification;
