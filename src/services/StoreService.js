import api from '~/config/api';
import { get } from '~/utils/httpRequest';

export const getListStore = async (params, userInfo) => {
    const res = await get(`${api.store.GET_LIST_STORE}`, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
        },
        params: params,
    });
    return res;
};
