import i18next from '~/utils/i18n';

export const listStoreType = () => [
    { code: '', name: i18next.t('Store.All') },
    { code: '직영점', name: i18next.t('Store.Direct') },
    { code: '검색', name: i18next.t('Store.Franchise') },
];

export const listProductType = () => [
    { code: '일반상품', name: i18next.t('OptionInput.general_products') },
    { code: '묶음상품', name: i18next.t('OptionInput.bundled_products') },
    { code: '중량상품', name: i18next.t('OptionInput.heavy_products') },
    { code: '식자재', name: i18next.t('OptionInput.food_ingredients') },
    { code: '주방조리', name: i18next.t('OptionInput.kitchen_cooking') },
    { code: '공병박스', name: i18next.t('OptionInput.empty_boxes') },
];

export const listTransactionType = () => [
    { code: '정상거래', name: i18next.t('OptionInput.normal_transaction') },
    { code: '발주정지', name: i18next.t('OptionInput.order_suspension') },
    { code: '판매금지', name: i18next.t('OptionInput.sales_prohibited') },
];

export const listOderingUnit = () => [
    { code: 'EA', name: i18next.t('EA') },
    { code: 'IN', name: i18next.t('IN') },
    { code: 'OUT', name: i18next.t('OUT') },
    { code: 'CARTON', name: i18next.t('CARTON') },
];
