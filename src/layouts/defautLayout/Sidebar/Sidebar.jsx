import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaBookBookmark, FaScrewdriverWrench, FaUser, FaChartBar, FaCommentSms } from 'react-icons/fa6';
import { PiProjectorScreenChartFill } from 'react-icons/pi';
import { TbReport, TbSettings } from 'react-icons/tb';
import { BiSolidFoodMenu } from 'react-icons/bi';

import styles from './Sidebar.module.scss';
import IconCustom from '~/components/IconCustom';
import config from '~/config';
import { Fragment } from 'react';

const cx = classNames.bind(styles);
const menus = [
    { to: '', name: 'Bookmark', icon: FaBookBookmark },
    { to: '', name: 'Basic Settings', icon: FaScrewdriverWrench },
    { to: '', name: 'Manager Function', icon: PiProjectorScreenChartFill },
    { to: '', name: 'Customer', icon: FaUser },
    { to: '', name: 'Operation Reports', icon: TbReport },
    { to: '', name: 'Sale Reports', icon: FaChartBar },
    { to: '', name: 'Purchase Order', icon: BiSolidFoodMenu },
    { to: '', name: 'Settings', icon: TbSettings },
    { to: '', name: 'BIZ SMS', icon: FaCommentSms },
];
function Sidebar() {
    const { shrinkSidebar, visibleSidebar } = useSelector((state) => state.theme);
    return (
        <div
            className={cx(
                'min-w-[70px] sm:h-screen bg-[#36474e] text-text-color-secondnary ',
                'flex flex-col items-center z-10',
                'transition duration-1000',
                'max-sm:absolute max-sm:top-10 max-sm:w-screen ',
                !visibleSidebar && 'max-sm:translate-x-[-125%]',
            )}
        >
            {/* logo */}
            <Link className={cx('mt-2', 'max-sm:hidden')} to={config.routes.HOME}>
                {shrinkSidebar ? (
                    <img src={require('~/assets/img/logoSmall.png')} alt="" className={cx('w-[40px]')} />
                ) : (
                    <img src={require('~/assets/img/logo.png')} alt="" className={cx('w-[150px]')} />
                )}
            </Link>

            {/* infor User */}
            <div className={cx('pt-9 flex flex-col items-center', 'max-sm:hidden')}>
                <img
                    src={require('~/assets/img/avatar.jpg')}
                    alt=""
                    className={cx(
                        'cursor-pointer',
                        'border-primary-color border-solid border-2',
                        shrinkSidebar ? 'w-14' : 'w-24 h-24 ',
                    )}
                />
                {!shrinkSidebar && (
                    <Fragment>
                        <span className={cx('mt-2')}>Tan dat</span>
                        <IconCustom icon={IoMdArrowDropdown} className={cx('cursor-pointer')} />
                    </Fragment>
                )}
            </div>

            {/* menu */}
            <ul className={cx('w-full')}>
                {menus.map((item, index) => (
                    <li key={index}>
                        <Link
                            className={cx(
                                'flex py-3 px-2 items-center ',
                                'hover:bg-background-color hover:text-primary-color',
                                shrinkSidebar && 'justify-center',
                            )}
                        >
                            <IconCustom icon={item.icon} size={22} className={cx('mr-2')} />
                            {!shrinkSidebar && item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
