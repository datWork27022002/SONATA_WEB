import config from '~/config';
import { BreadcrumbLayout } from '~/layouts';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import BasicSettings from '~/pages/BasicSettings';
import ManagerFunction from '~/pages/ManagerFunction';
import Customer from '~/pages/Customer';
import OperationReports from '~/pages/OperationReports';
import SaleReports from '~/pages/SaleReports';

const { routes } = config;

export const publicRoute = [
    { path: routes.HOME, component: Home },
    { path: routes.LOGIN, component: Login, layout: null },
    { path: routes.BasicSettings.BASICSETTINGS, component: BasicSettings, layout: BreadcrumbLayout },
    { path: routes.ManagerFunction.MANAGERFUNCTION, component: ManagerFunction, layout: BreadcrumbLayout },
    { path: routes.Customer.CUSTOMER, component: Customer, layout: BreadcrumbLayout },
    { path: routes.OperationReports.OPERATIONREPORTS, component: OperationReports, layout: BreadcrumbLayout },
    { path: routes.SaleReports.SALEREPORTS, component: SaleReports, layout: BreadcrumbLayout },
    { path: routes.PurchaseOrder.PURCHASEORDER, component: ManagerFunction, layout: BreadcrumbLayout },
    { path: routes.Settings.SETTINGS, component: ManagerFunction, layout: BreadcrumbLayout },
    { path: routes.BIZSMS.BIZSMS, component: ManagerFunction, layout: BreadcrumbLayout },
];
export const privateRoute = [];
