import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

import styles from './TableCustom.module.scss';

const cx = classNames.bind(styles);

const TableCustom = ({ data, columns, small = false, selectedRow, setSelectedRow, showHideList }) => {
    const customStyles = {
        headRow: {
            style: {
                minHeight: '30px',
            },
        },
        headCells: {
            style: {
                backgroundColor: '#6b6b6b',
                color: '#ffffff',
                fontSize: '13px',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #fff',
            },
        },
        rows: {
            style: {
                minHeight: '30px',
                '&:nth-child(even)': {
                    backgroundColor: '#f2f2f2',
                },
                '&:nth-child(odd)': {
                    backgroundColor: '#ffffff',
                },
            },
        },
        cells: {
            style: {
                borderLeft: '.5px solid #ddd',
                borderRight: '.5px solid #ddd',
                padding: '8px',
            },
        },
    };

    const conditionalRowStyles = [
        {
            when: (row) => row.id === selectedRow,
            style: {
                backgroundColor: 'var(--primary) !important',
                color: 'white',
            },
        },
    ];

    const handleRowClicked = (row) => {
        setSelectedRow(row.id);
    };

    return (
        <Fragment>
            <DataTable
                columns={columns}
                data={data}
                onRowClicked={handleRowClicked}
                customStyles={customStyles}
                conditionalRowStyles={conditionalRowStyles}
                className={cx('overflow-hidden rounded border-[1px] border-solid border-[#ddd]', small && 'h-[500px]')}
                fixedHeader
            />
            {showHideList && (
                <div className={cx('mt-2 flex justify-end')}>
                    <label className={cx('mr-1 text-[13px]')}>Show Hide List</label> <input type="checkbox" />
                </div>
            )}
        </Fragment>
    );
};

TableCustom.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
    small: PropTypes.bool,
    selectedRow: PropTypes.number,
    setSelectedRow: PropTypes.func,
    showHideList: PropTypes.bool,
};

export default TableCustom;
