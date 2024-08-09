import classNames from 'classnames/bind';

import styles from './SaleReports.module.scss';
import InnerLayout from '~/components/InnerLayout';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function SaleReports() {
    const menuStructure = config.menuStructure.SALEREPORTS;

    return <InnerLayout menuStructure={menuStructure} title={'Sale Reports'} />;
}

export default SaleReports;
