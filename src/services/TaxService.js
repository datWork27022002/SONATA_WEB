import api from '~/config/api';
import { get } from '~/utils/httpRequest';

export const getListTaxService = async (params, userInfo) => {
    const res = await get(`${api.tax.GET_LIST_TAX}`, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
        },
        params: params,
    });
    return res;
};
