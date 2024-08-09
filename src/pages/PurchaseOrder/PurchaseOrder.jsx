import classNames from 'classnames/bind';

import styles from './PurchaseOrder.module.scss';
import InnerLayout from '~/components/InnerLayout';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function PurchaseOrder() {
    const menuStructure = config.menuStructure.PURCHASEORDER;

    return <InnerLayout menuStructure={menuStructure} title={'Purchase Order'} />;
}

export default PurchaseOrder;
