import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import { FaRightToBracket, FaUserGear, FaHouse } from 'react-icons/fa6';
import { MdZoomOutMap, MdMenu } from 'react-icons/md';

import styles from './Header.module.scss';
import SearchStore from './SearchStore';
import ChooseColor from './ChooseColor';
import Notification from './Notification';
import IconCustom from '~/components/IconCustom';
import { updateShrinkSidebar, updateVisibleSidebar } from '~/redux/themeSlice';
import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [, , removeCookie] = useCookies(['token']); // Lấy cookie
    const { t } = useTranslation('translation', { keyPrefix: 'Header' });

    const handleShinkSidebar = () => {
        dispatch(updateShrinkSidebar());
    };

    const handleVisibelSidebar = () => {
        dispatch(updateVisibleSidebar());
    };

    const handleLogout = () => {
        removeCookie('token', { path: '/' });
        navigate(config.routes.LOGIN);
    };
    return (
        <div className={cx('sticky top-0 !z-20 flex h-10 justify-between bg-primary-color text-xs')}>
            <div className={cx('flex')}>
                {/* Home */}
                <Link className={cx('item-card', 'card-left', '!hidden', 'max-sm:!flex')} to={config.routes.HOME}>
                    <IconCustom icon={FaHouse} />
                </Link>
                {/* Menu */}
                <div className={cx('item-card', 'card-left', '!hidden', 'max-sm:!flex')} onClick={handleVisibelSidebar}>
                    <IconCustom icon={MdMenu} />
                </div>
                {/* Notice */}
                <Notification />

                {/* Store */}
                <SearchStore />

                {/* web login */}
                <Link className={cx('item-card', 'card-left', 'max-sm:!hidden')} to={config.routes.WebLogin.WEB_LOGIN}>
                    <IconCustom icon={FaUserGear} />
                    <div className={cx('ml-1', 'max-md:hidden')}>{t('web_login')}</div>
                </Link>
            </div>

            <div className={cx('flex')}>
                {/* change theme */}
                <ChooseColor />

                {/* zoom Sidebar */}
                <div className={cx('item-card', 'card-right', 'max-sm:!hidden')} onClick={handleShinkSidebar}>
                    <IconCustom icon={MdZoomOutMap} />
                </div>

                {/* log out */}
                <div className={cx('item-card', 'card-right')} onClick={handleLogout}>
                    <IconCustom icon={FaRightToBracket} />
                </div>
            </div>
        </div>
    );
}

export default Header;
