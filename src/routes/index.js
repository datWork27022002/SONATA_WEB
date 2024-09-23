import config from '~/config';
import { DefaultLayout } from '~/layouts';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import BasicSettings, { GroupManagement, StoreInfo, StoreList, WarehouseManagement } from '~/pages/BasicSettings';
import { CashDrawer, Discount, EmployeeGroup, EmployeeInfo, EmployeeList, MenuSetup } from '~/pages/BasicSettings';
import { ItemRecipeManagement, ItemRecipeManager, ToppingSettings, SubMenu, MenuSearch } from '~/pages/BasicSettings';
import { InventoryItemSearch, MenuBoardManagement, PosMenuBoard, CategoryManager } from '~/pages/BasicSettings';
import { RecipeBuilder, RecipeSearch, KitchenMemo, ItemManagementByStrore } from '~/pages/BasicSettings';
import { ChangeOfMultilingualName, ItemLinkedCodeManagement, MainMenuSetting } from '~/pages/BasicSettings';
import { TableLocationManager, TableDesignSetting, POSFavoriteFunctionButton } from '~/pages/BasicSettings';
import { PaymentButtonSetting, KioskImageSettings, UPOrderImageSettings } from '~/pages/BasicSettings';
import { KioskFunctionSetting, POSUserDefinitionLanguage } from '~/pages/BasicSettings';
import ManagerFunction, { Announcement, Payroll, TimeCard, ListOfInformationByForce } from '~/pages/ManagerFunction';
import Customer, { CustomerGroup, CustomerManagement, MembershipList, CustomerSalesTotal } from '~/pages/Customer';
import { CustomerDetailedSalesReport, PointReport } from '~/pages/Customer';
import OperationReports, { MonthlyComparison, YearlyComparison, TotalStoreSalesByItem } from '~/pages/OperationReports';
import { TotalCategorySalesByStore, TotalItemSalesByStore, TotalStoreSalesByCategory } from '~/pages/OperationReports';
import { TotalSalesSummaryByItem, TotalSalesWeekByItem, TotalSalesHourByItem } from '~/pages/OperationReports';
import { TotalSalesItemByHour, TotalSalesItemByWeek, TotalStoreSalesBySupplier } from '~/pages/OperationReports';
import { SalesAmountByStore, MonthlySalesAmountByStore, StoreMonthlySalesAmount } from '~/pages/OperationReports';
import { DailySalesByItem } from '~/pages/OperationReports';
import SaleReports, { DailySalesReport, DailySalesSummary, SalesSummary, DetailedSalesList } from '~/pages/SaleReports';
import { SalesByReceipt, SalesByReceiptDetail, CashReceiptApprovalCancelationReport } from '~/pages/SaleReports';
import { CreditCardApprovalCancelationReport, SalesReportByCardTypeDetail } from '~/pages/SaleReports';
import { SalesRecordByEmployee, SalesRecordByEmployeeDate, EmployeeCommission } from '~/pages/SaleReports';
import { TotalSalesReport, SimplifiedSalesTotal, AggregateRevenueItemsByCategory } from '~/pages/SaleReports';
import { HourlySales, TimeOfDaySalesReport, SalesReportByPaymentType } from '~/pages/SaleReports';
import { SalesReportByCardType, SalesRanking, SalesAnalysisReportItem } from '~/pages/SaleReports';
import { TotalSalesReportDetail, EmployeeSalesAnalysis, OrderCancelationReport } from '~/pages/SaleReports';
import { VoidSummary, VoidDetail, SalesDiscountReport, SalesDiscountSummary } from '~/pages/SaleReports';
import { NoTaxSaleReport, TaxDetail, TaxSummary, SalesCashInOut, CashInOut } from '~/pages/SaleReports';
import PurchaseOrder, { InventoryLookUp, InventoryAdjustments, InventoryTransfer } from '~/pages/PurchaseOrder';
import { IVManagementTable, CustomerPurchase, CustomerSaleB, SupplierLedger } from '~/pages/PurchaseOrder';
import { CustomerLedger, PayableReport, ReceivableReport, Amount, SupplierSetting } from '~/pages/PurchaseOrder';
import Settings, { StoreOperations, StoreDetailSettings, CashDrawer2, TAX, GuestPager } from '~/pages/Settings';
import { OperationsManagement, OrderPosCancelFunctionOption, PrinterLanguageSetting } from '~/pages/Settings';
import { AutoClosePopupOption, PosInformation, PrinterSetting, LabelPrintSetting } from '~/pages/Settings';
import { PosDisplaySetting, CidDevice, PrintOptionByPos, WindowsKioksOption } from '~/pages/Settings';
import { MsrSetting, MsrPortSetting, EcrSetting } from '~/pages/Settings';
import {} from '~/pages/Settings';
import {} from '~/pages/Settings';
import BIZSMS from '~/pages/BIZSMS';
import WebLogin from '~/pages/WebLogin';
import Bookmark from '~/pages/Bookmark';

const { routes } = config;
const pathBasicSettings = routes.BasicSettings;
const pathManagerFunction = routes.ManagerFunction;
const pathCustomer = routes.Customer;
const pathOperationReports = routes.OperationReports;
const pathSaleReports = routes.SaleReports;
const pathPurchaseOrder = routes.PurchaseOrder;
const pathSettings = routes.Settings;

const commonRoute = [
    { path: routes.HOME, component: Home, layout: DefaultLayout },
    { path: routes.LOGIN, component: Login, layout: null },
];

const basicSettingsRoute = [
    { path: pathBasicSettings.GROUP_MANAGEMENT, component: GroupManagement },
    { path: pathBasicSettings.STORE_INFO, component: StoreInfo },
    { path: pathBasicSettings.STORE_LIST, component: StoreList },
    { path: pathBasicSettings.WAREHOUSE_MANAGEMENT, component: WarehouseManagement },
    { path: pathBasicSettings.CASH_DRAWER, component: CashDrawer },
    { path: pathBasicSettings.DISCOUNT, component: Discount },
    { path: pathBasicSettings.EMPLOYEE_GROUP, component: EmployeeGroup },
    { path: pathBasicSettings.EMPLOYEE_INFO, component: EmployeeInfo },
    { path: pathBasicSettings.EMPLOYEE_LIST, component: EmployeeList },
    { path: pathBasicSettings.MENU_SETUP, component: MenuSetup },
    { path: pathBasicSettings.ITEM_RECEIPT_MANAGEMENT, component: ItemRecipeManagement },
    { path: pathBasicSettings.ITEM_RECEIPT_MANAGER, component: ItemRecipeManager },
    { path: pathBasicSettings.TOPPING_SETTINGS, component: ToppingSettings },
    { path: pathBasicSettings.SUB_MENU, component: SubMenu },
    { path: pathBasicSettings.MENU_SEARCH, component: MenuSearch },
    { path: pathBasicSettings.INVENTORY_ITEM_SEARCH, component: InventoryItemSearch },
    { path: pathBasicSettings.MENU_BOARD_MANAGEMENT, component: MenuBoardManagement },
    { path: pathBasicSettings.POS_MENU_BOARD, component: PosMenuBoard },
    { path: pathBasicSettings.CATEGORY_MANAGER, component: CategoryManager },
    { path: pathBasicSettings.RECIPE_BUILDER, component: RecipeBuilder },
    { path: pathBasicSettings.RECIPE_SEARCH, component: RecipeSearch },
    { path: pathBasicSettings.KITCHEN_MEMO, component: KitchenMemo },
    { path: pathBasicSettings.ITEM_MANAGEMENT_BY_STRORE, component: ItemManagementByStrore },
    { path: pathBasicSettings.CHANGE_OF_MULTILINGUAL_NAME, component: ChangeOfMultilingualName },
    { path: pathBasicSettings.ITEM_LINKED_CODE_MANAGEMENT, component: ItemLinkedCodeManagement },
    { path: pathBasicSettings.MAIN_MENU_SETTING, component: MainMenuSetting },
    { path: pathBasicSettings.TABLE_LOCATION_MANAGER, component: TableLocationManager },
    { path: pathBasicSettings.TABLE_DESIGN_SETTING, component: TableDesignSetting },
    { path: pathBasicSettings.MENU_SETUP2, component: MenuSetup },
    { path: pathBasicSettings.POS_FAVORITE_FUNCTION_BUTTON, component: POSFavoriteFunctionButton },
    { path: pathBasicSettings.PAYMENT_BUTTON_SETTING, component: PaymentButtonSetting },
    { path: pathBasicSettings.KIOSK_IMAGE_SETTINGS, component: KioskImageSettings },
    { path: pathBasicSettings.UP_ORDER_IMAGE_SETTINGS, component: UPOrderImageSettings },
    { path: pathBasicSettings.KIOSK_FUNCTION_SETTING, component: KioskFunctionSetting },
    { path: pathBasicSettings.POS_USER_DEFINITION_LANGUAGE, component: POSUserDefinitionLanguage },
];

const managerFunctionRoute = [
    { path: pathManagerFunction.ANNOUNCEMENT, component: Announcement },
    { path: pathManagerFunction.PAYROLL, component: Payroll },
    { path: pathManagerFunction.TIME_CARD, component: TimeCard },
    { path: pathManagerFunction.LIST_OF_INFORMATION_BY_FORCE, component: ListOfInformationByForce },
];

const customerRoute = [
    { path: pathCustomer.CUSTOMER_GROUP, component: CustomerGroup },
    { path: pathCustomer.CUSTOMER_MANAGEMENT, component: CustomerManagement },
    { path: pathCustomer.MEMBERSHIP_LIST, component: MembershipList },
    { path: pathCustomer.CUSTOMER_SALES_TOTAL, component: CustomerSalesTotal },
    { path: pathCustomer.CUSTOMER_DETAILED_SALES_REPORT, component: CustomerDetailedSalesReport },
    { path: pathCustomer.POINT_REPORT, component: PointReport },
];

const operationReportsRoute = [
    { path: pathOperationReports.MONTHLY_COMPARISON, component: MonthlyComparison },
    { path: pathOperationReports.YEARLY_COMPARISON, component: YearlyComparison },
    { path: pathOperationReports.TOTAL_STORE_SALES_BY_ITEM, component: TotalStoreSalesByItem },
    { path: pathOperationReports.TOTAL_CATEGORY_SALES_BY_STORE, component: TotalCategorySalesByStore },
    { path: pathOperationReports.TOTAL_ITEM_SALES_BY_STORE, component: TotalItemSalesByStore },
    { path: pathOperationReports.TOTAL_STORE_SALES_BY_CATEGORY, component: TotalStoreSalesByCategory },
    { path: pathOperationReports.TOTAL_SALES_SUMMARY_BY_ITEM, component: TotalSalesSummaryByItem },
    { path: pathOperationReports.TOTAL_SALES_WEEK_BY_ITEM, component: TotalSalesWeekByItem },
    { path: pathOperationReports.TOTAL_SALES_HOUR_BY_ITEM, component: TotalSalesHourByItem },
    { path: pathOperationReports.TOTAL_SALES_ITEM_BY_WEEK, component: TotalSalesItemByWeek },
    { path: pathOperationReports.TOTAL_SALES_ITEM_BY_HOUR, component: TotalSalesItemByHour },
    { path: pathOperationReports.TOTAL_STORE_SALES_BY_SUPPLIER, component: TotalStoreSalesBySupplier },
    { path: pathOperationReports.SALES_AMOUNT_BY_STORE, component: SalesAmountByStore },
    { path: pathOperationReports.MONTHLY_SALES_AMOUNT_BY_STORE, component: MonthlySalesAmountByStore },
    { path: pathOperationReports.STORE_MONTHLY_SALES_AMOUNT, component: StoreMonthlySalesAmount },
    { path: pathOperationReports.DAILY_SALES_BY_ITEM, component: DailySalesByItem },
];

const saleReportsRoute = [
    { path: pathSaleReports.DAILY_SALES_REPORT, component: DailySalesReport },
    { path: pathSaleReports.DAILY_SALES_SUMMARY, component: DailySalesSummary },
    { path: pathSaleReports.SALES_SUMMARY, component: SalesSummary },
    { path: pathSaleReports.DETAILED_SALES_LIST, component: DetailedSalesList },
    { path: pathSaleReports.SALES_BY_RECEIPT, component: SalesByReceipt },
    { path: pathSaleReports.SALES_BY_RECEIPT_DETAIL, component: SalesByReceiptDetail },
    { path: pathSaleReports.CASH_RECEIPT_APPROVAL_CANCELATION_REPORT, component: CashReceiptApprovalCancelationReport },
    { path: pathSaleReports.CREDIT_CARD_APPROVAL_CANCELATION_REPORT, component: CreditCardApprovalCancelationReport },
    { path: pathSaleReports.SALES_REPORT_BY_CARD_TYPE_DETAIL, component: SalesReportByCardTypeDetail },
    { path: pathSaleReports.SALES_RECORD_BY_EMPLOYEE, component: SalesRecordByEmployee },
    { path: pathSaleReports.SALES_RECORD_BY_EMPLOYEE_DATE, component: SalesRecordByEmployeeDate },
    { path: pathSaleReports.EMPLOYEE_COMMISSION, component: EmployeeCommission },
    { path: pathSaleReports.TOTAL_SALES_REPORT, component: TotalSalesReport },
    { path: pathSaleReports.SIMPLIFIED_SALES_TOTAL, component: SimplifiedSalesTotal },
    { path: pathSaleReports.AGGREGATE_REVENUE_ITEMS_BY_CATEGORY, component: AggregateRevenueItemsByCategory },
    { path: pathSaleReports.HOURLY_SALES, component: HourlySales },
    { path: pathSaleReports.TIME_OF_DAY_SALES_REPORT, component: TimeOfDaySalesReport },
    { path: pathSaleReports.SALES_REPORT_BY_PAYMENT_TYPE, component: SalesReportByPaymentType },
    { path: pathSaleReports.SALES_REPORT_BY_CARD_TYPE, component: SalesReportByCardType },
    { path: pathSaleReports.SALES_RANKING, component: SalesRanking },
    { path: pathSaleReports.SALES_ANALYSIS_REPORT_ITEM, component: SalesAnalysisReportItem },
    { path: pathSaleReports.TOTAL_SALES_REPORT_DETAIL, component: TotalSalesReportDetail },
    { path: pathSaleReports.EMPLOYEE_SALES_ANALYSIS, component: EmployeeSalesAnalysis },
    { path: pathSaleReports.ORDER_CANCELATION_REPORT, component: OrderCancelationReport },
    { path: pathSaleReports.VOID_SUMMARY, component: VoidSummary },
    { path: pathSaleReports.VOID_DETAIL, component: VoidDetail },
    { path: pathSaleReports.SALES_DISCOUNT_REPORT, component: SalesDiscountReport },
    { path: pathSaleReports.SALES_DISCOUNT_SUMMARY, component: SalesDiscountSummary },
    { path: pathSaleReports.NO_TAX_SALE_REPORT, component: NoTaxSaleReport },
    { path: pathSaleReports.TAX_DETAIL, component: TaxDetail },
    { path: pathSaleReports.TAX_SUMMARY, component: TaxSummary },
    { path: pathSaleReports.SALES_CASH_IN_OUT, component: SalesCashInOut },
    { path: pathSaleReports.CASH_IN_OUT, component: CashInOut },
];

const purchaseOrdersRoute = [
    { path: pathPurchaseOrder.INVENTORY_LOOK_UP, component: InventoryLookUp },
    { path: pathPurchaseOrder.INVENTORY_ADJUSTMENTS, component: InventoryAdjustments },
    { path: pathPurchaseOrder.INVENTORY_TRANSFER, component: InventoryTransfer },
    { path: pathPurchaseOrder.IV_MANAGEMENT_TABLE, component: IVManagementTable },
    { path: pathPurchaseOrder.CUSTOMER_PURCHASE, component: CustomerPurchase },
    { path: pathPurchaseOrder.CUSTOMER_SALE_B, component: CustomerSaleB },
    { path: pathPurchaseOrder.SUPPLIER_LEDGER, component: SupplierLedger },
    { path: pathPurchaseOrder.CUSTOMER_LEDGER, component: CustomerLedger },
    { path: pathPurchaseOrder.PAYABLE_REPORT, component: PayableReport },
    { path: pathPurchaseOrder.RECEIVABLE_REPORT, component: ReceivableReport },
    { path: pathPurchaseOrder.SUPPLIER_SETTING, component: SupplierSetting },
    { path: pathPurchaseOrder.AMOUNT, component: Amount },
];

const settingsRoute = [
    { path: pathSettings.STORE_OPERATIONS, component: StoreOperations },
    { path: pathSettings.STORE_DETAIL_SETTING, component: StoreDetailSettings },
    { path: pathSettings.CASH_DRAWER2, component: CashDrawer2 },
    { path: pathSettings.TAX, component: TAX },
    { path: pathSettings.OPERATIONS_MANAGEMENT, component: OperationsManagement },
    { path: pathSettings.ORDER_POS_CANCEL_FUNCTION_OPTION, component: OrderPosCancelFunctionOption },
    { path: pathSettings.PRINTER_LANGUAGE_SETTING, component: PrinterLanguageSetting },
    { path: pathSettings.AUTO_CLOSE_POPUP_OPTION, component: AutoClosePopupOption },
    { path: pathSettings.POS_INFORMATION, component: PosInformation },
    { path: pathSettings.PRINTER_SETTING, component: PrinterSetting },
    { path: pathSettings.LABEL_PRINT_SETTING, component: LabelPrintSetting },
    { path: pathSettings.GUEST_PAGER, component: GuestPager },
    { path: pathSettings.POS_DISPLAY_SETTING, component: PosDisplaySetting },
    { path: pathSettings.CID_DEVICE, component: CidDevice },
    { path: pathSettings.PRINT_OPTION_BY_POS, component: PrintOptionByPos },
    { path: pathSettings.WINDOWS_KIOSK_OPTIONS, component: WindowsKioksOption },
    { path: pathSettings.MSR_SETTING, component: MsrSetting },
    { path: pathSettings.MSR_PORT_SETTING, component: MsrPortSetting },
    { path: pathSettings.ECR_SETTING, component: EcrSetting },
];

export const publicRoute = [
    ...commonRoute,
    ...basicSettingsRoute,
    ...managerFunctionRoute,
    ...customerRoute,
    ...operationReportsRoute,
    ...saleReportsRoute,
    ...purchaseOrdersRoute,
    ...settingsRoute,
    { path: pathBasicSettings.BASICSETTINGS, component: BasicSettings },
    { path: routes.ManagerFunction.MANAGERFUNCTION, component: ManagerFunction },
    { path: routes.Customer.CUSTOMER, component: Customer },
    { path: routes.OperationReports.OPERATIONREPORTS, component: OperationReports },
    { path: routes.SaleReports.SALEREPORTS, component: SaleReports },
    { path: routes.PurchaseOrder.PURCHASEORDER, component: PurchaseOrder },
    { path: routes.Settings.SETTINGS, component: Settings },
    { path: routes.BIZSMS.BIZSMS, component: BIZSMS },
    { path: routes.WEBLOGIN, component: WebLogin },
    { path: routes.BOOKMARK, component: Bookmark },
];
export const privateRoute = [];
