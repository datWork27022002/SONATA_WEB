import i18next from '~/utils/i18n';

export const listStoreType = () => [
    { code: '', name: i18next.t('Store.All') },
    { code: '직영점', name: i18next.t('Store.Direct') },
    { code: '검색', name: i18next.t('Store.Franchise') },
];
