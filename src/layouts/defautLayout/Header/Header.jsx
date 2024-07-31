import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FaRightToBracket, FaUserGear } from 'react-icons/fa6';
import { MdZoomOutMap } from 'react-icons/md';

import styles from './Header.module.scss';
import SearchStore from './SearchStore';
import ChooseColor from './ChooseColor';
import Notification from './Notification';
import IconCustom from '~/components/IconCustom';
import config from '~/config';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('bg-primary-color w-full h-10 flex justify-between text-xs')}>
            <div className={cx('flex')}>
                {/* Notice */}
                <Notification />

                {/* Store */}
                <SearchStore />

                {/* web login */}
                <div className={cx('item-card', 'card-left')}>
                    <IconCustom icon={FaUserGear} />
                    <Link className={cx('ml-1', 'max-md:hidden')}> Web login</Link>
                </div>
            </div>

            <div className={cx('flex')}>
                {/* change theme */}
                <ChooseColor />

                {/* zoom Sidebar */}
                <div className={cx('item-card', 'card-right')}>
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
