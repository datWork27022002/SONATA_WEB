import React, { createContext, useContext, useState, useEffect } from 'react';

import { getListTaxService } from '~/services/TaxService';
import useCallApiPrivate from '~/hooks/useCallApiPrivate';

const DataContext = createContext({
    listTax: '',
});

export const DataProvider = ({ children }) => {
    const [listTax, setListTax] = useState([]);

    const callApi = useCallApiPrivate();

    const handleGetListTax = async () => {
        const res = await callApi(getListTaxService, {});
        res && setListTax(res);
    };
    useEffect(() => {
        handleGetListTax();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <DataContext.Provider value={{ listTax }}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
    return useContext(DataContext);
};
