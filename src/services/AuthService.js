import api from '~/config/api';
import { post } from '~/utils/httpRequest';

export const logInService = async (bodyRequest) => {
    const res = await post(`${api.auth.LOG_IN}`, bodyRequest);
    return res;
};
