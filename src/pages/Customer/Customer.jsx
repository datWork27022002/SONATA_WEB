import classNames from 'classnames/bind';

import InnerLayout from '~/components/InnerLayout';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

function Customer() {
    const menuStructure = config.menuStructure.CUSTOMER;

    return <InnerLayout menuStructure={menuStructure} title={'Customer'} />;
}

export default Customer;
