import { FaPlateWheat, FaMessage, FaAnglesLeft, FaAnglesRight, FaMobileScreen } from 'react-icons/fa6';
import { FaReceipt, FaArrowLeft, FaArrowRight, FaLock, FaChartPie, FaWifi } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';
import { IoIosTime, IoIosSettings } from 'react-icons/io';
import { IoServer } from 'react-icons/io5';
import { CiServer, CiDeliveryTruck } from 'react-icons/ci';
import { RiArchiveDrawerFill, RiMiniProgramFill } from 'react-icons/ri';
import { MdOutlineStackedLineChart, MdOutlineResetTv, MdRoomService } from 'react-icons/md';

export const listFuntionSetting = [
    { id: 1, name: 'Dine-in', icon: FaPlateWheat, disable: false },
    { id: 2, name: 'Quick Serve', icon: MdRoomService, disable: false },
    { id: 3, name: 'Receipt Management', icon: FaReceipt, disable: false },
    { id: 4, name: 'Search Order', icon: FaMessage, disable: false },
    { id: 5, name: 'Cashier In', icon: FaAnglesLeft, disable: false },
    { id: 6, name: 'Cashier Out', icon: FaAnglesRight, disable: false },
    { id: 7, name: 'Pay In', icon: FaArrowLeft, disable: false },
    { id: 8, name: 'Pay Out', icon: FaArrowRight, disable: false },
    { id: 9, name: 'Tip Adjustments', icon: BsCashCoin, disable: false },
    { id: 10, name: 'Time Card', icon: IoIosTime, disable: true },
    { id: 11, name: 'Safe Mode', icon: FaLock, disable: false },
    { id: 12, name: 'Cash Drawer', icon: RiArchiveDrawerFill, disable: true },
    { id: 13, name: 'Operations', icon: IoIosSettings, disable: true },
    { id: 14, name: 'ASP', icon: MdOutlineStackedLineChart, disable: false },
    { id: 15, name: 'Sales Report', icon: FaChartPie, disable: false },
    { id: 16, name: 'Restart The Program', icon: RiMiniProgramFill, disable: true },
    { id: 17, name: 'RF Order', icon: FaWifi, disable: false },
    { id: 18, name: 'Account Management', icon: IoServer, disable: true },
    { id: 19, name: 'Deposit Management', icon: CiServer, disable: true },
    { id: 20, name: 'Delivery', icon: CiDeliveryTruck, disable: true },
    { id: 21, name: 'Kiosk Management', icon: MdOutlineResetTv, disable: true },
    { id: 22, name: 'Room Order', icon: FaMobileScreen, disable: true },
];
