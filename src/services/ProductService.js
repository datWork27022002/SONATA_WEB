import api from '~/config/api';
import { get, put, post, deleteHttp } from '~/utils/httpRequest';

export const getListProductService = async (params, userInfo) => {
    const res = await get(`${api.product.GET_LIST_PRODUCT}`, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
        },
        params: params,
    });
    return res;
};

export const addProductService = async (bodyRequest, userInfo) => {
    const res = await post(`${api.product.ADD_PRODUCT}`, bodyRequest, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
            StoreCode: userInfo?.store_code,
        },
    });
    return res;
};

export const editProductService = async (bodyRequest, userInfo) => {
    const res = await put(`${api.product.EDIT_PRODUCT}`, bodyRequest, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
        },
    });
    return res;
};

export const deleteProductService = async (params, userInfo) => {
    const res = await deleteHttp(`${api.product.DELETE_PRODUCT}`, {
        headers: {
            Authorization: `Bearer ${userInfo.token}`,
            Database: userInfo?.database_main_name,
        },
        params: params,
    });
    return res;
};
