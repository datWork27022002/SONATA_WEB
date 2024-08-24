import { BsFillHousesFill, BsFilePostFill, BsFillInfoSquareFill, BsCalendar2MonthFill } from 'react-icons/bs';
import { BsCalendar2DayFill, BsCalendar2WeekFill, BsReceipt, BsFilePost, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { FaStore, FaUsers, FaUserEdit, FaReceipt, FaWrench, FaLaptopHouse, FaUserCog } from 'react-icons/fa';
import { FaFilePowerpoint, FaCalendar, FaChartPie, FaUserCheck, FaIdCard, FaUserSecret } from 'react-icons/fa';
import { FaAdjust, FaNewspaper, FaSortAmountUp, FaWindowClose, FaInfoCircle, FaPager, FaWindows } from 'react-icons/fa';
import { FaSdCard, FaQrcode, FaDatabase, FaBarcode, FaBoxTissue, FaExchangeAlt, FaClipboardList } from 'react-icons/fa';
import { FaUserLock, FaUserTie, FaLevelUpAlt, FaImage } from 'react-icons/fa';
import { MdOutlineContentPasteSearch, MdOutlineScreenSearchDesktop, MdKitchen, MdSoupKitchen } from 'react-icons/md';
import { MdCalendarMonth, MdInventory, MdSubdirectoryArrowLeft, MdOutlineGroups2, MdRememberMe } from 'react-icons/md';
import { MdSubdirectoryArrowRight, MdStore, MdLanguage, MdLocalPrintshop } from 'react-icons/md';
import { MdOutlinePermDataSetting, MdTouchApp, MdAddCall, MdVideoStable } from 'react-icons/md';
import { MdScreenLockLandscape, MdTableRestaurant, MdPhonelinkSetup, MdPayments } from 'react-icons/md';
import { PiRanking, PiReceiptX, PiNewspaperClippingLight } from 'react-icons/pi';
import { PiStorefrontFill, PiMathOperationsFill } from 'react-icons/pi';
import { FaWarehouse, FaChalkboardUser, FaCalendarDay, FaCashRegister } from 'react-icons/fa6';
import { FaTable, FaPrint, FaPhone, FaTableCellsRowLock, FaRegImages } from 'react-icons/fa6';
import { TbHomeSearch, TbFileReport, TbClockHour10Filled } from 'react-icons/tb';
import { TbCategoryFilled, TbCircleNumber2Filled, TbDeviceIpadCancel } from 'react-icons/tb';
import { GiHamburger, GiPaperBagOpen, GiCash, GiBuyCard, GiWeight } from 'react-icons/gi';
import { IoIosCash, IoMdDocument, IoIosOptions, IoMdOptions } from 'react-icons/io';
import { IoIosNotifications, IoIosMail, IoMdRadioButtonOn } from 'react-icons/io';
import { IoReceiptOutline, IoIdCardOutline, IoAnalytics } from 'react-icons/io5';
import { IoReceipt, IoPhonePortrait, IoTimerSharp } from 'react-icons/io5';
import { RiDiscountPercentFill, RiUserSearchFill, RiMenuSearchFill, RiBillLine, RiCoinFill } from 'react-icons/ri';
import { VscLayoutMenubar } from 'react-icons/vsc';
import { LiaReceiptSolid, LiaCcAmazonPay } from 'react-icons/lia';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { CiEdit, CiLink, CiCreditCard1, CiCalendarDate, CiBarcode, CiDeliveryTruck } from 'react-icons/ci';
import { TfiAnnouncement } from 'react-icons/tfi';
import { GrDocumentStore, GrDocumentText, GrDocumentTransfer, GrDrawer } from 'react-icons/gr';
import { GrUserSettings, GrDocumentLocked } from 'react-icons/gr';
import { BiDetail, BiSolidDiscount } from 'react-icons/bi';
import { HiReceiptRefund } from 'react-icons/hi';
import { HiDocumentPlus, HiMiniDocumentMinus } from 'react-icons/hi2';
import { TiPrinter } from 'react-icons/ti';
import { CgArrangeBack } from 'react-icons/cg';

import routes from './routes';

const { BasicSettings, ManagerFunction, Customer, OperationReports } = routes;

const menuStructure = {
    BASICSETTINGS: {
        'Store Management': [
            { name: 'Group Management', icon: BsFillHousesFill, to: BasicSettings.GROUP_MANAGEMENT, mark: false },
            { name: 'Store Info', icon: FaStore, to: BasicSettings.STORE_INFO, mark: false },
            { name: 'Store List', icon: TbHomeSearch, to: BasicSettings.STORE_LIST, mark: false },
            { name: 'Warehouse Management', icon: FaWarehouse, to: BasicSettings.WAREHOUSE_MANAGEMENT, mark: false },
            { name: 'Cash Drawer', icon: IoIosCash, to: BasicSettings.CASH_DRAWER, mark: false },
            { name: 'Discount', icon: RiDiscountPercentFill, to: BasicSettings.DISCOUNT, mark: true },
        ],
        'Employee Management': [
            { name: 'Employee Group', icon: FaUsers, to: BasicSettings.EMPLOYEE_GROUP, mark: false },
            { name: 'Employee Info', icon: FaUserEdit, to: BasicSettings.EMPLOYEE_INFO, mark: false },
            { name: 'Employee List', icon: RiUserSearchFill, to: BasicSettings.EMPLOYEE_LIST, mark: false },
        ],
        'Menu Management': [
            { name: 'Menu Setup', icon: VscLayoutMenubar, to: BasicSettings.MENU_SETUP, mark: false },
            {
                name: 'Item Receipt Management',
                icon: FaReceipt,
                to: BasicSettings.ITEM_RECEIPT_MANAGEMENT,
                mark: false,
            },
            {
                name: 'Item Receipt Manager',
                icon: IoReceiptOutline,
                to: BasicSettings.ITEM_RECEIPT_MANAGER,
                mark: false,
            },
            { name: 'Topping Settings', icon: MdSoupKitchen, to: BasicSettings.TOPPING_SETTINGS, mark: false },
            { name: 'Sub Menu', icon: GiHamburger, to: BasicSettings.SUB_MENU, mark: false },
            { name: 'Menu Search', icon: RiMenuSearchFill, to: BasicSettings.MENU_SEARCH, mark: true },
            {
                name: 'Inventory Item Search',
                icon: MdOutlineContentPasteSearch,
                to: BasicSettings.INVENTORY_ITEM_SEARCH,
                mark: false,
            },
            {
                name: 'Menu-Board Management',
                icon: MdOutlineScreenSearchDesktop,
                to: BasicSettings.MENU_BOARD_MANAGEMENT,
                mark: false,
            },
            { name: 'POS Menu-Board', icon: BsFilePostFill, to: BasicSettings.POS_MENU_BOARD, mark: false },
            { name: 'Category Manager', icon: FaWrench, to: BasicSettings.CATEGORY_MANAGER, mark: false },
            { name: 'Recipe Builder', icon: LiaReceiptSolid, to: BasicSettings.RECIPE_BUILDER, mark: false },
            { name: 'Recipe Search', icon: AiOutlineFileSearch, to: BasicSettings.RECIPE_SEARCH, mark: true },
            { name: 'Kitchen Memo', icon: MdKitchen, to: BasicSettings.KITCHEN_MEMO, mark: false },
            {
                name: 'Item Management By Strore',
                icon: FaLaptopHouse,
                to: BasicSettings.ITEM_MANAGEMENT_BY_STRORE,
                mark: false,
            },
            {
                name: 'Change of multilingual name',
                icon: CiEdit,
                to: BasicSettings.CHANGE_OF_MULTILINGUAL_NAME,
                mark: false,
            },
            {
                name: 'Item linked code management',
                icon: CiLink,
                to: BasicSettings.ITEM_LINKED_CODE_MANAGEMENT,
                mark: false,
            },
        ],
        'POS Screen Layout': [
            { name: 'Main Menu Setting', icon: BsFillGrid3X3GapFill, to: BasicSettings.MAIN_MENU_SETTING, mark: false },
            {
                name: 'Table Location Manager',
                icon: CgArrangeBack,
                to: BasicSettings.TABLE_LOCATION_MANAGER,
                mark: false,
            },
            { name: 'Table Design Setting', icon: MdTableRestaurant, to: '', mark: false },
            { name: 'Menu Setup', icon: MdPhonelinkSetup, to: BasicSettings.MENU_SETUP2, mark: false },
            {
                name: 'POS Favorite Function Button',
                icon: IoMdRadioButtonOn,
                to: BasicSettings.POS_FAVORITE_FUNCTION_BUTTON,
                mark: false,
            },
            { name: 'Payment Button Setting', icon: MdPayments, to: BasicSettings.PAYMENT_BUTTON_SETTING, mark: false },
            { name: 'Kiosk Image Settings', icon: FaImage, to: BasicSettings.KIOSK_IMAGE_SETTINGS, mark: false },
            {
                name: 'UP Order Image Settings',
                icon: FaRegImages,
                to: BasicSettings.UP_ORDER_IMAGE_SETTINGS,
                mark: false,
            },
            {
                name: 'Kiosk function setting',
                icon: FaRegImages,
                to: BasicSettings.KIOSK_FUNCTION_SETTING,
                mark: false,
            },
            {
                name: 'POS User Definition Language',
                icon: FaRegImages,
                to: BasicSettings.POS_USER_DEFINITION_LANGUAGE,
                mark: false,
            },
        ],
    },
    MANAGERFUNCTION: {
        noFilter: [
            { name: 'Announcement', icon: TfiAnnouncement, to: ManagerFunction.ANNOUNCEMENT, mark: false },
            { name: 'Payroll', icon: LiaCcAmazonPay, to: ManagerFunction.PAYROLL, mark: false },
            { name: 'Time Card', icon: IoIdCardOutline, to: ManagerFunction.TIME_CARD, mark: false },
            {
                name: 'List of information by force',
                icon: BsFillInfoSquareFill,
                to: ManagerFunction.LIST_OF_INFORMATION_BY_FORCE,
                mark: false,
            },
        ],
    },
    CUSTOMER: {
        noFilter: [
            { name: 'Customer Group', icon: MdOutlineGroups2, to: Customer.CUSTOMER_GROUP, mark: false },
            { name: 'Customer Management', icon: FaUserCog, to: Customer.CUSTOMER_MANAGEMENT, mark: false },
            { name: 'Membership List', icon: MdRememberMe, to: Customer.MEMBERSHIP_LIST, mark: false },
            { name: 'Customer Sales Total', icon: FaChalkboardUser, to: Customer.CUSTOMER_SALES_TOTAL, mark: false },
            {
                name: 'Customer Detailed Sales Report',
                icon: TbFileReport,
                to: Customer.CUSTOMER_DETAILED_SALES_REPORT,
                mark: false,
            },
            { name: 'Point Report', icon: FaFilePowerpoint, to: Customer.POINT_REPORT, mark: false },
        ],
    },
    OPERATIONREPORTS: {
        noFilter: [
            { name: 'Monthly Comparison', icon: MdCalendarMonth, to: OperationReports.MONTHLY_COMPARISON, mark: false },
            { name: 'Yearly Comparison', icon: FaCalendar, to: OperationReports.YEARLY_COMPARISON, mark: false },
            {
                name: 'Total Category Sales By Store',
                icon: FaStore,
                to: OperationReports.TOTAL_CATEGORY_SALES_BY_STORE,
                mark: false,
            },
            {
                name: 'Total Item Sales By Store',
                icon: FaStore,
                to: OperationReports.TOTAL_ITEM_SALES_BY_STORE,
                mark: false,
            },
            {
                name: 'Total Store Sales By Category',
                icon: FaStore,
                to: OperationReports.TOTAL_STORE_SALES_BY_CATEGORY,
                mark: false,
            },
            {
                name: 'Total Sales Summary (By Item)',
                icon: GrDocumentStore,
                to: OperationReports.TOTAL_SALES_SUMMARY_BY_ITEM,
                mark: false,
            },
            {
                name: 'Total Store Sales By Item',
                icon: FaStore,
                to: OperationReports.TOTAL_STORE_SALES_BY_ITEM,
                mark: false,
            },
            {
                name: 'Total Sales Week By Item',
                icon: BsCalendar2WeekFill,
                to: OperationReports.TOTAL_SALES_WEEK_BY_ITEM,
                mark: false,
            },
            {
                name: 'Daily Sales By Item',
                icon: BsCalendar2DayFill,
                to: OperationReports.DAILY_SALES_BY_ITEM,
                mark: false,
            },
            {
                name: 'Total Sales Hour By Item',
                icon: GrDocumentStore,
                to: OperationReports.TOTAL_SALES_HOUR_BY_ITEM,
                mark: false,
            },
            {
                name: 'Total Sales Item By Week',
                icon: BsCalendar2WeekFill,
                to: OperationReports.TOTAL_SALES_ITEM_BY_WEEK,
                mark: false,
            },
            {
                name: 'Total Sales Item By Hour',
                icon: TbClockHour10Filled,
                to: OperationReports.TOTAL_SALES_ITEM_BY_HOUR,
                mark: false,
            },
            {
                name: 'Total Store Sales By Supplier',
                icon: FaStore,
                to: OperationReports.TOTAL_STORE_SALES_BY_SUPPLIER,
                mark: false,
            },
            { name: 'Sales amount by Store', icon: FaStore, to: OperationReports.SALES_AMOUNT_BY_STORE, mark: false },
            {
                name: 'Monthly Sales amount by Store',
                icon: BsCalendar2MonthFill,
                to: OperationReports.MONTHLY_SALES_AMOUNT_BY_STORE,
                mark: false,
            },
            {
                name: 'Store Monthly Sales amount',
                icon: BsCalendar2MonthFill,
                to: OperationReports.STORE_MONTHLY_SALES_AMOUNT,
                mark: false,
            },
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
    BIZSMS: {
        noFilter: [
            { name: 'BIZ SMS Setting', icon: FaUserCog, to: '', mark: false },
            { name: 'User Guide', icon: FaUserTie, to: '', mark: false },
        ],
    },
    SMART_ORDER: {
        'Store Management': [
            { name: 'Store Info', icon: MdScreenLockLandscape, to: '', mark: false },
            { name: 'Tax', icon: GrDocumentLocked, to: '', mark: false },
            { name: 'UP-SmartOrder QR Printing', icon: FaUserLock, to: '', mark: false },
            { name: 'Up TableOrder QR Printing', icon: FaLevelUpAlt, to: '', mark: false },
        ],
        Settings: [
            { name: 'UP-SmartOrder Settings', icon: MdScreenLockLandscape, to: '', mark: false },
            { name: 'UP-TableOrder Settings', icon: GrDocumentLocked, to: '', mark: false },
            { name: 'UP-Order Settings', icon: FaUserLock, to: '', mark: false },
            { name: 'UP Order Image Settings', icon: FaLevelUpAlt, to: '', mark: false },
            { name: 'Call message', icon: FaLevelUpAlt, to: '', mark: false },
            { name: 'Robowide Settings', icon: FaLevelUpAlt, to: '', mark: false },
        ],
        'Menu Management': [
            { name: 'Menu Setup', icon: MdScreenLockLandscape, to: '', mark: false },
            { name: 'Item Recipe Management', icon: GrDocumentLocked, to: '', mark: false },
            { name: 'Item Recipe Manager', icon: FaUserLock, to: '', mark: false },
            { name: 'Modifier', icon: FaLevelUpAlt, to: '', mark: false },
            { name: 'Sub Menu', icon: FaLevelUpAlt, to: '', mark: false },
            { name: 'Item Management By Strore', icon: FaLevelUpAlt, to: '', mark: false },
            { name: 'Item Description Image URL', icon: FaLevelUpAlt, to: '', mark: false },
        ],
        'Sales Reports': [
            { name: 'Daily Sales Report', icon: MdScreenLockLandscape, to: '', mark: false },
            { name: 'Breakdown of sales by month', icon: GrDocumentLocked, to: '', mark: false },
            { name: 'Sales By Receipt', icon: FaUserLock, to: '', mark: false },
            { name: 'Sales By Receipt Detail', icon: FaLevelUpAlt, to: '', mark: false },
            { name: 'Sales Ranking', icon: FaLevelUpAlt, to: '', mark: false },
        ],
    },
    WEBLOGIN: {
        noFilter: [
            { name: 'Web Login', icon: MdScreenLockLandscape, to: '', mark: false },
            { name: 'Use Security Function by Tasks', icon: GrDocumentLocked, to: '', mark: false },
            { name: 'Employee Security', icon: FaUserLock, to: '', mark: false },
            { name: 'Security Level', icon: FaLevelUpAlt, to: '', mark: false },
        ],
    },
};

export default menuStructure;
