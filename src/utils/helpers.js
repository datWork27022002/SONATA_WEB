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

export const exportToExcel = (exportData, columns, fileName) => {
    const ws = XLSXUtils.json_to_sheet(exportData);
    const wb = XLSXUtils.book_new();
    XLSXUtils.book_append_sheet(wb, ws, fileName);
    const removedColumn = ['작업', 'Operation', 'Thao tác'];
    const headers = columns.map((value) => value?.title).filter((value) => !removedColumn.includes(value));
    XLSXUtils.sheet_add_aoa(ws, [headers], { origin: 'A1' });
    writeFile(wb, `${fileName}.xlsx`);
};
