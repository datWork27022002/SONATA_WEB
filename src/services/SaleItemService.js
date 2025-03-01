import api from '~/config/api';
import { get } from '~/utils/httpRequest';

export const getListSaleItemService = async (params, userInfo) => {
    const res = await get(`${api.saleItem.GET_LIST_SALE_ITEM}`, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
            StoreCode: userInfo?.store_code,
        },
        params: params,
    });
    return res;
};

export const getSummaryByProductService = async (params, userInfo) => {
    const res = await get(`${api.saleItem.GET_SUMMARY_BY_PRODUCT}`, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
            StoreCode: userInfo?.store_code,
        },
        params: params,
    });
    return res;
};
