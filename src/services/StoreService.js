import api from '~/config/api';
import { get, put, post, deleteHttp } from '~/utils/httpRequest';

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

export const addStoreService = async (bodyRequest, userInfo) => {
    const res = await post(`${api.store.ADD_STORE}`, bodyRequest, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
        },
    });
    return res;
};

export const editStoreService = async (bodyRequest, userInfo) => {
    const res = await put(`${api.store.EDIT_STORE}`, bodyRequest, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
        },
    });
    return res;
};

export const deleteStore = async (params, userInfo) => {
    const res = await deleteHttp(`${api.store.DELETE_STORE}`, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
        },
        params: params,
    });
    return res;
};

export const getNewStoreCodeService = async (params, userInfo) => {
    const res = await get(`${api.store.GET_NEW_STORE_CODE}`, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
        },
        params: params,
    });
    return res;
};
