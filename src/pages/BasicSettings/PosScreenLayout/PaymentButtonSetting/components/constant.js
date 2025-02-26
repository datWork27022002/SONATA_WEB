import { FaPlateWheat, FaMessage, FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';
import { FaReceipt, FaArrowLeft, FaArrowRight, FaLock } from 'react-icons/fa';
import { BsCashCoin } from 'react-icons/bs';
import { IoIosTime } from 'react-icons/io';
import { RiArchiveDrawerFill } from 'react-icons/ri';
import { MdRoomService } from 'react-icons/md';

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
];
