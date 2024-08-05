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

const { routes } = config;

const menus = [
    { to: '', name: 'Bookmark', icon: FaBookBookmark },
    { to: routes.BasicSettings.BASICSETTINGS, name: 'Basic Settings', icon: FaScrewdriverWrench },
    { to: routes.ManagerFunction.MANAGERFUNCTION, name: 'Manager Function', icon: PiProjectorScreenChartFill },
    { to: routes.Customer.CUSTOMER, name: 'Customer', icon: FaUser },
    { to: routes.OperationReports.OPERATIONREPORTS, name: 'Operation Reports', icon: TbReport },
    { to: routes.SaleReports.SALEREPORTS, name: 'Sale Reports', icon: FaChartBar },
    { to: routes.PurchaseOrder.PURCHASEORDER, name: 'Purchase Order', icon: BiSolidFoodMenu },
    { to: routes.Settings.SETTINGS, name: 'Settings', icon: TbSettings },
    { to: routes.BIZSMS.BIZSMS, name: 'BIZ SMS', icon: FaCommentSms },
];
function Sidebar() {
    const { shrinkSidebar, visibleSidebar } = useSelector((state) => state.theme);
    return (
        <div
            className={cx(
                'min-w-[70px] bg-fifth-color text-text-color-secondnary sm:h-screen',
                'z-10 flex flex-col items-center',
                'transition duration-300',
                'max-sm:absolute max-sm:top-10 max-sm:w-screen',
                'max-lg:mix-w[150px]',
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
            <div className={cx('flex flex-col items-center pt-9', 'max-sm:hidden')}>
                <img
                    src={require('~/assets/img/avatar.jpg')}
                    alt=""
                    className={cx(
                        'cursor-pointer',
                        'border-2 border-solid border-primary-color',
                        shrinkSidebar ? 'w-14' : 'h-24 w-24',
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
                            to={item.to}
                            className={cx(
                                'flex items-center px-2 py-3',
                                'hover:bg-background-color hover:text-primary-color',
                                shrinkSidebar && 'justify-center',
                                'max-md:border-b-[1px] max-md:border-solid max-md:border-b-white',
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
