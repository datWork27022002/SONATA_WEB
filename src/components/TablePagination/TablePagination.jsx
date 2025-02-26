import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TablePagination = ({ dataModel, handleChangeNavigation }) => {
    return (
        <div className={cx('mt-4')}>
            <Pagination
                total={dataModel.totalRecord}
                pageSize={dataModel.pageSize}
                current={dataModel.pageIndex}
                onChange={handleChangeNavigation}
                align="center"
                hideOnSinglePage
                showSizeChanger={false}
            />
        </div>
    );
};

TablePagination.propTypes = {
    dataModel: PropTypes.object,
    handleChangeNavigation: PropTypes.func,
};

export default TablePagination;
