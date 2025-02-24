import classNames from 'classnames/bind';
import React, { useState, useRef, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaBookBookmark, FaScrewdriverWrench, FaUser, FaChartBar, FaCommentSms } from 'react-icons/fa6';
import { PiProjectorScreenChartFill } from 'react-icons/pi';
import { TbReport, TbSettings } from 'react-icons/tb';
import { BiSolidFoodMenu } from 'react-icons/bi';

import styles from './Sidebar.module.scss';
import IconCustom from '~/components/IconCustom';
//import ModalInformationUser from './ModalInformationUser';
import config from '~/config';
import { updateVisibleSidebar } from '~/redux/themeSlice';

const cx = classNames.bind(styles);

const { routes } = config;

const menus = [
    { to: routes.BOOKMARK, name: 'Bookmark', icon: FaBookBookmark },
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
    const [avatar, setAvatar] = useState(null);
    // const [modalUser, setModalUser] = useState(false);

    const dispatch = useDispatch();
    const { shrinkSidebar, visibleSidebar } = useSelector((state) => state.theme);
    const fileInputRef = useRef(null);

    const hideSideBar = () => {
        dispatch(updateVisibleSidebar());
    };

    const handleChangeAvatar = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const OpenModalUser = () => {
        // setModalUser(true);
    };

    return (
        <Fragment>
            <div
                className={cx(
                    'fixed bg-fifth-color text-text-color-secondnary sm:h-screen',
                    'z-10 flex flex-col items-center',
                    'transition-all duration-300 ease-in-out',
                    'max-sm:fixed max-sm:top-10 max-sm:w-screen',
                    'max-lg:min-w[200px]',
                    shrinkSidebar ? 'w-sidebar-shrink' : 'w-sidebar',
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
                {/* <div className={cx('flex flex-col items-center pt-9', 'max-sm:hidden')}>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }} // Ẩn phần tử input
                        ref={fileInputRef}
                        onChange={handleChangeAvatar}
                    />
                    <img
                        src={avatar || require('~/assets/img/avatar.jpg')}
                        alt=""
                        className={cx(
                            'cursor-pointer overflow-hidden rounded',
                            'border-2 border-solid border-primary-color',
                            shrinkSidebar ? 'h-14 w-14' : 'h-24 w-24',
                        )}
                        onClick={handleImageClick}
                    />
                    {!shrinkSidebar && (
                        <Fragment>
                            <span className={cx('mt-2')}>Hyojung</span>
                            <div className={cx('cursor-pointer')} onClick={OpenModalUser}>
                                <IconCustom icon={IoMdArrowDropdown} size={20} />
                            </div>
                        </Fragment>
                    )}
                </div> */}

                {/* menu */}
                <ul className={cx('mt-10 w-full px-2')}>
                    {menus.map((item, index) => (
                        <li key={index}>
                            <Link
                                onClick={hideSideBar}
                                to={item.to}
                                className={cx(
                                    'flex items-center gap-4 rounded-lg py-3 pl-2 text-[14px] font-medium',
                                    'hover:bg-neutral-500',
                                    shrinkSidebar && 'justify-center',
                                    'max-md:border-b max-md:border-solid max-md:border-b-white',
                                    'border-solid border-fifth-color md:border',
                                    'transition-all duration-300 ease-in-out',
                                )}
                            >
                                <IconCustom icon={item.icon} size={22} className={cx('flex-none')} />
                                <span className={cx(shrinkSidebar && 'hidden')}>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* <ModalInformationUser avatar={avatar} modalUser={modalUser} setModalUser={setModalUser} /> */}
        </Fragment>
    );
}

export default Sidebar;
