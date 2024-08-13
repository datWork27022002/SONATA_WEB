import nameMap from './nameMap';

const { itemLevel1, itemLevel3 } = nameMap;

const routes = {
    LOGIN: '/login',
    HOME: '/',
    WEBLOGIN: '/WebLogin',
    BOOKMARK: '/Bookmark',
    BasicSettings: {
        BASICSETTINGS: `/${itemLevel1.BASICSETTINGS.pathKey}`,
        GROUPMANAGEMENT: `/${itemLevel1.BASICSETTINGS.pathKey}/${itemLevel3.GROUPMANAGEMENT.pathKey}`,
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
