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
import SaleReports from '~/pages/SaleReports';
import PurchaseOrder from '~/pages/PurchaseOrder';
import Settings from '~/pages/Settings';
import BIZSMS from '~/pages/BIZSMS';
import WebLogin from '~/pages/WebLogin';
import Bookmark from '~/pages/Bookmark';

const { routes } = config;
const pathBasicSettings = routes.BasicSettings;
const pathManagerFunction = routes.ManagerFunction;
const pathCustomer = routes.Customer;
const pathOperationReports = routes.OperationReports;

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
];

export const publicRoute = [
    ...commonRoute,
    ...basicSettingsRoute,
    ...managerFunctionRoute,
    ...customerRoute,
    ...operationReportsRoute,
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
