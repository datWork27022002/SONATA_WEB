import api from '~/config/api';
import { get } from '~/utils/httpRequest';

export const getRevenueService = async (params, userInfo) => {
    const res = await get(`${api.saleBill.GET_REVENUE_BY_CYCLE}`, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
            StoreCode: userInfo?.store_code,
        },
        params: params,
    });
    return res;
};
