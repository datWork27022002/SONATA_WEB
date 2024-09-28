import { getAccounts } from '~/services/searchServices';
import toast from 'react-hot-toast';

export const handleLogin = async (formData) => {
    const res = await getAccounts().catch((err) => console.log(err));
    const formatedRes = res.map((value) => ({
        storeID: value.점포코드,
        userID: value.사원코드,
        password: value.비밀번호,
    }));
    const { UserID, StoreID, Password } = formData;
    const user = formatedRes.filter(
        (value) => value.userID === UserID && value.password === Password && value.storeID === StoreID,
    );
    if (user.length > 0) {
        return user[0];
    }
    toast.error('Incorrect infor login');
    return false;
};
