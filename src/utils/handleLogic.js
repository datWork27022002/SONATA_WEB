//xóa bỏ toàn bộ dấu câu và chuyển thành chữ thường
export const removeDiacritics = (str) => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
};
