import { getStores } from '~/services/searchServices';

export const handleLogicGetStores = async () => {
    const stores = await getStores();

    const storesConvertEnglish = stores.map((value) => ({ storeCode: value.점포코드, storeName: value.상호 }));
    storesConvertEnglish.sort((a, b) => {
        if (a.storeName < b.storeName) {
            return -1;
        }
        if (a.storeName > b.storeName) {
            return 1;
        }
        return 0;
    });

    return storesConvertEnglish;
};

//xóa bỏ toàn bộ dấu câu và chuyển thành chữ thường
export const removeDiacritics = (str) => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
};
