import classNames from 'classnames/bind';

import InnerLayout from '~/components/InnerLayout';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind();

function OperationReports() {
    const menuStructure = config.menuStructure.OPERATIONREPORTS;

    return <InnerLayout menuStructure={menuStructure} title={'Operation Reports'} />;
}

export default OperationReports;
