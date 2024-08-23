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
import { TableLocationManager } from '~/pages/BasicSettings';
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
    { path: routes.HOME, component: Home, layout: DefaultLayout },
    { path: routes.LOGIN, component: Login, layout: null },
    { path: pathBasicSettings.BASICSETTINGS, component: BasicSettings },
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
