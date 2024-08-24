import nameMap from './nameMap';

const { itemLevel1, itemLevel3 } = nameMap;

const pathBasicSettings = itemLevel1.BASICSETTINGS.pathKey;
const pathManagerFunction = itemLevel1.MANAGERFUNCTION.pathKey;
const pathCustomer = itemLevel1.CUSTOMER.pathKey;
const pathOperationReports = itemLevel1.OPERATIONREPORTS.pathKey;

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
        TABLE_LOCATION_MANAGER: `/${pathBasicSettings}/${itemLevel3.TABLE_LOCATION_MANAGER.pathKey}`,
        TABLE_DESIGN_SETTING: `/${pathBasicSettings}/${itemLevel3.TABLE_DESIGN_SETTING.pathKey}`,
        MENU_SETUP2: `/${pathBasicSettings}/${itemLevel3.MENU_SETUP2.pathKey}`,
        POS_FAVORITE_FUNCTION_BUTTON: `/${pathBasicSettings}/${itemLevel3.POS_FAVORITE_FUNCTION_BUTTON.pathKey}`,
        PAYMENT_BUTTON_SETTING: `/${pathBasicSettings}/${itemLevel3.PAYMENT_BUTTON_SETTING.pathKey}`,
        KIOSK_IMAGE_SETTINGS: `/${pathBasicSettings}/${itemLevel3.KIOSK_IMAGE_SETTINGS.pathKey}`,
        UP_ORDER_IMAGE_SETTINGS: `/${pathBasicSettings}/${itemLevel3.UP_ORDER_IMAGE_SETTINGS.pathKey}`,
        KIOSK_FUNCTION_SETTING: `/${pathBasicSettings}/${itemLevel3.KIOSK_FUNCTION_SETTING.pathKey}`,
        POS_USER_DEFINITION_LANGUAGE: `/${pathBasicSettings}/${itemLevel3.POS_USER_DEFINITION_LANGUAGE.pathKey}`,
    },
    ManagerFunction: {
        MANAGERFUNCTION: `/${pathManagerFunction}`,
        ANNOUNCEMENT: `/${pathManagerFunction}/${itemLevel3.ANNOUNCEMENT.pathKey}`,
        PAYROLL: `/${pathManagerFunction}/${itemLevel3.PAYROLL.pathKey}`,
        TIME_CARD: `/${pathManagerFunction}/${itemLevel3.TIME_CARD.pathKey}`,
        LIST_OF_INFORMATION_BY_FORCE: `/${pathManagerFunction}/${itemLevel3.LIST_OF_INFORMATION_BY_FORCE.pathKey}`,
    },
    Customer: {
        CUSTOMER: `/${pathCustomer}`,
        CUSTOMER_GROUP: `/${pathCustomer}/${itemLevel3.CUSTOMER_GROUP.pathKey}`,
        CUSTOMER_MANAGEMENT: `/${pathCustomer}/${itemLevel3.CUSTOMER_MANAGEMENT.pathKey}`,
        MEMBERSHIP_LIST: `/${pathCustomer}/${itemLevel3.MEMBERSHIP_LIST.pathKey}`,
        CUSTOMER_SALES_TOTAL: `/${pathCustomer}/${itemLevel3.CUSTOMER_SALES_TOTAL.pathKey}`,
        CUSTOMER_DETAILED_SALES_REPORT: `/${pathCustomer}/${itemLevel3.CUSTOMER_DETAILED_SALES_REPORT.pathKey}`,
        POINT_REPORT: `/${pathCustomer}/${itemLevel3.POINT_REPORT.pathKey}`,
    },
    OperationReports: {
        OPERATIONREPORTS: `/${itemLevel1.OPERATIONREPORTS.pathKey}`,
        MONTHLY_COMPARISON: `/${pathOperationReports}/${itemLevel3.MONTHLY_COMPARISON.pathKey}`,
        YEARLY_COMPARISON: `/${pathOperationReports}/${itemLevel3.YEARLY_COMPARISON.pathKey}`,
        TOTAL_CATEGORY_SALES_BY_STORE: `/${pathOperationReports}/${itemLevel3.TOTAL_CATEGORY_SALES_BY_STORE.pathKey}`,
        TOTAL_ITEM_SALES_BY_STORE: `/${pathOperationReports}/${itemLevel3.TOTAL_ITEM_SALES_BY_STORE.pathKey}`,
        TOTAL_STORE_SALES_BY_CATEGORY: `/${pathOperationReports}/${itemLevel3.TOTAL_STORE_SALES_BY_CATEGORY.pathKey}`,
        TOTAL_SALES_SUMMARY_BY_ITEM: `/${pathOperationReports}/${itemLevel3.TOTAL_SALES_SUMMARY_BY_ITEM.pathKey}`,
        TOTAL_STORE_SALES_BY_ITEM: `/${pathOperationReports}/${itemLevel3.TOTAL_STORE_SALES_BY_ITEM.pathKey}`,
        TOTAL_SALES_WEEK_BY_ITEM: `/${pathOperationReports}/${itemLevel3.TOTAL_SALES_WEEK_BY_ITEM.pathKey}`,
        DAILY_SALES_BY_ITEM: `/${pathOperationReports}/${itemLevel3.DAILY_SALES_BY_ITEM.pathKey}`,
        TOTAL_SALES_HOUR_BY_ITEM: `/${pathOperationReports}/${itemLevel3.TOTAL_SALES_HOUR_BY_ITEM.pathKey}`,
        TOTAL_SALES_ITEM_BY_WEEK: `/${pathOperationReports}/${itemLevel3.TOTAL_SALES_ITEM_BY_WEEK.pathKey}`,
        TOTAL_SALES_ITEM_BY_HOUR: `/${pathOperationReports}/${itemLevel3.TOTAL_SALES_ITEM_BY_HOUR.pathKey}`,
        TOTAL_STORE_SALES_BY_SUPPLIER: `/${pathOperationReports}/${itemLevel3.TOTAL_STORE_SALES_BY_SUPPLIER.pathKey}`,
        SALES_AMOUNT_BY_STORE: `/${pathOperationReports}/${itemLevel3.SALES_AMOUNT_BY_STORE.pathKey}`,
        MONTHLY_SALES_AMOUNT_BY_STORE: `/${pathOperationReports}/${itemLevel3.MONTHLY_SALES_AMOUNT_BY_STORE.pathKey}`,
        STORE_MONTHLY_SALES_AMOUNT: `/${pathOperationReports}/${itemLevel3.STORE_MONTHLY_SALES_AMOUNT.pathKey}`,
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
