const nameMap = {
    itemLevel1: {
        BASICSETTINGS: { pathKey: 'BasicSettings', Visiblename: 'Basic Settings' },
        MANAGERFUNCTION: { pathKey: 'ManagerFunction', Visiblename: 'Manager Function' },
        CUSTOMER: { pathKey: 'Customer', Visiblename: 'Customer' },
        OPERATIONREPORTS: { pathKey: 'OperationReports', Visiblename: 'Operation Reports' },
        SALEREPORTS: { pathKey: 'SaleReports', Visiblename: 'Sale Reports' },
        PURCHASEORDER: { pathKey: 'PurchaseOrder', Visiblename: 'Purchase Order' },
        SETTINGS: { pathKey: 'Settings', Visiblename: 'Settings' },
        BIZSMS: { pathKey: 'BIZSMS', Visiblename: 'BIZ SMS' },
        WEBLOGIN: { pathKey: 'WebLogin', Visiblename: 'Web Login' },
    },
    itemLevel2: {
        STOREMANAGEMENT: { pathKey: '#0', Visiblename: 'Store Management' },
        EMPLOYEEMANAGEMENT: { pathKey: '#1', Visiblename: 'Employee Management' },
        MENUMANAGEMENT: { pathKey: '#2', Visiblename: 'Menu Management' },
        POSSCREENLAYOUT: { pathKey: '#3', Visiblename: 'POS Screen Layout' },
        SALEREPORTS: { pathKey: '#0', Visiblename: 'Sale Reports' },
        SALESANALYSIS: { pathKey: '#1', Visiblename: 'Sales Analysis' },
        VOIDRETURN: { pathKey: '#2', Visiblename: 'POS Screen Layout' },
        DISCOUNTSTATUS: { pathKey: '#3', Visiblename: 'POS Screen Layout' },
        TAX: { pathKey: '#4', Visiblename: 'TAX' },
        EODREPORT: { pathKey: '#5', Visiblename: 'EOD Report' },
        INVENTORY: { pathKey: '#0', Visiblename: 'Inventory' },
        ACCOUNTING: { pathKey: '#1', Visiblename: 'Accounting' },
        SUPPLIER: { pathKey: '#2', Visiblename: 'Supplier' },
        STORE: { pathKey: '#3', Visiblename: 'Store' },
        POS: { pathKey: '#3', Visiblename: 'POS' },
        OPTIONSETTING: { pathKey: '#3', Visiblename: 'Option setting' },
        PRINTOPTIONS: { pathKey: '#3', Visiblename: 'Print Options' },
        SECURITY: { pathKey: '#3', Visiblename: 'Security' },
        NETWORKSERVER: { pathKey: '#3', Visiblename: 'Network Server' },
    },
    itemLevel3: {
        GROUP_MANAGEMENT: { pathKey: 'GroupManagement', Visiblename: 'Group Management', parent: 'STOREMANAGEMENT' },
        STORE_INFO: { pathKey: 'StoreInfo', Visiblename: 'Store Info', parent: 'STOREMANAGEMENT' },
        STORE_LIST: { pathKey: 'StoreList', Visiblename: 'Store List', parent: 'STOREMANAGEMENT' },
        WAREHOUSE_MANAGEMENT: { pathKey: 'WarehouseManagement', Visiblename: 'Warehouse Management', parent: 'STOREMANAGEMENT' },
        CASH_DRAWER: { pathKey: 'CashDrawer', Visiblename: 'Cash Drawer', parent: 'STOREMANAGEMENT' },
        DISCOUNT: { pathKey: 'Discount', Visiblename: 'Discount', parent: 'STOREMANAGEMENT' },
        EMPLOYEE_GROUP: { pathKey: 'EmployeeGroup', Visiblename: 'Employee Group', parent: 'EMPLOYEEMANAGEMENT' },
        EMPLOYEE_INFO: { pathKey: 'EmployeeInfo', Visiblename: 'Employee Info', parent: 'EMPLOYEEMANAGEMENT' },
        EMPLOYEE_LIST: { pathKey: 'EmployeeList', Visiblename: 'Employee List', parent: 'EMPLOYEEMANAGEMENT' },
        MENU_SETUP: { pathKey: 'MenuSetup', Visiblename: 'Menu Setup', parent: 'MENUMANAGEMENT' },
        ITEM_RECEIPT_MANAGEMENT: { pathKey: 'ItemReceiptManagement', Visiblename: 'Item Receipt Management', parent: 'MENUMANAGEMENT' },
        ITEM_RECEIPT_MANAGER: { pathKey: 'ItemReceiptManager', Visiblename: 'Item Receipt Manager', parent: 'MENUMANAGEMENT' },
        TOPPING_SETTINGS: { pathKey: 'ToppingSettings', Visiblename: 'Topping Settings', parent: 'MENUMANAGEMENT' },
        SUB_MENU: { pathKey: 'SubMenu', Visiblename: 'Sub Menu', parent: 'MENUMANAGEMENT' },
        MENU_SEARCH: { pathKey: 'MenuSearch', Visiblename: 'Menu Search', parent: 'MENUMANAGEMENT' },
        INVENTORY_ITEM_SEARCH: { pathKey: 'InventoryItemSearch', Visiblename: 'Inventory Item Search', parent: 'MENUMANAGEMENT' },
        MENU_BOARD_MANAGEMENT: { pathKey: 'MenuBoardManagement', Visiblename: 'Menu-Board Management', parent: 'MENUMANAGEMENT' },
        POS_MENU_BOARD: { pathKey: 'POSMenuBoard', Visiblename: 'POS Menu-Board', parent: 'MENUMANAGEMENT' },
        CATEGORY_MANAGER: { pathKey: 'CategoryManager', Visiblename: 'Category Manager', parent: 'MENUMANAGEMENT' },
        RECIPE_BUILDER: { pathKey: 'RecipeBuilder', Visiblename: 'Recipe Builder', parent: 'MENUMANAGEMENT' },
        RECIPE_SEARCH: { pathKey: 'RecipeSearch', Visiblename: 'Recipe Search', parent: 'MENUMANAGEMENT' },
        KITCHEN_MEMO: { pathKey: 'KitchenMemo', Visiblename: 'Kitchen Memo', parent: 'MENUMANAGEMENT' },
        ITEM_MANAGEMENT_BY_STRORE: { pathKey: 'ItemManagementByStrore', Visiblename: 'Item Management By Strore', parent: 'MENUMANAGEMENT' },
        CHANGE_OF_MULTILINGUAL_NAME: { pathKey: 'ChangeOfMultilingualName', Visiblename: 'Change of multilingual name', parent: 'MENUMANAGEMENT' },
        ITEM_LINKED_CODE_MANAGEMENT: { pathKey: 'ItemLinkedCodeManagement', Visiblename: 'Item linked code management', parent: 'MENUMANAGEMENT' },
        MAIN_MENU_SETTING: { pathKey: 'MainMenuSetting', Visiblename: 'Main Menu Setting', parent: 'POSSCREENLAYOUT' },
        TABLE_LOCATION_MANAGER: { pathKey: 'TableLocationManager', Visiblename: 'Table Location Manager', parent: 'POSSCREENLAYOUT' },
        TABLE_DESIGN_SETTING: { pathKey: 'TableDesignSetting', Visiblename: 'Table Design Setting', parent: 'POSSCREENLAYOUT' },
        MENU_SETUP2: { pathKey: 'MenuSetup', Visiblename: 'MenuSetup', parent: 'POSSCREENLAYOUT' },
        POS_FAVORITE_FUNCTION_BUTTON: { pathKey: 'POSFavoriteFunctionButton', Visiblename: 'POS Favorite Function Button', parent: 'POSSCREENLAYOUT' },
        PAYMENT_BUTTON_SETTING: { pathKey: 'PaymentButtonSetting', Visiblename: 'Payment Button Setting', parent: 'POSSCREENLAYOUT' },
        KIOSK_IMAGE_SETTINGS: { pathKey: 'KioskImageSettings', Visiblename: 'Kiosk Image Settings', parent: 'POSSCREENLAYOUT' },
        UP_ORDER_IMAGE_SETTINGS: { pathKey: 'UPOrderImageSettings', Visiblename: 'UP Order Image Settings', parent: 'POSSCREENLAYOUT' },
        KIOSK_FUNCTION_SETTING: { pathKey: 'KioskFunctionSetting', Visiblename: 'Kiosk function setting', parent: 'POSSCREENLAYOUT' },
        POS_USER_DEFINITION_LANGUAGE: { pathKey: 'POSUserDefinitionLanguage', Visiblename: 'POS User Definition Language', parent: 'POSSCREENLAYOUT' },
        DAILY_SALES_REPORT: { pathKey: 'DailySalesReport', Visiblename: 'Daily Sales Report', parent: 'SALEREPORTS' },
        DAILY_SALES_SUMMARY: { pathKey: 'DailySalesSummary', Visiblename: 'Daily Sales Summary', parent: 'SALEREPORTS' },
        SALES_SUMMARY: { pathKey: 'SalesSummary', Visiblename: 'Sales Summary', parent: 'SALEREPORTS' },
        DETAILED_SALES_LIST: { pathKey: 'DetailedSalesList', Visiblename: 'Detailed Sales List', parent: 'SALEREPORTS' },
        SALES_BY_RECEIPT: { pathKey: 'SalesByReceipt', Visiblename: 'Sales By Receipt', parent: 'SALEREPORTS' },
        SALES_BY_RECEIPT_DETAIL: { pathKey: 'SalesByReceiptDetail', Visiblename: 'Sales By Receipt Detail', parent: 'SALEREPORTS' },
        CASH_RECEIPT_APPROVAL_CANCELATION_REPORT: { pathKey: 'CashReceiptApprovalCancelationReport', Visiblename: 'CashReceipt Approval/Cancelation Report', parent: 'SALEREPORTS' },
        CREDIT_CARD_APPROVAL_CANCELATION_REPORT: { pathKey: 'CreditCardApprovalCancelationReport', Visiblename: 'CreditCard Approval/Cancelation Report', parent: 'SALEREPORTS' },
        SALES_REPORT_BY_CARD_TYPE_DETAIL: { pathKey: 'SalesReportByCardTypeDetail', Visiblename: 'Sales Report by Card Type Detail', parent: 'SALEREPORTS' },
        SALES_RECORD_BY_EMPLOYEE: { pathKey: 'SalesRecordByEmployee', Visiblename: 'Sales Record by Employee', parent: 'SALEREPORTS' },
        SALES_RECORD_BY_EMPLOYEE_DATE: { pathKey: 'SalesRecordByEmployeeDate', Visiblename: 'Sales Record by Employee Date', parent: 'SALEREPORTS' },
        EMPLOYEE_COMMISSION: { pathKey: 'EmployeeCommission', Visiblename: 'Employee Commission', parent: 'SALEREPORTS' },
        TOTAL_SALES_REPORT: { pathKey: 'TotalSalesReport', Visiblename: 'Total Sales Report', parent: 'SALESANALYSIS' },
        SIMPLIFIED_SALES_TOTAL: { pathKey: 'SimplifiedSalesTotal', Visiblename: 'Simplified Sales Total', parent: 'SALESANALYSIS' },
        AGGREGATE_REVENUE_ITEMS_BY_CATEGORY: { pathKey: 'AggregateRevenueItemsByCategory', Visiblename: 'Aggregate revenue items by category', parent: 'SALESANALYSIS' },
        HOURLY_SALES: { pathKey: 'HourlySales', Visiblename: 'Hourly Sales', parent: 'SALESANALYSIS' },
        TIME_OF_DAY_SALES_REPORT: { pathKey: 'TimeOfDaySalesReport', Visiblename: 'Time of Day Sales Report', parent: 'SALESANALYSIS' },
        SALES_REPORT_BY_PAYMENT_TYPE: { pathKey: 'SalesReportByPaymentType', Visiblename: 'Sales Report by Payment Type', parent: 'SALESANALYSIS' },
        SALES_REPORT_BY_CARD_TYPE: { pathKey: 'SalesReportByCardType', Visiblename: 'Sales Report by Card Type', parent: 'SALESANALYSIS' },
        SALES_RANKING: { pathKey: 'SalesRanking', Visiblename: 'Sales Ranking', parent: 'SALESANALYSIS' },
        SALES_ANALYSIS_REPORT_ITEM: { pathKey: 'SalesAnalysisReportItem', Visiblename: 'Sales Analysis Report(Item)', parent: 'SALESANALYSIS' },
        EMPLOYEE_SALES_ANALYSIS: { pathKey: 'EmployeeSalesAnalysis', Visiblename: 'Employee Sales Analysis', parent: 'SALESANALYSIS' },
        ORDER_CANCELATION_REPORT: { pathKey: 'OrderCancelationReport', Visiblename: 'Order Cancelation Report', parent: 'VOIDRETURN' },
        VOID_SUMMARY: { pathKey: 'VoidSummary', Visiblename: 'Void Summary', parent: 'VOIDRETURN' },
        VOID_DETAIL: { pathKey: 'VoidDetail', Visiblename: 'Void Detail', parent: 'VOIDRETURN' },
        SALES_DISCOUNT_REPORT: { pathKey: 'SalesDiscountReport', Visiblename: 'Sales Discount Report', parent: 'DISCOUNTSTATUS' },
        SALES_DISCOUNT_SUMMARY: { pathKey: 'SalesDiscountSummary', Visiblename: 'Sales Discount Summary', parent: 'DISCOUNTSTATUS' },
        NO_TAX_SALE_REPORT: { pathKey: 'NoTaxSaleReport', Visiblename: 'No Tax Sale Report', parent: 'TAX' },
        TAX_DETAIL: { pathKey: 'TaxDetail', Visiblename: 'Tax Detail', parent: 'TAX' },
        TAX_SUMMARY: { pathKey: 'TaxSummary', Visiblename: 'Tax Summary', parent: 'TAX' },
        SALES_CASH_IN_OUT: { pathKey: 'SalesCashInOut', Visiblename: 'Sales Cash In Out', parent: 'EODREPORT' },
        CASH_IN_OUT: { pathKey: 'CashInOut', Visiblename: 'Cash In/Out', parent: 'EODREPORT' },
        INVENTORY_LOOK_UP: { pathKey: 'InventoryLookUp', Visiblename: 'Inventory Look Up', parent: 'INVENTORY' },
        INVENTORY_ADJUSTMENTS: { pathKey: 'InventoryAdjustments', Visiblename: 'Inventory Adjustments', parent: 'INVENTORY' },
        INVENTORY_TRANSFER: { pathKey: 'InventoryTransfer', Visiblename: 'Inventory Transfer', parent: 'INVENTORY' },
        IV_MANAGEMENT_TABLE: { pathKey: 'IVManagementTable', Visiblename: 'IV Management Table', parent: 'INVENTORY' },
        CUSTOMER_PURCHASE: { pathKey: 'CustomerPurchase', Visiblename: 'Customer Purchase', parent: 'ACCOUNTING' },
        CUSTOMER_SALE_B: { pathKey: 'CustomerSaleB', Visiblename: 'Customer Sale β', parent: 'ACCOUNTING' },
        SUPPLIER_LEDGER: { pathKey: 'SupplierLedger', Visiblename: 'Supplier Ledger', parent: 'ACCOUNTING' },
        CUSTOMER_LEDGER: { pathKey: 'CustomerLedger', Visiblename: 'Customer Ledger', parent: 'ACCOUNTING' },
        PAYABLE_REPORT: { pathKey: 'PayableReport', Visiblename: 'Payable Report', parent: 'ACCOUNTING' },
        RECEIVABLE_REPORT: { pathKey: 'ReceivableReport', Visiblename: 'Receivable Report', parent: 'ACCOUNTING' },
        SUPPLIER_SETTING: { pathKey: 'SupplierSetting', Visiblename: 'Supplier Setting', parent: 'SUPPLIER' },
        AMOUNT: { pathKey: 'Amount', Visiblename: 'Amount', parent: 'SUPPLIER' },
        STORE_OPERATIONS: { pathKey: 'StoreOperations', Visiblename: 'Store Operations', parent: 'STORE' },
        STORE_DETAIL_SETTING: { pathKey: 'StoreDetailSetting', Visiblename: 'Store Detail Setting', parent: 'STORE' },
        CASH_DRAWER2: { pathKey: 'CashDrawer', Visiblename: 'Cash Drawer', parent: 'STORE' },
        TAX: { pathKey: 'Tax', Visiblename: 'Tax', parent: 'STORE' },
        OPERATIONS_MANAGEMENT: { pathKey: 'OperationsManagement', Visiblename: 'Operations Management', parent: 'STORE' },
        ORDER_POS_CANCEL_FUNCTION_OPTION: { pathKey: 'OrderPOSCancelFunctionOption', Visiblename: 'Order POS Cancel Function Option', parent: 'STORE' },
        PRINTER_LANGUAGE_SETTING: { pathKey: 'PrinterLanguageSetting', Visiblename: 'Printer Language Setting', parent: 'STORE' },
        AUTO_CLOSE_POPUP_OPTION: { pathKey: 'AutoClosePopupOption', Visiblename: 'Auto Close Popup Option', parent: 'STORE' },
        POS_INFORMATION: { pathKey: 'POSInformation', Visiblename: 'POS Information', parent: 'POS' },
        PRINTER_SETTING: { pathKey: 'PrinterSetting', Visiblename: 'Printer Setting', parent: 'POS' },
        LABEL_PRINT_SETTING: { pathKey: 'LabelPrintSetting', Visiblename: 'Label Print Setting', parent: 'POS' },
        GUEST_PAGER: { pathKey: 'GuestPager', Visiblename: 'Guest Pager', parent: 'POS' },
        POS_DISPLAY_SETTING: { pathKey: 'PosDisplaySetting', Visiblename: 'Pos Display Setting', parent: 'POS' },
        CID_DEVICE: { pathKey: 'CIDDevice', Visiblename: 'CID Device', parent: 'POS' },
        PRINT_OPTION_BY_POS: { pathKey: 'PrintOptionByPos', Visiblename: 'Print Option By Pos', parent: 'POS' },
        WINDOWS_KIOSK_OPTIONS: { pathKey: 'WindowsKioskOptions', Visiblename: 'Windows Kiosk Options', parent: 'POS' },
        MSR_SETTING: { pathKey: 'MSRSetting', Visiblename: 'MSR Setting', parent: 'POS' },
        MSR_PORT_SETTING: { pathKey: 'MSRPortSetting', Visiblename: 'MSR Port Setting', parent: 'POS' },
        ECR_SETTING: { pathKey: 'ECRSetting', Visiblename: 'ECR Setting', parent: 'POS' },
        STOREINFO_TAX_RECEIPT: { pathKey: 'StoreInfoTaxReceipt', Visiblename: 'StoreInfo(TAX Receipt)', parent: 'OPTIONSETTING' },
        SETTING_QR_CODE: { pathKey: 'SettingQRCode', Visiblename: 'Setting QR code', parent: 'OPTIONSETTING' },
        SHOW_ADDITIONAL_DATA_IN_EOD_PRINTOUT: { pathKey: 'ShowAdditionalDataInEODPrintout', Visiblename: 'Show additional data in EOD printout', parent: 'OPTIONSETTING' },
        ONE_TOUCH_OPTION: { pathKey: 'OneTouchOption', Visiblename: 'One Touch Option', parent: 'OPTIONSETTING' },
        BARCODE_UNREGISTERED_ITEM_OPTION: { pathKey: 'BarcodeUnregisteredItemOption', Visiblename: 'Barcode Unregisterd Item Option', parent: 'OPTIONSETTING' },
        CALLER_IDENTIFICATION_RECEIVE_ACTION: { pathKey: 'CallerIdentificationReceiveAction', Visiblename: 'Caller identification Receive Action', parent: 'OPTIONSETTING' },
        CASH_DRAWER_OPEN_OPTION: { pathKey: 'CashDrawerOpenOption', Visiblename: 'Cash drawer open option', parent: 'OPTIONSETTING' },
        CLEAR_TABLE_SETTING: { pathKey: 'ClearTableSetting', Visiblename: 'Clear Table Setting', parent: 'OPTIONSETTING' },
        ENTER_NUMBER_OF_CUSTOMER_SETTING: { pathKey: 'EnterNumberOfCustomerSetting', Visiblename: 'Enter number of customer Setting', parent: 'OPTIONSETTING' },
        SELECT_EMPLOYEE_SETTING: { pathKey: 'SelectEmployeeSetting', Visiblename: 'Select Employee Setting', parent: 'OPTIONSETTING' },
        DISCOUNT_ORDER_OPTION: { pathKey: 'DiscountOrderOption', Visiblename: 'Discount Order Option', parent: 'OPTIONSETTING' },
        SHOW_ITEM_BARCODE_OPTION: { pathKey: 'ShowItemBarcodeOption', Visiblename: 'Show item barcode option', parent: 'OPTIONSETTING' },
        REBATE_ISSUE: { pathKey: 'RebateIssue', Visiblename: 'Rebate Issue', parent: 'OPTIONSETTING' },
        WEIGHT_BARCODE_OPTION: { pathKey: 'WeightBarcodeOption', Visiblename: 'Weight Barcode Option', parent: 'OPTIONSETTING' },
        TENDER_METHOD_WHEN_MAKING_REFUND_RECEIPT: { pathKey: 'TenderMethodWhenMakingRefundReceipt', Visiblename: 'Tender method when making refund receipt', parent: 'OPTIONSETTING' },
        CASH_DRAWER_OPEN_TIMING: { pathKey: 'CashDrawerOpenTiming', Visiblename: 'Cash drawer open timing', parent: 'OPTIONSETTING' },
        PREPAYMENT_FUNCTION_BUTTON_SETTING: { pathKey: 'PrepaymentFunctionButtonSetting', Visiblename: 'Prepayment function button Setting', parent: 'OPTIONSETTING' },
        PREPAID_ORDER_RETENTION_OPTIONS: { pathKey: 'PrepaidOrderRetentionOptions', Visiblename: 'Prepaid order Retention options', parent: 'OPTIONSETTING' },
        DELIVERY_SETTINGS: { pathKey: 'DeliverySettings', Visiblename: 'Delivery Settings', parent: 'OPTIONSETTING' },
        DELIVERY_ORDER: { pathKey: 'DeliveryOrder', Visiblename: 'Delivery order', parent: 'OPTIONSETTING' },
        CHANGE_WEIGHT_CONTROL: { pathKey: 'ChangeWeightControl', Visiblename: 'Change weight control', parent: 'OPTIONSETTING' },
        DISCOUNT_OPTION: { pathKey: 'DiscountOption', Visiblename: 'Discount Option', parent: 'OPTIONSETTING' },
        PAYMENT_OPTIONS_IMMEDIATELY: { pathKey: 'PaymentOptionsImmediately', Visiblename: 'Payment options immediately', parent: 'OPTIONSETTING' },
        NOTICE_POPUP_OPTION: { pathKey: 'NoticePopupOption', Visiblename: 'Notice popup option', parent: 'OPTIONSETTING' },
        SET_ALL_CANCELLATION_TYPE: { pathKey: 'SetAllCancellationType', Visiblename: 'Set all cancellation type', parent: 'OPTIONSETTING' },
        CURRENCY_CHANGE_OPTION: { pathKey: 'CurrencyChangeOption', Visiblename: 'Currency Change Option', parent: 'OPTIONSETTING' },
        ENABLE_KEEP_UNIT_CHANGE: { pathKey: 'EnableKeepUnitChange', Visiblename: 'Enable Keep Unit Change', parent: 'OPTIONSETTING' },
        RECEIPT: { pathKey: 'Receipt', Visiblename: 'Receipt', parent: 'PRINTOPTIONS' },
        CUSTOMER_ORDER_PRINT: { pathKey: 'CustomerOrderPrint', Visiblename: 'Customer Order Print', parent: 'PRINTOPTIONS' },
        KITCHEN_ORDER_PRINT: { pathKey: 'KitchenOrderPrint', Visiblename: 'Kitchen Order Print', parent: 'PRINTOPTIONS' },
        WAITING_LIST_TAG: { pathKey: 'WaitingListTag', Visiblename: 'Waiting List Tag', parent: 'PRINTOPTIONS' },
        USE_SECURITY_FUNCTION_BY_TASKS: { pathKey: 'UseSecurityFunctionByTasks', Visiblename: 'Use Security Function by Tasks', parent: 'SECURITY' },
        SECURITY_GROUP: { pathKey: 'SecurityGroup', Visiblename: 'Security Group', parent: 'SECURITY' },
        EMAIL_SERVER: { pathKey: 'EmailServer', Visiblename: 'Email Server', parent: 'NETWORKSERVER' },
        ANNOUNCEMENT: { pathKey: 'Announcement', Visiblename: 'Announcement' },
        PAYROLL: { pathKey: 'Payroll', Visiblename: 'Pay roll' },
        TIME_CARD: { pathKey: 'Time Card', Visiblename: 'Time Card' },
        LIST_OF_INFORMATION_BY_FORCE: { pathKey: 'List of information by force', Visiblename: 'List of information by force' },
        CUSTOMER_GROUP: { pathKey: 'CustomerGroup', Visiblename: 'Customer Group' },
        CUSTOMER_MANAGEMENT: { pathKey: 'CustomerManagement', Visiblename: 'Customer Management' },
        MEMBERSHIP_LIST: { pathKey: 'MembershipList', Visiblename: 'Membership List' },
        CUSTOMER_SALES_TOTAL: { pathKey: 'CustomerSalesTotal', Visiblename: 'Customer Sales Total' },
        CUSTOMER_DETAILED_SALES_REPORT: { pathKey: 'CustomerDetailedSalesReport', Visiblename: 'Customer Detailed Sales Report' },
        POINT_REPORT: { pathKey: 'PointReport', Visiblename: 'Point Report' },
        MONTHLY_COMPARISON: { pathKey: 'MonthlyComparison', Visiblename: 'Monthly Comparison' },
        YEARLY_COMPARISON: { pathKey: 'YearlyComparison', Visiblename: 'Yearly Comparison' },
        TOTAL_CATEGORY_SALES_BY_STORE: { pathKey: 'TotalCategorySalesByStore', Visiblename: 'Total Category Sales By Store' },
        TOTAL_ITEM_SALES_BY_STORE: { pathKey: 'TotalItemSalesByStore', Visiblename: 'Total Item Sales By Store' },
        TOTAL_STORE_SALES_BY_CATEGORY: { pathKey: 'TotalStoreSalesByCategory', Visiblename: 'Total Store Sales By Category' },
        TOTAL_SALES_SUMMARY_BY_ITEM: { pathKey: 'TotalSalesSummaryByItem', Visiblename: 'Total Sales Summary (By Item)' },
        TOTAL_STORE_SALES_BY_ITEM: { pathKey: 'TotalStoreSalesByItem', Visiblename: 'Total Store Sales By Item' },
        TOTAL_SALES_WEEK_BY_ITEM: { pathKey: 'TotalSalesWeekByItem', Visiblename: 'Total Sales Week By Item' },
        DAILY_SALES_BY_ITEM: { pathKey: 'DailySalesByItem', Visiblename: 'Daily Sales By Item' },
        TOTAL_SALES_HOUR_BY_ITEM: { pathKey: 'TotalSalesHourByItem', Visiblename: 'Total Sales Hour By Item' },
        TOTAL_SALES_ITEM_BY_WEEK: { pathKey: 'TotalSalesItemByWeek', Visiblename: 'Total Sales Item By Week' },
        TOTAL_SALES_ITEM_BY_HOUR: { pathKey: 'TotalSalesItemByHour', Visiblename: 'Total Sales Item By Hour' },
        TOTAL_STORE_SALES_BY_SUPPLIER: { pathKey: 'TotalStoreSalesBySupplier', Visiblename: 'Total Store Sales By Supplier' },
        SALES_AMOUNT_BY_STORE: { pathKey: 'SalesAmountByStore', Visiblename: 'Sales amount by Store' },
        MONTHLY_SALES_AMOUNT_BY_STORE: { pathKey: 'MonthlySalesAmountByStore', Visiblename: 'Monthly Sales amount by Store' },
        STORE_MONTHLY_SALES_AMOUNT: { pathKey: 'StoreMonthlySalesAmount', Visiblename: 'Store Monthly Sales amount' },
        BIZ_SMS_SETTING: { pathKey: 'BizSmsSetting', Visiblename: 'BIZ SMS Setting' },
        USER_GUIDE: { pathKey: 'UserGuide', Visiblename: 'User Guide' },
        WEB_LOGIN: { pathKey: 'WebLogin', Visiblename: 'Web Login' },
        USE_SECURITY_FUNCTION_BY_TASKS2: { pathKey: 'UseSecurityFunctionByTasks2', Visiblename: 'Use Security Function by Tasks' },
        EMPLOYEE_SECURITY: { pathKey: 'EmployeeSecurity', Visiblename: 'Employee Security' },
        SECURITY_LEVEL: { pathKey: 'SecurityLevel', Visiblename: 'Security Level' },
    },
};

export default nameMap;
