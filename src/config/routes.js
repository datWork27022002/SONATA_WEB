import nameMap from './nameMap';

const { itemLevel1, itemLevel3 } = nameMap;

const routes = {
    LOGIN: '/login',
    HOME: '/',
    WEBLOGIN: '/WebLogin',
    BOOKMARK: '/Bookmark',
    BasicSettings: {
        BASICSETTINGS: `/${itemLevel1.BASICSETTINGS.pathKey}`,
        GROUP_MANAGEMENT: `/${itemLevel1.BASICSETTINGS.pathKey}/${itemLevel3.GROUP_MANAGEMENT.pathKey}`,
        STORE_INFO: `/${itemLevel1.BASICSETTINGS.pathKey}/${itemLevel3.STORE_INFO.pathKey}`,
        STORE_LIST: `/${itemLevel1.BASICSETTINGS.pathKey}/${itemLevel3.STORE_LIST.pathKey}`,
        WAREHOUSE_MANAGEMENT: `/${itemLevel1.BASICSETTINGS.pathKey}/${itemLevel3.WAREHOUSE_MANAGEMENT.pathKey}`,
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
