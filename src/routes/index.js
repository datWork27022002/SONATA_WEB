import config from '~/config';
import { BreadcrumbLayout } from '~/layouts';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import BasicSettings, { GroupManagement, StoreInfo, StoreList, WarehouseManagement } from '~/pages/BasicSettings';
import { CashDrawer, Discount, EmployeeGroup } from '~/pages/BasicSettings';
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

export const publicRoute = [
    { path: routes.HOME, component: Home },
    { path: routes.LOGIN, component: Login, layout: null },
    { path: routes.BasicSettings.BASICSETTINGS, component: BasicSettings, layout: BreadcrumbLayout },
    { path: routes.BasicSettings.GROUP_MANAGEMENT, component: GroupManagement, layout: BreadcrumbLayout },
    { path: routes.BasicSettings.STORE_INFO, component: StoreInfo, layout: BreadcrumbLayout },
    { path: routes.BasicSettings.STORE_LIST, component: StoreList, layout: BreadcrumbLayout },
    { path: routes.BasicSettings.WAREHOUSE_MANAGEMENT, component: WarehouseManagement, layout: BreadcrumbLayout },
    { path: routes.BasicSettings.CASH_DRAWER, component: CashDrawer, layout: BreadcrumbLayout },
    { path: routes.BasicSettings.DISCOUNT, component: Discount, layout: BreadcrumbLayout },
    { path: routes.BasicSettings.EMPLOYEE_GROUP, component: EmployeeGroup, layout: BreadcrumbLayout },
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
