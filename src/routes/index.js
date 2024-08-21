import config from '~/config';
import { BreadcrumbLayout } from '~/layouts';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import BasicSettings, { GroupManagement, StoreInfo, StoreList, WarehouseManagement } from '~/pages/BasicSettings';
import { CashDrawer, Discount, EmployeeGroup, EmployeeInfo, EmployeeList, MenuSetup } from '~/pages/BasicSettings';
import { ItemRecipeManagement, ItemRecipeManager, ToppingSettings, SubMenu, MenuSearch } from '~/pages/BasicSettings';
import { InventoryItemSearch, MenuBoardManagement, PosMenuBoard, CategoryManager } from '~/pages/BasicSettings';
import ManagerFunction from '~/pages/ManagerFunction';
import Customer from '~/pages/Customer';
import OperationReports from '~/pages/OperationReports';
import SaleReports from '~/pages/SaleReports';
import PurchaseOrder from '~/pages/PurchaseOrder';
import Settings from '~/pages/Settings';
import BIZSMS from '~/pages/BIZSMS';
import WebLogin from '~/pages/WebLogin';
import Bookmark from '~/pages/Bookmark';

const { routes } = config;
const pathBasicSettings = routes.BasicSettings;

export const publicRoute = [
    { path: routes.HOME, component: Home },
    { path: routes.LOGIN, component: Login, layout: null },
    { path: pathBasicSettings.BASICSETTINGS, component: BasicSettings, layout: BreadcrumbLayout },
    { path: pathBasicSettings.GROUP_MANAGEMENT, component: GroupManagement, layout: BreadcrumbLayout },
    { path: pathBasicSettings.STORE_INFO, component: StoreInfo, layout: BreadcrumbLayout },
    { path: pathBasicSettings.STORE_LIST, component: StoreList, layout: BreadcrumbLayout },
    { path: pathBasicSettings.WAREHOUSE_MANAGEMENT, component: WarehouseManagement, layout: BreadcrumbLayout },
    { path: pathBasicSettings.CASH_DRAWER, component: CashDrawer, layout: BreadcrumbLayout },
    { path: pathBasicSettings.DISCOUNT, component: Discount, layout: BreadcrumbLayout },
    { path: pathBasicSettings.EMPLOYEE_GROUP, component: EmployeeGroup, layout: BreadcrumbLayout },
    { path: pathBasicSettings.EMPLOYEE_INFO, component: EmployeeInfo, layout: BreadcrumbLayout },
    { path: pathBasicSettings.EMPLOYEE_LIST, component: EmployeeList, layout: BreadcrumbLayout },
    { path: pathBasicSettings.MENU_SETUP, component: MenuSetup, layout: BreadcrumbLayout },
    { path: pathBasicSettings.ITEM_RECEIPT_MANAGEMENT, component: ItemRecipeManagement, layout: BreadcrumbLayout },
    { path: pathBasicSettings.ITEM_RECEIPT_MANAGER, component: ItemRecipeManager, layout: BreadcrumbLayout },
    { path: pathBasicSettings.TOPPING_SETTINGS, component: ToppingSettings, layout: BreadcrumbLayout },
    { path: pathBasicSettings.SUB_MENU, component: SubMenu, layout: BreadcrumbLayout },
    { path: pathBasicSettings.MENU_SEARCH, component: MenuSearch, layout: BreadcrumbLayout },
    { path: pathBasicSettings.INVENTORY_ITEM_SEARCH, component: InventoryItemSearch, layout: BreadcrumbLayout },
    { path: pathBasicSettings.MENU_BOARD_MANAGEMENT, component: MenuBoardManagement, layout: BreadcrumbLayout },
    { path: pathBasicSettings.POS_MENU_BOARD, component: PosMenuBoard, layout: BreadcrumbLayout },
    { path: pathBasicSettings.CATEGORY_MANAGER, component: CategoryManager, layout: BreadcrumbLayout },
    { path: routes.ManagerFunction.MANAGERFUNCTION, component: ManagerFunction, layout: BreadcrumbLayout },
    { path: routes.Customer.CUSTOMER, component: Customer, layout: BreadcrumbLayout },
    { path: routes.OperationReports.OPERATIONREPORTS, component: OperationReports, layout: BreadcrumbLayout },
    { path: routes.SaleReports.SALEREPORTS, component: SaleReports, layout: BreadcrumbLayout },
    { path: routes.PurchaseOrder.PURCHASEORDER, component: PurchaseOrder, layout: BreadcrumbLayout },
    { path: routes.Settings.SETTINGS, component: Settings, layout: BreadcrumbLayout },
    { path: routes.BIZSMS.BIZSMS, component: BIZSMS, layout: BreadcrumbLayout },
    { path: routes.WEBLOGIN, component: WebLogin, layout: BreadcrumbLayout },
    { path: routes.BOOKMARK, component: Bookmark, layout: BreadcrumbLayout },
];
export const privateRoute = [];
