import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';

const useCallApiPrivate = () => {
    const [cookies] = useCookies(['userInfo']);
    const { selectedStore } = useSelector((state) => state.dataStore);

    const handleCallApiPrivate = async (callback, bodyRequest) => {
        const userInfo = cookies.userInfo;
        userInfo.store_code = selectedStore.storeCode;
        const res = await callback(bodyRequest, userInfo);
        return res;
    };
    return handleCallApiPrivate;
};

export default useCallApiPrivate;
