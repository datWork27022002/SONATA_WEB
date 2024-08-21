import nameMap from './nameMap';

const { itemLevel1, itemLevel3 } = nameMap;

const pathBasicSettings = itemLevel1.BASICSETTINGS.pathKey;

const routes = {
    LOGIN: '/login',
    HOME: '/',
    WEBLOGIN: '/WebLogin',
    BOOKMARK: '/Bookmark',
    BasicSettings: {
        BASICSETTINGS: `/${pathBasicSettings}`,
        GROUP_MANAGEMENT: `/${pathBasicSettings}/${itemLevel3.GROUP_MANAGEMENT.pathKey}`,
        STORE_INFO: `/${pathBasicSettings}/${itemLevel3.STORE_INFO.pathKey}`,
        STORE_LIST: `/${pathBasicSettings}/${itemLevel3.STORE_LIST.pathKey}`,
        WAREHOUSE_MANAGEMENT: `/${pathBasicSettings}/${itemLevel3.WAREHOUSE_MANAGEMENT.pathKey}`,
        CASH_DRAWER: `/${pathBasicSettings}/${itemLevel3.CASH_DRAWER.pathKey}`,
        DISCOUNT: `/${pathBasicSettings}/${itemLevel3.DISCOUNT.pathKey}`,
        EMPLOYEE_GROUP: `/${pathBasicSettings}/${itemLevel3.EMPLOYEE_GROUP.pathKey}`,
        EMPLOYEE_INFO: `/${pathBasicSettings}/${itemLevel3.EMPLOYEE_INFO.pathKey}`,
        EMPLOYEE_LIST: `/${pathBasicSettings}/${itemLevel3.EMPLOYEE_LIST.pathKey}`,
        MENU_SETUP: `/${pathBasicSettings}/${itemLevel3.MENU_SETUP.pathKey}`,
        ITEM_RECEIPT_MANAGEMENT: `/${pathBasicSettings}/${itemLevel3.ITEM_RECEIPT_MANAGEMENT.pathKey}`,
        ITEM_RECEIPT_MANAGER: `/${pathBasicSettings}/${itemLevel3.ITEM_RECEIPT_MANAGER.pathKey}`,
    },
    ManagerFunction: {
        MANAGERFUNCTION: `/${itemLevel1.MANAGERFUNCTION.pathKey}`,
    },
    Customer: {
        CUSTOMER: `/${itemLevel1.CUSTOMER.pathKey}`,
    },
    OperationReports: {
        OPERATIONREPORTS: `/${itemLevel1.OPERATIONREPORTS.pathKey}`,
    },
    SaleReports: {
        SALEREPORTS: `/${itemLevel1.SALEREPORTS.pathKey}`,
    },
    PurchaseOrder: {
        PURCHASEORDER: `/${itemLevel1.PURCHASEORDER.pathKey}`,
    },
    Settings: {
        SETTINGS: `/${itemLevel1.SETTINGS.pathKey}`,
    },
    BIZSMS: {
        BIZSMS: `/${itemLevel1.BIZSMS.pathKey}`,
    },
};

export default routes;
