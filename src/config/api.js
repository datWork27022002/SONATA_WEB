const api = {
    auth: { LOG_IN: '/Auth/login' },
    saleBill: { GET_REVENUE_BY_CYCLE: '/SaleBill/getRevenueByCycle', GET_LIST_SALE_BILL: '/SaleBill' },
    saleItem: { GET_SUMMARY_BY_PRODUCT: '/SaleItem/SummaryByProduct', GET_LIST_SALE_ITEM: '/SaleItem/All' },
    store: {
        GET_LIST_STORE: '/Store',
        ADD_STORE: '/Store',
        EDIT_STORE: '/Store',
        DELETE_STORE: '/Store',
        GET_NEW_STORE_CODE: '/Store/newStoreCode',
    },
    product: {
        GET_LIST_PRODUCT: '/Product',
        ADD_PRODUCT: '/Product',
        EDIT_PRODUCT: '/Product',
        DELETE_PRODUCT: '/Product',
    },
    product0: {
        GET_LIST_PRODUCT0: '/ProductLevel0',
        UPDATE_PRODUCT0: '/ProductLevel0',
        ADD_PRODUCT0: '/ProductLevel0',
        DELETE_PRODUCT0: '/ProductLevel0',
    },
    product1: {
        GET_LIST_PRODUCT0: '/ProductLevel1',
        UPDATE_PRODUCT0: '/ProductLevel1',
        ADD_PRODUCT0: '/ProductLevel1',
        DELETE_PRODUCT0: '/ProductLevel1',
    },
    product2: {
        GET_LIST_PRODUCT0: '/ProductLevel2',
        UPDATE_PRODUCT0: '/ProductLevel2',
        ADD_PRODUCT0: '/ProductLevel2',
        DELETE_PRODUCT0: '/ProductLevel2',
    },
    product3: {
        GET_LIST_PRODUCT0: '/ProductLevel3',
        UPDATE_PRODUCT0: '/ProductLevel3',
        ADD_PRODUCT0: '/ProductLevel3',
        DELETE_PRODUCT0: '/ProductLevel3',
    },
    tax: {
        GET_LIST_TAX: '/Tax',
    },
};

export default api;
