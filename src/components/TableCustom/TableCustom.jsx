import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import DataTable from 'react-data-table-component';

import styles from './TableCustom.module.scss';

const cx = classNames.bind(styles);

const TableCustom = ({
    data,
    columns,
    selectedRow,
    setSelectedRow = () => {},
    showHideList,
    selectableRows,
    className,
}) => {
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
                //border: '1px solid #fff',
            },
        },
        rows: {
            style: {
                minHeight: '30px',
                borderBottom: '.5px solid #ddd',
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
                //borderLeft: '.5px solid #ddd',
                //borderRight: '.5px solid #ddd',
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
            {data.length !== 0 ? (
                <DataTable
                    columns={columns}
                    data={data}
                    onRowClicked={handleRowClicked}
                    customStyles={customStyles}
                    conditionalRowStyles={conditionalRowStyles}
                    className={cx('overflow-hidden rounded border-[1px] border-solid border-[#ddd] bg-white', {
                        [className]: className,
                    })}
                    fixedHeader
                    selectableRows={selectableRows}
                />
            ) : (
                <div
                    className={cx(
                        'flex min-h-[30px] w-full justify-start overflow-auto',
                        'border border-solid border-[#ddd]',
                        {
                            [className]: className,
                        },
                    )}
                >
                    {columns.map((value, index) => (
                        <div
                            key={index}
                            style={{ width: value.width }}
                            className={cx(
                                'h-10 flex-shrink-0 bg-[#6b6b6b] p-[8px] text-[13px] text-text-color-secondnary',
                                'flex items-center justify-center',
                                'border border-solid border-[#fff]',
                                !value.width && 'flex-1',
                            )}
                        >
                            <div className={cx('overflow-hidden text-ellipsis text-nowrap')}>{value.name}</div>
                        </div>
                    ))}
                </div>
            )}

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
    selectedRow: PropTypes.number,
    setSelectedRow: PropTypes.func,
    selectableRows: PropTypes.bool,
    showHideList: PropTypes.bool,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default TableCustom;
