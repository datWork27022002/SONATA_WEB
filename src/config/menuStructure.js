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

const {
    BasicSettings,
    ManagerFunction,
    Customer,
    OperationReports,
    SaleReports,
    PurchaseOrder,
    Settings,
    BIZSMS,
    WebLogin,
} = routes;

const menuStructure = {
    BASICSETTINGS: {
        'Store Management': [
            {
                name: 'Group Management',
                icon: BsFillHousesFill,
                to: BasicSettings.GROUP_MANAGEMENT,
                mark: false,
                active: false,
            },
            { name: 'Store Info', icon: FaStore, to: BasicSettings.STORE_INFO, mark: false, active: false },
            { name: 'Store List', icon: TbHomeSearch, to: BasicSettings.STORE_LIST, mark: false, active: true },
            {
                name: 'Warehouse Management',
                icon: FaWarehouse,
                to: BasicSettings.WAREHOUSE_MANAGEMENT,
                mark: false,
                active: false,
            },
            { name: 'Cash Drawer', icon: IoIosCash, to: BasicSettings.CASH_DRAWER, mark: false, active: false },
            { name: 'Discount', icon: RiDiscountPercentFill, to: BasicSettings.DISCOUNT, mark: true },
        ],
        'Employee Management': [
            { name: 'Employee Group', icon: FaUsers, to: BasicSettings.EMPLOYEE_GROUP, mark: false, active: false },
            { name: 'Employee Info', icon: FaUserEdit, to: BasicSettings.EMPLOYEE_INFO, mark: false, active: false },
            {
                name: 'Employee List',
                icon: RiUserSearchFill,
                to: BasicSettings.EMPLOYEE_LIST,
                mark: false,
                active: false,
            },
        ],
        'Menu Management': [
            { name: 'Menu Setup', icon: VscLayoutMenubar, to: BasicSettings.MENU_SETUP, mark: false, active: true },
            {
                name: 'Item Receipt Management',
                icon: FaReceipt,
                to: BasicSettings.ITEM_RECEIPT_MANAGEMENT,
                mark: false,
                active: false,
            },
            {
                name: 'Item Receipt Manager',
                icon: IoReceiptOutline,
                to: BasicSettings.ITEM_RECEIPT_MANAGER,
                mark: false,
                active: false,
            },
            {
                name: 'Topping Settings',
                icon: MdSoupKitchen,
                to: BasicSettings.TOPPING_SETTINGS,
                mark: false,
                active: false,
            },
            { name: 'Sub Menu', icon: GiHamburger, to: BasicSettings.SUB_MENU, mark: false, active: false },
            { name: 'Menu Search', icon: RiMenuSearchFill, to: BasicSettings.MENU_SEARCH, mark: true, active: true },
            {
                name: 'Inventory Item Search',
                icon: MdOutlineContentPasteSearch,
                to: BasicSettings.INVENTORY_ITEM_SEARCH,
                mark: false,
                active: false,
            },
            {
                name: 'Menu-Board Management',
                icon: MdOutlineScreenSearchDesktop,
                to: BasicSettings.MENU_BOARD_MANAGEMENT,
                mark: false,
                active: false,
            },
            {
                name: 'POS Menu-Board',
                icon: BsFilePostFill,
                to: BasicSettings.POS_MENU_BOARD,
                mark: false,
                active: false,
            },
            {
                name: 'Category Manager',
                icon: FaWrench,
                to: BasicSettings.CATEGORY_MANAGER,
                mark: false,
                active: false,
            },
            {
                name: 'Recipe Builder',
                icon: LiaReceiptSolid,
                to: BasicSettings.RECIPE_BUILDER,
                mark: false,
                active: false,
            },
            { name: 'Recipe Search', icon: AiOutlineFileSearch, to: BasicSettings.RECIPE_SEARCH, mark: true },
            { name: 'Kitchen Memo', icon: MdKitchen, to: BasicSettings.KITCHEN_MEMO, mark: false, active: false },
            {
                name: 'Item Management By Strore',
                icon: FaLaptopHouse,
                to: BasicSettings.ITEM_MANAGEMENT_BY_STRORE,
                mark: false,
                active: false,
            },
            {
                name: 'Change of multilingual name',
                icon: CiEdit,
                to: BasicSettings.CHANGE_OF_MULTILINGUAL_NAME,
                mark: false,
                active: false,
            },
            {
                name: 'Item linked code management',
                icon: CiLink,
                to: BasicSettings.ITEM_LINKED_CODE_MANAGEMENT,
                mark: false,
                active: false,
            },
        ],
        'POS Screen Layout': [
            {
                name: 'Main Menu Setting',
                icon: BsFillGrid3X3GapFill,
                to: BasicSettings.MAIN_MENU_SETTING,
                mark: false,
                active: false,
            },
            {
                name: 'Table Location Manager',
                icon: CgArrangeBack,
                to: BasicSettings.TABLE_LOCATION_MANAGER,
                mark: false,
                active: false,
            },
            {
                name: 'Table Design Setting',
                icon: MdTableRestaurant,
                to: BasicSettings.TABLE_DESIGN_SETTING,
                mark: false,
                active: false,
            },
            { name: 'Menu Setup', icon: MdPhonelinkSetup, to: BasicSettings.MENU_SETUP2, mark: false, active: false },
            {
                name: 'POS Favorite Function Button',
                icon: IoMdRadioButtonOn,
                to: BasicSettings.POS_FAVORITE_FUNCTION_BUTTON,
                mark: false,
                active: false,
            },
            {
                name: 'Payment Button Setting',
                icon: MdPayments,
                to: BasicSettings.PAYMENT_BUTTON_SETTING,
                mark: false,
                active: false,
            },
            {
                name: 'Kiosk Image Settings',
                icon: FaImage,
                to: BasicSettings.KIOSK_IMAGE_SETTINGS,
                mark: false,
                active: false,
            },
            {
                name: 'UP Order Image Settings',
                icon: FaRegImages,
                to: BasicSettings.UP_ORDER_IMAGE_SETTINGS,
                mark: false,
                active: false,
            },
            {
                name: 'Kiosk function setting',
                icon: FaRegImages,
                to: BasicSettings.KIOSK_FUNCTION_SETTING,
                mark: false,
                active: false,
            },
            {
                name: 'POS User Definition Language',
                icon: FaRegImages,
                to: BasicSettings.POS_USER_DEFINITION_LANGUAGE,
                mark: false,
                active: false,
            },
        ],
    },
    MANAGERFUNCTION: {
        noFilter: [
            {
                name: 'Announcement',
                icon: TfiAnnouncement,
                to: ManagerFunction.ANNOUNCEMENT,
                mark: false,
                active: false,
            },
            { name: 'Payroll', icon: LiaCcAmazonPay, to: ManagerFunction.PAYROLL, mark: false, active: false },
            { name: 'Time Card', icon: IoIdCardOutline, to: ManagerFunction.TIME_CARD, mark: false, active: false },
            {
                name: 'List of information by force',
                icon: BsFillInfoSquareFill,
                to: ManagerFunction.LIST_OF_INFORMATION_BY_FORCE,
                mark: false,
                active: false,
            },
        ],
    },
    CUSTOMER: {
        noFilter: [
            { name: 'Customer Group', icon: MdOutlineGroups2, to: Customer.CUSTOMER_GROUP, mark: false, active: false },
            {
                name: 'Customer Management',
                icon: FaUserCog,
                to: Customer.CUSTOMER_MANAGEMENT,
                mark: false,
                active: false,
            },
            { name: 'Membership List', icon: MdRememberMe, to: Customer.MEMBERSHIP_LIST, mark: false, active: false },
            {
                name: 'Customer Sales Total',
                icon: FaChalkboardUser,
                to: Customer.CUSTOMER_SALES_TOTAL,
                mark: false,
                active: false,
            },
            {
                name: 'Customer Detailed Sales Report',
                icon: TbFileReport,
                to: Customer.CUSTOMER_DETAILED_SALES_REPORT,
                mark: false,
                active: false,
            },
            { name: 'Point Report', icon: FaFilePowerpoint, to: Customer.POINT_REPORT, mark: false, active: false },
        ],
    },
    OPERATIONREPORTS: {
        noFilter: [
            {
                name: 'Monthly Comparison',
                icon: MdCalendarMonth,
                to: OperationReports.MONTHLY_COMPARISON,
                mark: false,
                active: false,
            },
            {
                name: 'Yearly Comparison',
                icon: FaCalendar,
                to: OperationReports.YEARLY_COMPARISON,
                mark: false,
                active: false,
            },
            {
                name: 'Total Category Sales By Store',
                icon: FaStore,
                to: OperationReports.TOTAL_CATEGORY_SALES_BY_STORE,
                mark: false,
                active: false,
            },
            {
                name: 'Total Item Sales By Store',
                icon: FaStore,
                to: OperationReports.TOTAL_ITEM_SALES_BY_STORE,
                mark: false,
                active: false,
            },
            {
                name: 'Total Store Sales By Category',
                icon: FaStore,
                to: OperationReports.TOTAL_STORE_SALES_BY_CATEGORY,
                mark: false,
                active: false,
            },
            {
                name: 'Total Sales Summary (By Item)',
                icon: GrDocumentStore,
                to: OperationReports.TOTAL_SALES_SUMMARY_BY_ITEM,
                mark: false,
                active: false,
            },
            {
                name: 'Total Store Sales By Item',
                icon: FaStore,
                to: OperationReports.TOTAL_STORE_SALES_BY_ITEM,
                mark: false,
                active: false,
            },
            {
                name: 'Total Sales Week By Item',
                icon: BsCalendar2WeekFill,
                to: OperationReports.TOTAL_SALES_WEEK_BY_ITEM,
                mark: false,
                active: false,
            },
            {
                name: 'Daily Sales By Item',
                icon: BsCalendar2DayFill,
                to: OperationReports.DAILY_SALES_BY_ITEM,
                mark: false,
                active: false,
            },
            {
                name: 'Total Sales Hour By Item',
                icon: GrDocumentStore,
                to: OperationReports.TOTAL_SALES_HOUR_BY_ITEM,
                mark: false,
                active: false,
            },
            {
                name: 'Total Sales Item By Week',
                icon: BsCalendar2WeekFill,
                to: OperationReports.TOTAL_SALES_ITEM_BY_WEEK,
                mark: false,
                active: false,
            },
            {
                name: 'Total Sales Item By Hour',
                icon: TbClockHour10Filled,
                to: OperationReports.TOTAL_SALES_ITEM_BY_HOUR,
                mark: false,
                active: false,
            },
            {
                name: 'Total Store Sales By Supplier',
                icon: FaStore,
                to: OperationReports.TOTAL_STORE_SALES_BY_SUPPLIER,
                mark: false,
                active: false,
            },
            {
                name: 'Sales amount by Store',
                icon: FaStore,
                to: OperationReports.SALES_AMOUNT_BY_STORE,
                mark: false,
                active: false,
            },
            {
                name: 'Monthly Sales amount by Store',
                icon: BsCalendar2MonthFill,
                to: OperationReports.MONTHLY_SALES_AMOUNT_BY_STORE,
                mark: false,
                active: false,
            },
            {
                name: 'Store Monthly Sales amount',
                icon: BsCalendar2MonthFill,
                to: OperationReports.STORE_MONTHLY_SALES_AMOUNT,
                mark: false,
                active: false,
            },
        ],
    },
    SALEREPORTS: {
        'Sale Reports': [
            {
                name: 'Daily Sales Report',
                icon: BsCalendar2DayFill,
                to: SaleReports.DAILY_SALES_REPORT,
                mark: false,
                active: false,
            },
            {
                name: 'Daily Sales Summary',
                icon: FaCalendarDay,
                to: SaleReports.DAILY_SALES_SUMMARY,
                mark: false,
                active: false,
            },
            { name: 'Sales Summary', icon: IoMdDocument, to: SaleReports.SALES_SUMMARY, mark: false, active: false },
            {
                name: 'Detailed Sales List',
                icon: GrDocumentText,
                to: SaleReports.DETAILED_SALES_LIST,
                mark: false,
                active: false,
            },
            { name: 'Sales By Receipt', icon: FaReceipt, to: SaleReports.SALES_BY_RECEIPT, mark: false, active: false },
            {
                name: 'Sales By Receipt Detail',
                icon: BsReceipt,
                to: SaleReports.SALES_BY_RECEIPT_DETAIL,
                mark: false,
                active: false,
            },
            {
                name: 'CashReceipt Approval/Cancelation Report',
                icon: IoReceipt,
                to: SaleReports.CASH_RECEIPT_APPROVAL_CANCELATION_REPORT,
                mark: false,
                active: false,
            },
            {
                name: 'CreditCard Approval/Cancelation Report',
                icon: CiCreditCard1,
                to: SaleReports.CREDIT_CARD_APPROVAL_CANCELATION_REPORT,
                mark: false,
                active: false,
            },
            {
                name: 'Sales Report by Card Type Detail',
                icon: FaIdCard,
                to: SaleReports.SALES_REPORT_BY_CARD_TYPE_DETAIL,
                mark: false,
                active: false,
            },
            {
                name: 'Sales Record by Employee',
                icon: FaUserSecret,
                to: SaleReports.SALES_RECORD_BY_EMPLOYEE,
                mark: false,
                active: false,
            },
            {
                name: 'Sales Record by Employee Date',
                icon: CiCalendarDate,
                to: SaleReports.SALES_RECORD_BY_EMPLOYEE_DATE,
                mark: false,
                active: false,
            },
            {
                name: 'Employee Commission',
                icon: FaUserCheck,
                to: SaleReports.EMPLOYEE_COMMISSION,
                mark: false,
                active: false,
            },
        ],
        'Sales Analysis': [
            {
                name: 'Total Sales Report',
                icon: FaChartPie,
                to: SaleReports.TOTAL_SALES_REPORT,
                mark: false,
                active: false,
            },
            {
                name: 'Simplified Sales Total',
                icon: FaChartPie,
                to: SaleReports.SIMPLIFIED_SALES_TOTAL,
                mark: false,
                active: false,
            },
            {
                name: 'Aggregate revenue items by category',
                icon: TbCategoryFilled,
                to: SaleReports.AGGREGATE_REVENUE_ITEMS_BY_CATEGORY,
                mark: false,
                active: false,
            },
            {
                name: 'Hourly Sales',
                icon: TbClockHour10Filled,
                to: SaleReports.HOURLY_SALES,
                mark: false,
                active: false,
            },
            {
                name: 'Time of Day Sales Report',
                icon: BsCalendar2DayFill,
                to: SaleReports.TIME_OF_DAY_SALES_REPORT,
                mark: false,
                active: false,
            },
            {
                name: 'Sales Report by Payment Type',
                icon: FaChartPie,
                to: SaleReports.SALES_REPORT_BY_PAYMENT_TYPE,
                mark: false,
                active: false,
            },
            {
                name: 'Sales Report by Card Type',
                icon: FaChartPie,
                to: SaleReports.SALES_REPORT_BY_CARD_TYPE,
                mark: false,
                active: false,
            },
            { name: 'Sales Ranking', icon: PiRanking, to: SaleReports.SALES_RANKING, mark: false, active: false },
            {
                name: 'Sales Analysis Report(Item)',
                icon: IoAnalytics,
                to: SaleReports.SALES_ANALYSIS_REPORT_ITEM,
                mark: false,
                active: false,
            },
            {
                name: 'Total Sales Report Detail',
                icon: FaChartPie,
                to: SaleReports.TOTAL_SALES_REPORT_DETAIL,
                mark: false,
                active: false,
            },
            {
                name: 'Employee Sales Analysis',
                icon: FaUserCheck,
                to: SaleReports.EMPLOYEE_SALES_ANALYSIS,
                mark: false,
                active: false,
            },
        ],
        'Void / Return': [
            {
                name: 'Order Cancelation Report',
                icon: PiReceiptX,
                to: SaleReports.ORDER_CANCELATION_REPORT,
                mark: false,
                active: false,
            },
            { name: 'Void Summary', icon: FaReceipt, to: SaleReports.VOID_SUMMARY, mark: false, active: false },
            { name: 'Void Detail', icon: BiDetail, to: SaleReports.VOID_DETAIL, mark: false, active: false },
        ],
        'Discount Status': [
            {
                name: 'Sales Discount Report',
                icon: RiDiscountPercentFill,
                to: SaleReports.SALES_DISCOUNT_REPORT,
                mark: false,
                active: false,
            },
            {
                name: 'Sales Discount Summary',
                icon: BiSolidDiscount,
                to: SaleReports.SALES_DISCOUNT_SUMMARY,
                mark: false,
                active: false,
            },
        ],
        TAX: [
            {
                name: 'No Tax Sale Report',
                icon: PiNewspaperClippingLight,
                to: SaleReports.NO_TAX_SALE_REPORT,
                mark: false,
                active: false,
            },
            { name: 'Tax Detail', icon: FaNewspaper, to: SaleReports.TAX_DETAIL, mark: false, active: false },
            { name: 'Tax Summary', icon: GiPaperBagOpen, to: SaleReports.TAX_SUMMARY, mark: false, active: false },
        ],
        'EOD Report': [
            { name: 'Sales Cash In Out', icon: GiCash, to: SaleReports.SALES_CASH_IN_OUT, mark: false, active: false },
            { name: 'Cash In/Out', icon: FaCashRegister, to: SaleReports.CASH_IN_OUT, mark: false, active: false },
        ],
    },
    PURCHASEORDER: {
        Inventory: [
            {
                name: 'Inventory Look Up',
                icon: MdInventory,
                to: PurchaseOrder.INVENTORY_LOOK_UP,
                mark: false,
                active: false,
            },
            {
                name: 'Inventory Adjustments',
                icon: FaAdjust,
                to: PurchaseOrder.INVENTORY_ADJUSTMENTS,
                mark: false,
                active: false,
            },
            {
                name: 'Inventory Transfer',
                icon: GrDocumentTransfer,
                to: PurchaseOrder.INVENTORY_TRANSFER,
                mark: false,
                active: false,
            },
            {
                name: 'IV Management Table',
                icon: FaTable,
                to: PurchaseOrder.IV_MANAGEMENT_TABLE,
                mark: false,
                active: false,
            },
        ],
        Accounting: [
            {
                name: 'Customer Purchase',
                icon: GiBuyCard,
                to: PurchaseOrder.CUSTOMER_PURCHASE,
                mark: false,
                active: false,
            },
            { name: 'Customer Sale β', icon: GiBuyCard, to: PurchaseOrder.CUSTOMER_SALE_B, mark: false, active: false },
            {
                name: 'Supplier Ledger',
                icon: HiDocumentPlus,
                to: PurchaseOrder.SUPPLIER_LEDGER,
                mark: false,
                active: false,
            },
            {
                name: 'Customer Ledger',
                icon: HiMiniDocumentMinus,
                to: PurchaseOrder.CUSTOMER_LEDGER,
                mark: false,
                active: false,
            },
            {
                name: 'Payable Report',
                icon: MdSubdirectoryArrowRight,
                to: PurchaseOrder.PAYABLE_REPORT,
                mark: false,
                active: false,
            },
            {
                name: 'Receivable Report',
                icon: MdSubdirectoryArrowLeft,
                to: PurchaseOrder.RECEIVABLE_REPORT,
                mark: false,
                active: false,
            },
        ],
        Supplier: [
            {
                name: 'Supplier Setting',
                icon: FaSortAmountUp,
                to: PurchaseOrder.SUPPLIER_SETTING,
                mark: false,
                active: false,
            },
            { name: 'Amount', icon: PiStorefrontFill, to: PurchaseOrder.AMOUNT, mark: false, active: false },
        ],
    },
    SETTINGS: {
        Store: [
            { name: 'Store Operations', icon: FaStore, to: Settings.STORE_OPERATIONS, mark: false, active: false },
            {
                name: 'Store Detail Setting',
                icon: MdStore,
                to: Settings.STORE_DETAIL_SETTING,
                mark: false,
                active: false,
            },
            { name: 'Cash Drawer', icon: FaCashRegister, to: Settings.CASH_DRAWER2, mark: false, active: false },
            { name: 'Tax', icon: RiBillLine, to: Settings.TAX, mark: false, active: false },
            {
                name: 'Operations Management',
                icon: PiMathOperationsFill,
                to: Settings.OPERATIONS_MANAGEMENT,
                mark: false,
                active: false,
            },
            {
                name: 'Order POS Cancel Function Option',
                icon: IoIosOptions,
                to: Settings.ORDER_POS_CANCEL_FUNCTION_OPTION,
                mark: false,
                active: false,
            },
            {
                name: 'Printer Language Setting',
                icon: MdLanguage,
                to: Settings.PRINTER_LANGUAGE_SETTING,
                mark: false,
                active: false,
            },
            {
                name: 'Auto Close Popup Option',
                icon: FaWindowClose,
                to: Settings.AUTO_CLOSE_POPUP_OPTION,
                mark: false,
                active: false,
            },
        ],
        POS: [
            { name: 'POS Information', icon: FaInfoCircle, to: Settings.POS_INFORMATION, mark: false, active: false },
            { name: 'Printer Setting', icon: FaPrint, to: Settings.PRINTER_SETTING, mark: false, active: false },
            {
                name: 'Label Print Setting',
                icon: MdLocalPrintshop,
                to: Settings.LABEL_PRINT_SETTING,
                mark: false,
                active: false,
            },
            { name: 'Guest Pager', icon: FaPager, to: Settings.GUEST_PAGER, mark: false, active: false },
            {
                name: 'Pos Display Setting',
                icon: BsFilePost,
                to: Settings.POS_DISPLAY_SETTING,
                mark: false,
                active: false,
            },
            { name: 'CID Device', icon: FaPhone, to: Settings.CID_DEVICE, mark: false, active: false },
            {
                name: 'Print Option By Pos',
                icon: FaInfoCircle,
                to: Settings.PRINT_OPTION_BY_POS,
                mark: false,
                active: false,
            },
            {
                name: 'Windows Kiosk Options',
                icon: FaWindows,
                to: Settings.WINDOWS_KIOSK_OPTIONS,
                mark: false,
                active: false,
            },
            { name: 'MSR Setting', icon: FaSdCard, to: Settings.MSR_SETTING, mark: false, active: false },
            {
                name: 'MSR Port Setting',
                icon: IoPhonePortrait,
                to: Settings.MSR_PORT_SETTING,
                mark: false,
                active: false,
            },
            {
                name: 'ECR Setting',
                icon: MdOutlinePermDataSetting,
                to: Settings.ECR_SETTING,
                mark: false,
                active: false,
            },
        ],
        'Option setting': [
            {
                name: 'StoreInfo(TAX Receipt)',
                icon: FaReceipt,
                to: Settings.STORE_INFO_TAX_RECEIPT,
                mark: false,
                active: false,
            },
            { name: 'Setting QR code', icon: FaQrcode, to: Settings.SETTING_QR_CODE, mark: false, active: false },
            {
                name: 'Show additional data in EOD printout',
                icon: FaDatabase,
                to: Settings.SHOW_ADDITIONAL_DATA_IN_EOD_PRINTOUT,
                mark: false,
                active: false,
            },
            { name: 'One Touch Option', icon: MdTouchApp, to: Settings.ONE_TOUCH_OPTION, mark: false, active: false },
            {
                name: 'Barcode Unregisterd Item Option',
                icon: FaBarcode,
                to: Settings.BARCODE_UNREGISTERED_ITEM_OPTION,
                mark: false,
                active: false,
            },
            {
                name: 'Caller identification Receive Action',
                icon: MdAddCall,
                to: Settings.CALLER_IDENTIFICATION_RECEIVE_ACTION,
                mark: false,
                active: false,
            },
            {
                name: 'Cash drawer open option',
                icon: GrDrawer,
                to: Settings.CASH_DRAWER_OPEN_OPTION,
                mark: false,
                active: false,
            },
            {
                name: 'Clear Table Setting',
                icon: MdVideoStable,
                to: Settings.CLEAR_TABLE_SETTING,
                mark: false,
                active: false,
            },
            {
                name: 'Enter number of customer Setting',
                icon: TbCircleNumber2Filled,
                to: Settings.ENTER_NUMBER_OF_CUSTOMER_SETTING,
                mark: false,
                active: false,
            },
            {
                name: 'Select Employee Setting',
                icon: MdRememberMe,
                to: Settings.SELECT_EMPLOYEE_SETTING,
                mark: false,
                active: false,
            },
            {
                name: 'Discount Order Option',
                icon: RiDiscountPercentFill,
                to: Settings.DISCOUNT_ORDER_OPTION,
                mark: false,
                active: false,
            },
            {
                name: 'Show item barcode option',
                icon: CiBarcode,
                to: Settings.SHOW_ITEM_BARCODE_OPTION,
                mark: false,
                active: false,
            },
            { name: 'Rebate Issue', icon: FaBoxTissue, to: Settings.REBATE_ISSUE, mark: false, active: false },
            {
                name: 'Weight Barcode Option',
                icon: GiWeight,
                to: Settings.WEIGHT_BARCODE_OPTION,
                mark: false,
                active: false,
            },
            {
                name: 'Tender method when making refund receipt',
                icon: HiReceiptRefund,
                to: Settings.TENDER_METHOD_WHEN_MAKING_REFUND_RECEIPT,
                mark: false,
                active: false,
            },
            {
                name: 'Cash drawer open timing',
                icon: IoTimerSharp,
                to: Settings.CASH_DRAWER_OPEN_TIMING,
                mark: false,
                active: false,
            },
            {
                name: 'Prepayment function button Setting',
                icon: GrUserSettings,
                to: Settings.PREPAYMENT_FUNCTION_BUTTON_SETTING,
                mark: false,
                active: false,
            },
            {
                name: 'Prepaid order Retention options',
                icon: IoMdOptions,
                to: Settings.PREPAID_ORDER_RETENTION_OPTIONS,
                mark: false,
                active: false,
            },
            { name: 'Delivery Settings', icon: FaWindows, to: Settings.DELIVERY_SETTINGS, mark: false, active: false },
            { name: 'Delivery order', icon: CiDeliveryTruck, to: Settings.DELIVERY_ORDER, mark: false, active: false },
            {
                name: 'Change weight control',
                icon: IoPhonePortrait,
                to: Settings.CHANGE_WEIGHT_CONTROL,
                mark: false,
                active: false,
            },
            {
                name: 'Discount Option',
                icon: RiDiscountPercentFill,
                to: Settings.DISCOUNT_OPTION,
                mark: false,
                active: false,
            },
            {
                name: 'Payment options immediately',
                icon: GiWeight,
                to: Settings.PAYMENT_OPTIONS_IMMEDIATELY,
                mark: false,
                active: false,
            },
            {
                name: 'Notice popup option',
                icon: IoIosNotifications,
                to: Settings.NOTICE_POPUP_OPTION,
                mark: false,
                active: false,
            },
            {
                name: 'Set all cancellation type',
                icon: TbDeviceIpadCancel,
                to: Settings.SET_ALL_CANCELLATION_TYPE,
                mark: false,
                active: false,
            },
            {
                name: 'Currency Change Option',
                icon: FaExchangeAlt,
                to: Settings.CURRENCY_CHANGE_OPTION,
                mark: false,
                active: false,
            },
            {
                name: 'Enable Keep Unit Change',
                icon: RiCoinFill,
                to: Settings.ENABLE_KEEP_UNIT_CHANGE,
                mark: false,
                active: false,
            },
        ],
        'Print Options': [
            { name: 'Receipt', icon: FaReceipt, to: Settings.RECEIPT, mark: false, active: false },
            {
                name: 'Customer Order Print',
                icon: FaPrint,
                to: Settings.CUSTOMER_ORDER_PRINT,
                mark: false,
                active: false,
            },
            {
                name: 'Kitchen Order Print',
                icon: TiPrinter,
                to: Settings.KITCHEN_ORDER_PRINT,
                mark: false,
                active: false,
            },
            {
                name: 'Waiting List Tag',
                icon: FaClipboardList,
                to: Settings.WAITING_LIST_TAG,
                mark: false,
                active: false,
            },
        ],
        Security: [
            {
                name: 'Use Security Function by Tasks',
                icon: FaTableCellsRowLock,
                to: Settings.USE_SECURITY_FUNCTION_BY_TASKS,
                mark: false,
                active: false,
            },
            { name: 'Security Group', icon: FaUserLock, to: Settings.SECURITY_GROUP, mark: false, active: false },
        ],
        'Network Server': [
            { name: 'Email Server', icon: IoIosMail, to: Settings.EMAIL_SERVER, mark: false, active: false },
        ],
    },
    BIZSMS: {
        noFilter: [
            { name: 'BIZ SMS Setting', icon: FaUserCog, to: BIZSMS.BIZ_SMS_SETTING, mark: false, active: false },
            { name: 'User Guide', icon: FaUserTie, to: BIZSMS.USER_GUIDE, mark: false, active: false },
        ],
    },
    SMART_ORDER: {
        'Store Management': [
            { name: 'Store Info', icon: MdScreenLockLandscape, to: '', mark: false, active: false },
            { name: 'Tax', icon: GrDocumentLocked, to: '', mark: false, active: false },
            { name: 'UP-SmartOrder QR Printing', icon: FaUserLock, to: '', mark: false, active: false },
            { name: 'Up TableOrder QR Printing', icon: FaLevelUpAlt, to: '', mark: false, active: false },
        ],
        Settings: [
            { name: 'UP-SmartOrder Settings', icon: MdScreenLockLandscape, to: '', mark: false, active: false },
            { name: 'UP-TableOrder Settings', icon: GrDocumentLocked, to: '', mark: false, active: false },
            { name: 'UP-Order Settings', icon: FaUserLock, to: '', mark: false, active: false },
            { name: 'UP Order Image Settings', icon: FaLevelUpAlt, to: '', mark: false, active: false },
            { name: 'Call message', icon: FaLevelUpAlt, to: '', mark: false, active: false },
            { name: 'Robowide Settings', icon: FaLevelUpAlt, to: '', mark: false, active: false },
        ],
        'Menu Management': [
            { name: 'Menu Setup', icon: MdScreenLockLandscape, to: '', mark: false, active: false },
            { name: 'Item Recipe Management', icon: GrDocumentLocked, to: '', mark: false, active: false },
            { name: 'Item Recipe Manager', icon: FaUserLock, to: '', mark: false, active: false },
            { name: 'Modifier', icon: FaLevelUpAlt, to: '', mark: false, active: false },
            { name: 'Sub Menu', icon: FaLevelUpAlt, to: '', mark: false, active: false },
            { name: 'Item Management By Strore', icon: FaLevelUpAlt, to: '', mark: false, active: false },
            { name: 'Item Description Image URL', icon: FaLevelUpAlt, to: '', mark: false, active: false },
        ],
        'Sales Reports': [
            { name: 'Daily Sales Report', icon: MdScreenLockLandscape, to: '', mark: false, active: false },
            { name: 'Breakdown of sales by month', icon: GrDocumentLocked, to: '', mark: false, active: false },
            { name: 'Sales By Receipt', icon: FaUserLock, to: '', mark: false, active: false },
            { name: 'Sales By Receipt Detail', icon: FaLevelUpAlt, to: '', mark: false, active: false },
            { name: 'Sales Ranking', icon: FaLevelUpAlt, to: '', mark: false, active: false },
        ],
    },
    WEBLOGIN: {
        noFilter: [
            {
                name: 'Web Login',
                icon: MdScreenLockLandscape,
                to: WebLogin.WEB_LOGIN_FUNTION,
                mark: false,
                active: false,
            },
            {
                name: 'Use Security Function by Tasks',
                icon: GrDocumentLocked,
                to: WebLogin.USE_SECURITY_FUNCTION_BY_TASKS2,
                mark: false,
                active: false,
            },
            { name: 'Employee Security', icon: FaUserLock, to: WebLogin.EMPLOYEE_SECURITY, mark: false, active: false },
            { name: 'Security Level', icon: FaLevelUpAlt, to: WebLogin.SECURITY_LEVEL, mark: false, active: false },
        ],
    },
};

export default menuStructure;
