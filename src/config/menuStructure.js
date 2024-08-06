import {
    BsFillHousesFill,
    BsFilePostFill,
    BsFillInfoSquareFill,
    BsCalendar2MonthFill,
    BsCalendar2DayFill,
    BsCalendar2WeekFill,
    BsReceipt,
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
} from 'react-icons/fa';
import { FaWarehouse, FaChalkboardUser, FaCalendarDay, FaCashRegister, FaTable } from 'react-icons/fa6';
import { GiHamburger, GiPaperBagOpen, GiCash, GiBuyCard } from 'react-icons/gi';
import { IoIosCash, IoMdDocument } from 'react-icons/io';
import { IoReceiptOutline, IoIdCardOutline, IoAnalytics, IoReceipt } from 'react-icons/io5';
import { RiDiscountPercentFill, RiUserSearchFill, RiMenuSearchFill } from 'react-icons/ri';
import { TbHomeSearch, TbFileReport, TbClockHour10Filled, TbCategoryFilled } from 'react-icons/tb';
import { VscLayoutMenubar } from 'react-icons/vsc';
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
} from 'react-icons/md';
import { LiaReceiptSolid, LiaCcAmazonPay } from 'react-icons/lia';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { CiEdit, CiLink, CiCreditCard1, CiCalendarDate } from 'react-icons/ci';
import { TfiAnnouncement } from 'react-icons/tfi';
import { GrDocumentStore, GrDocumentText, GrDocumentTransfer } from 'react-icons/gr';
import { PiRanking, PiReceiptX, PiNewspaperClippingLight, PiStorefrontFill } from 'react-icons/pi';
import { BiDetail, BiSolidDiscount } from 'react-icons/bi';
import { HiDocumentPlus, HiMiniDocumentMinus } from 'react-icons/hi2';
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
};

export default menuStructure;
