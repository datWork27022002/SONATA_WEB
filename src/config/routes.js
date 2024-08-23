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
        TOPPING_SETTINGS: `/${pathBasicSettings}/${itemLevel3.TOPPING_SETTINGS.pathKey}`,
        SUB_MENU: `/${pathBasicSettings}/${itemLevel3.SUB_MENU.pathKey}`,
        MENU_SEARCH: `/${pathBasicSettings}/${itemLevel3.MENU_SEARCH.pathKey}`,
        INVENTORY_ITEM_SEARCH: `/${pathBasicSettings}/${itemLevel3.INVENTORY_ITEM_SEARCH.pathKey}`,
        MENU_BOARD_MANAGEMENT: `/${pathBasicSettings}/${itemLevel3.MENU_BOARD_MANAGEMENT.pathKey}`,
        POS_MENU_BOARD: `/${pathBasicSettings}/${itemLevel3.POS_MENU_BOARD.pathKey}`,
        CATEGORY_MANAGER: `/${pathBasicSettings}/${itemLevel3.CATEGORY_MANAGER.pathKey}`,
        RECIPE_BUILDER: `/${pathBasicSettings}/${itemLevel3.RECIPE_BUILDER.pathKey}`,
        RECIPE_SEARCH: `/${pathBasicSettings}/${itemLevel3.RECIPE_SEARCH.pathKey}`,
        KITCHEN_MEMO: `/${pathBasicSettings}/${itemLevel3.KITCHEN_MEMO.pathKey}`,
        ITEM_MANAGEMENT_BY_STRORE: `/${pathBasicSettings}/${itemLevel3.ITEM_MANAGEMENT_BY_STRORE.pathKey}`,
        CHANGE_OF_MULTILINGUAL_NAME: `/${pathBasicSettings}/${itemLevel3.CHANGE_OF_MULTILINGUAL_NAME.pathKey}`,
        ITEM_LINKED_CODE_MANAGEMENT: `/${pathBasicSettings}/${itemLevel3.ITEM_LINKED_CODE_MANAGEMENT.pathKey}`,
        MAIN_MENU_SETTING: `/${pathBasicSettings}/${itemLevel3.MAIN_MENU_SETTING.pathKey}`,
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
