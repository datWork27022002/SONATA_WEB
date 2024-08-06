import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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

    const handleShinkSidebar = () => {
        dispatch(updateShrinkSidebar());
    };

    const handleVisibelSidebar = () => {
        dispatch(updateVisibleSidebar());
    };
    return (
        <div className={cx('!z-20 flex h-10 w-full justify-between bg-primary-color text-xs', 'max-md:fixed')}>
            <div className={cx('flex')}>
                {/* Home */}
                <div className={cx('item-card', 'card-left', '!hidden', 'max-sm:!flex')} to={config.routes.HOME}>
                    <IconCustom icon={FaHouse} />
                </div>
                {/* Menu */}
                <div className={cx('item-card', 'card-left', '!hidden', 'max-sm:!flex')} onClick={handleVisibelSidebar}>
                    <IconCustom icon={MdMenu} />
                </div>
                {/* Notice */}
                <Notification />

                {/* Store */}
                <SearchStore />

                {/* web login */}
                <Link className={cx('item-card', 'card-left', 'max-sm:!hidden')} to={config.routes.WEBLOGIN}>
                    <IconCustom icon={FaUserGear} />
                    <div className={cx('ml-1', 'max-md:hidden')}> Web login</div>
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
                <Link to={config.routes.LOGIN} className={cx('item-card', 'card-right')}>
                    <IconCustom icon={FaRightToBracket} />
                </Link>
            </div>
        </div>
    );
}

export default Header;
