import {
    BsFillHousesFill,
    BsFilePostFill,
    BsFillInfoSquareFill,
    BsCalendar2MonthFill,
    BsCalendar2DayFill,
    BsCalendar2WeekFill,
    BsReceipt,
    BsFilePost,
} from 'react-icons/bs';
import {
    FaStore,
    FaUsers,
    FaUserEdit,
    FaReceipt,
    FaWrench,
    FaLaptopHouse,
    FaUserCog,
    FaFilePowerpoint,
    FaCalendar,
    FaChartPie,
    FaUserCheck,
    FaIdCard,
    FaUserSecret,
    FaNewspaper,
    FaAdjust,
    FaSortAmountUp,
    FaWindowClose,
    FaInfoCircle,
    FaPager,
    FaWindows,
    FaSdCard,
    FaQrcode,
    FaDatabase,
    FaBarcode,
    FaBoxTissue,
    FaExchangeAlt,
    FaClipboardList,
    FaUserLock,
} from 'react-icons/fa';
import {
    MdOutlineContentPasteSearch,
    MdOutlineScreenSearchDesktop,
    MdKitchen,
    MdSoupKitchen,
    MdOutlineGroups2,
    MdRememberMe,
    MdCalendarMonth,
    MdInventory,
    MdSubdirectoryArrowLeft,
    MdSubdirectoryArrowRight,
    MdStore,
    MdLanguage,
    MdLocalPrintshop,
    MdOutlinePermDataSetting,
    MdTouchApp,
    MdAddCall,
    MdVideoStable,
} from 'react-icons/md';
import {
    PiRanking,
    PiReceiptX,
    PiNewspaperClippingLight,
    PiStorefrontFill,
    PiMathOperationsFill,
} from 'react-icons/pi';
import {
    FaWarehouse,
    FaChalkboardUser,
    FaCalendarDay,
    FaCashRegister,
    FaTable,
    FaPrint,
    FaPhone,
    FaTableCellsRowLock,
} from 'react-icons/fa6';
import {
    TbHomeSearch,
    TbFileReport,
    TbClockHour10Filled,
    TbCategoryFilled,
    TbCircleNumber2Filled,
    TbDeviceIpadCancel,
} from 'react-icons/tb';
import { GiHamburger, GiPaperBagOpen, GiCash, GiBuyCard, GiWeight } from 'react-icons/gi';
import { IoIosCash, IoMdDocument, IoIosOptions, IoMdOptions, IoIosNotifications, IoIosMail } from 'react-icons/io';
import {
    IoReceiptOutline,
    IoIdCardOutline,
    IoAnalytics,
    IoReceipt,
    IoPhonePortrait,
    IoTimerSharp,
} from 'react-icons/io5';
import { RiDiscountPercentFill, RiUserSearchFill, RiMenuSearchFill, RiBillLine, RiCoinFill } from 'react-icons/ri';
import { VscLayoutMenubar } from 'react-icons/vsc';
import { LiaReceiptSolid, LiaCcAmazonPay } from 'react-icons/lia';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { CiEdit, CiLink, CiCreditCard1, CiCalendarDate, CiBarcode, CiDeliveryTruck } from 'react-icons/ci';
import { TfiAnnouncement } from 'react-icons/tfi';
import { GrDocumentStore, GrDocumentText, GrDocumentTransfer, GrDrawer, GrUserSettings } from 'react-icons/gr';
import { BiDetail, BiSolidDiscount } from 'react-icons/bi';
import { HiReceiptRefund } from 'react-icons/hi';
import { HiDocumentPlus, HiMiniDocumentMinus } from 'react-icons/hi2';
import { TiPrinter } from 'react-icons/ti';
const menuStructure = {
    BASICSETTINGS: {
        'Store Management': [
            { name: 'Group Management', icon: BsFillHousesFill, to: '', mark: false },
            { name: 'Store Info', icon: FaStore, to: '', mark: false },
            { name: 'Store List', icon: TbHomeSearch, to: '', mark: false },
            { name: 'Warehouse Management', icon: FaWarehouse, to: '', mark: false },
            { name: 'Cash Drawer', icon: IoIosCash, to: '', mark: false },
            { name: 'Discount', icon: RiDiscountPercentFill, to: '', mark: true },
        ],
        'Employee Management': [
            { name: 'Employee Group', icon: FaUsers, to: '', mark: false },
            { name: 'Employee Info', icon: FaUserEdit, to: '', mark: false },
            { name: 'Employee List', icon: RiUserSearchFill, to: '', mark: false },
        ],
        'Menu Management': [
            { name: 'Menu Setup', icon: VscLayoutMenubar, to: '', mark: false },
            { name: 'Item Receipt Management', icon: FaReceipt, to: '', mark: false },
            { name: 'Item Receipt Manager', icon: IoReceiptOutline, to: '', mark: false },
            { name: 'Topping Settings', icon: MdSoupKitchen, to: '', mark: false },
            { name: 'Sub Menu', icon: GiHamburger, to: '', mark: false },
            { name: 'Menu Search', icon: RiMenuSearchFill, to: '', mark: true },
            { name: 'Inventory Item Search', icon: MdOutlineContentPasteSearch, to: '', mark: false },
            { name: 'Menu-Board Management', icon: MdOutlineScreenSearchDesktop, to: '', mark: false },
            { name: 'POS Menu-Board', icon: BsFilePostFill, to: '', mark: false },
            { name: 'Category Manager', icon: FaWrench, to: '', mark: false },
            { name: 'Recipe Builder', icon: LiaReceiptSolid, to: '', mark: false },
            { name: 'Recipe Search', icon: AiOutlineFileSearch, to: '', mark: true },
            { name: 'Kitchen Memo', icon: MdKitchen, to: '', mark: false },
            { name: 'Item Management By Strore', icon: FaLaptopHouse, to: '', mark: false },
            { name: 'Change of multilingual name', icon: CiEdit, to: '', mark: false },
            { name: 'Item linked code management', icon: CiLink, to: '', mark: false },
        ],
        'POS Screen Layout': [{ name: 'Employee Group', icon: '' }],
    },
    MANAGERFUNCTION: {
        noFilter: [
            { name: 'Announcement', icon: TfiAnnouncement, to: '', mark: false },
            { name: 'Payroll', icon: LiaCcAmazonPay, to: '', mark: false },
            { name: 'Time Card', icon: IoIdCardOutline, to: '', mark: false },
            { name: 'List of information by force', icon: BsFillInfoSquareFill, to: '', mark: false },
        ],
    },
    CUSTOMER: {
        noFilter: [
            { name: 'Customer Group', icon: MdOutlineGroups2, to: '', mark: false },
            { name: 'Customer Management', icon: FaUserCog, to: '', mark: false },
            { name: 'Membership List', icon: MdRememberMe, to: '', mark: false },
            { name: 'Customer Sales Total', icon: FaChalkboardUser, to: '', mark: false },
            { name: 'Customer Detailed Sales Report', icon: TbFileReport, to: '', mark: false },
            { name: 'Point Report', icon: FaFilePowerpoint, to: '', mark: false },
        ],
    },
    OPERATIONREPORTS: {
        noFilter: [
            { name: 'Monthly Comparison', icon: MdCalendarMonth, to: '', mark: false },
            { name: 'Yearly Comparison', icon: FaCalendar, to: '', mark: false },
            { name: 'Total Category Sales By Store', icon: FaStore, to: '', mark: false },
            { name: 'Total Item Sales By Store', icon: FaStore, to: '', mark: false },
            { name: 'Total Store Sales By Category', icon: FaStore, to: '', mark: false },
            { name: 'Total Sales Summary (By Item)', icon: GrDocumentStore, to: '', mark: false },
            { name: 'Total Store Sales By Item', icon: FaStore, to: '', mark: false },
            { name: 'Total Sales Week By Item', icon: BsCalendar2WeekFill, to: '', mark: false },
            { name: 'Daily Sales By Item', icon: BsCalendar2DayFill, to: '', mark: false },
            { name: 'Total Sales Hour By Item', icon: GrDocumentStore, to: '', mark: false },
            { name: 'Total Sales Item By Week', icon: BsCalendar2WeekFill, to: '', mark: false },
            { name: 'Total Sales Item By Hour', icon: TbClockHour10Filled, to: '', mark: false },
            { name: 'Total Store Sales By Supplier', icon: FaStore, to: '', mark: false },
            { name: 'Sales amount by Store', icon: FaStore, to: '', mark: false },
            { name: 'Monthly Sales amount by Store', icon: BsCalendar2MonthFill, to: '', mark: false },
            { name: 'Store Monthly Sales amount', icon: BsCalendar2MonthFill, to: '', mark: false },
        ],
    },
    SALEREPORTS: {
        'Sale Reports': [
            { name: 'Daily Sales Report', icon: BsCalendar2DayFill, to: '', mark: false },
            { name: 'Daily Sales Summary', icon: FaCalendarDay, to: '', mark: false },
            { name: 'Sales Summary', icon: IoMdDocument, to: '', mark: false },
            { name: 'Detailed Sales List', icon: GrDocumentText, to: '', mark: false },
            { name: 'Sales By Receipt', icon: FaReceipt, to: '', mark: false },
            { name: 'Sales By Receipt Detail', icon: BsReceipt, to: '', mark: false },
            { name: 'CashReceipt Approval/Cancelation Report', icon: IoReceipt, to: '', mark: false },
            { name: 'CreditCard Approval/Cancelation Report', icon: CiCreditCard1, to: '', mark: false },
            { name: 'Sales Report by Card Type Detail', icon: FaIdCard, to: '', mark: false },
            { name: 'Sales Record by Employee', icon: FaUserSecret, to: '', mark: false },
            { name: 'Sales Record by Employee Date', icon: CiCalendarDate, to: '', mark: false },
            { name: 'Employee Commission', icon: FaUserCheck, to: '', mark: false },
        ],
        'Sales Analysis': [
            { name: 'Total Sales Report', icon: FaChartPie, to: '', mark: false },
            { name: 'Simplified Sales Total', icon: FaChartPie, to: '', mark: false },
            { name: 'Aggregate revenue items by category', icon: TbCategoryFilled, to: '', mark: false },
            { name: 'Hourly Sales', icon: TbClockHour10Filled, to: '', mark: false },
            { name: 'Time of Day Sales Report', icon: BsCalendar2DayFill, to: '', mark: false },
            { name: 'Sales Report by Payment Type', icon: FaChartPie, to: '', mark: false },
            { name: 'Sales Report by Card Type', icon: FaChartPie, to: '', mark: false },
            { name: 'Sales Ranking', icon: PiRanking, to: '', mark: false },
            { name: 'Sales Analysis Report(Item)', icon: IoAnalytics, to: '', mark: false },
            { name: 'Total Sales Report', icon: FaChartPie, to: '', mark: false },
            { name: 'Employee Sales Analysis', icon: FaUserCheck, to: '', mark: false },
        ],
        'Void / Return': [
            { name: 'Order Cancelation Report', icon: PiReceiptX, to: '', mark: false },
            { name: 'Void Summary', icon: FaReceipt, to: '', mark: false },
            { name: 'Void Detail', icon: BiDetail, to: '', mark: false },
        ],
        'Discount Status': [
            { name: 'Sales Discount Report', icon: RiDiscountPercentFill, to: '', mark: false },
            { name: 'Sales Discount Summary', icon: BiSolidDiscount, to: '', mark: false },
        ],
        TAX: [
            { name: 'No Tax Sale Report', icon: PiNewspaperClippingLight, to: '', mark: false },
            { name: 'Tax Detail', icon: FaNewspaper, to: '', mark: false },
            { name: 'Tax Summary', icon: GiPaperBagOpen, to: '', mark: false },
        ],
        'EOD Report': [
            { name: 'Sales Cash In Out', icon: GiCash, to: '', mark: false },
            { name: 'Cash In/Out', icon: FaCashRegister, to: '', mark: false },
        ],
    },
    PURCHASEORDER: {
        Inventory: [
            { name: 'Inventory Look Up', icon: MdInventory, to: '', mark: false },
            { name: 'Inventory Adjustments', icon: FaAdjust, to: '', mark: false },
            { name: 'Inventory Transfer', icon: GrDocumentTransfer, to: '', mark: false },
            { name: 'IV Management Table', icon: FaTable, to: '', mark: false },
        ],
        Accounting: [
            { name: 'Customer Purchase', icon: GiBuyCard, to: '', mark: false },
            { name: 'Customer Sale β', icon: GiBuyCard, to: '', mark: false },
            { name: 'Supplier Ledger', icon: HiDocumentPlus, to: '', mark: false },
            { name: 'Customer Ledger', icon: HiMiniDocumentMinus, to: '', mark: false },
            { name: 'Payable Report', icon: MdSubdirectoryArrowRight, to: '', mark: false },
            { name: 'Receivable Report', icon: MdSubdirectoryArrowLeft, to: '', mark: false },
        ],
        Supplier: [
            { name: 'Supplier Setting', icon: FaSortAmountUp, to: '', mark: false },
            { name: 'Amount', icon: PiStorefrontFill, to: '', mark: false },
        ],
    },
    SETTINGS: {
        Store: [
            { name: 'Store Operations', icon: FaStore, to: '', mark: false },
            { name: 'Store Detail Setting', icon: MdStore, to: '', mark: false },
            { name: 'Cash Drawer', icon: FaCashRegister, to: '', mark: false },
            { name: 'Tax', icon: RiBillLine, to: '', mark: false },
            { name: 'Operations Management', icon: PiMathOperationsFill, to: '', mark: false },
            { name: 'Order POS Cancel Function Option', icon: IoIosOptions, to: '', mark: false },
            { name: 'Printer Language Setting', icon: MdLanguage, to: '', mark: false },
            { name: 'Auto Close Popup Option', icon: FaWindowClose, to: '', mark: false },
        ],
        POS: [
            { name: 'POS Information', icon: FaInfoCircle, to: '', mark: false },
            { name: 'Printer Setting', icon: FaPrint, to: '', mark: false },
            { name: 'Label Print Setting', icon: MdLocalPrintshop, to: '', mark: false },
            { name: 'Guest Pager', icon: FaPager, to: '', mark: false },
            { name: 'Pos Display Setting', icon: BsFilePost, to: '', mark: false },
            { name: 'CID Device', icon: FaPhone, to: '', mark: false },
            { name: 'Print Option By Pos', icon: FaInfoCircle, to: '', mark: false },
            { name: 'Windows Kiosk Options', icon: FaWindows, to: '', mark: false },
            { name: 'MSR Setting', icon: FaSdCard, to: '', mark: false },
            { name: 'MSR Port Setting', icon: IoPhonePortrait, to: '', mark: false },
            { name: 'ECR Setting', icon: MdOutlinePermDataSetting, to: '', mark: false },
        ],
        'Option setting': [
            { name: 'StoreInfo(TAX Receipt)', icon: FaReceipt, to: '', mark: false },
            { name: 'Setting QR code', icon: FaQrcode, to: '', mark: false },
            { name: 'Show additional data in EOD printout', icon: FaDatabase, to: '', mark: false },
            { name: 'One Touch Option', icon: MdTouchApp, to: '', mark: false },
            { name: 'Barcode Unregisterd Item Option', icon: FaBarcode, to: '', mark: false },
            { name: 'Caller identification Receive Action', icon: MdAddCall, to: '', mark: false },
            { name: 'Cash drawer open option', icon: GrDrawer, to: '', mark: false },
            { name: 'Clear Table Setting', icon: MdVideoStable, to: '', mark: false },
            { name: 'Enter number of customer Setting', icon: TbCircleNumber2Filled, to: '', mark: false },
            { name: 'Select Employee Setting', icon: MdRememberMe, to: '', mark: false },
            { name: 'Discount Order Option', icon: RiDiscountPercentFill, to: '', mark: false },
            { name: 'Show item barcode option', icon: CiBarcode, to: '', mark: false },
            { name: 'Rebate Issue', icon: FaBoxTissue, to: '', mark: false },
            { name: 'Weight Barcode Option', icon: GiWeight, to: '', mark: false },
            { name: 'Tender method when making refund receipt', icon: HiReceiptRefund, to: '', mark: false },
            { name: 'Cash drawer open timing', icon: IoTimerSharp, to: '', mark: false },
            { name: 'Prepayment function button Setting', icon: GrUserSettings, to: '', mark: false },
            { name: 'Prepaid order Retention options', icon: IoMdOptions, to: '', mark: false },
            { name: 'Delivery Settings', icon: FaWindows, to: '', mark: false },
            { name: 'Delivery order', icon: CiDeliveryTruck, to: '', mark: false },
            { name: 'Change weight control', icon: IoPhonePortrait, to: '', mark: false },
            { name: 'Discount Option', icon: RiDiscountPercentFill, to: '', mark: false },
            { name: 'Payment options immediately', icon: GiWeight, to: '', mark: false },
            { name: 'Notice popup option', icon: IoIosNotifications, to: '', mark: false },
            { name: 'Set all cancellation type', icon: TbDeviceIpadCancel, to: '', mark: false },
            { name: 'Currency Change Option', icon: FaExchangeAlt, to: '', mark: false },
            { name: 'Enable Keep Unit Change', icon: RiCoinFill, to: '', mark: false },
        ],
        'Print Options': [
            { name: 'Receipt', icon: FaReceipt, to: '', mark: false },
            { name: 'Customer Order Print', icon: FaPrint, to: '', mark: false },
            { name: 'Kitchen Order Print', icon: TiPrinter, to: '', mark: false },
            { name: 'Waiting List Tag', icon: FaClipboardList, to: '', mark: false },
        ],
        Security: [
            { name: 'Use Security Function by Tasks', icon: FaTableCellsRowLock, to: '', mark: false },
            { name: 'Security Group', icon: FaUserLock, to: '', mark: false },
        ],
        'Network Server': [{ name: 'Email Server', icon: IoIosMail, to: '', mark: false }],
    },
};

export default menuStructure;
