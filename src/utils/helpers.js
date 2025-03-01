import { utils as XLSXUtils, writeFile } from 'xlsx';

export const formatNumberWithDots = (num) => {
    if (num === '' || num === null || num === undefined) {
        return '';
    } else {
        const numStr = typeof num === 'number' ? num.toString() : num;

        // Bước 1: Bỏ hết ký tự không phải là chữ
        const cleanedString = numStr.replace(/[^0-9]/g, '');

        // Bước 2: Định dạng chuỗi với dấu phẩy
        const formattedString = cleanedString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        return formattedString;
    }
};

export const formatDecimal = (num) => {
    if (num === '' || num === null || num === undefined) {
        return '';
    } else {
        const numStr = typeof num === 'number' ? num.toString().replace('.', ',') : num;

        // Xóa tất cả ký tự không phải số, dấu phẩy
        const value = numStr.replace(/[^0-9,]/g, '');

        // Nếu có nhiều hơn một dấu phẩy, chỉ giữ lại dấu phẩy đầu tiên
        const parts = value.split(',');

        const integerPart = parts[0];
        let decimalPart = '';
        if (parts.length >= 2) {
            decimalPart = ',' + parts.slice(1).join('');
        }

        // Định dạng phần nguyên
        const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        // Kết hợp lại
        return formattedIntegerPart + decimalPart;
    }
};

export const convertToNumbers = (num) => {
    if (num === '' || num === null || num === undefined) {
        return '0';
    } else {
        const numStr = typeof num === 'number' ? num.toString() : num;

        // Xóa tất cả ký tự không phải số, dấu phẩy
        const value = numStr.replace(/[^0-9]/g, '');

        return value;
    }
};

export const convertToDecimal = (input) => {
    if (input === '' || input === null || input === undefined) {
        return null;
    }
    // Thay thế dấu chấm bằng dấu phẩy
    let value = input.replace(/\./g, '').replace(/,/g, '.');

    // Chuyển đổi chuỗi thành số
    const number = parseFloat(value);
    return isNaN(number) ? null : number;
};

export const exportToExcel = (exportData, columns, fileName) => {
    const ws = XLSXUtils.json_to_sheet(exportData);
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, fileName);
    const removedColumn = ['작업', 'Operation', 'Thao tác'];
    const headers = columns.map((value) => value?.title).filter((value) => !removedColumn.includes(value));
    XLSXUtils.sheet_add_aoa(ws, [headers], { origin: 'A1' });
    writeFile(wb, `${fileName}.xlsx`);
};
