/**
 * Xác thực dữ liệu form bằng Yup và thiết lập lỗi nếu có
 * @param {object} schema - Yup schema dùng để xác thực dữ liệu
 * @param {object} formData - Dữ liệu của form cần xác thực
 * @param {function} setErrors - Hàm dùng để thiết lập lỗi trong form
 * @returns {Promise<void>} - Trả về một Promise, khi hoàn thành xác thực
 */

const validateData = async (schema, formData, setErrors) => {
    try {
        const validatedData = await schema.validate(formData, { abortEarly: false });
        setErrors({});
        return validatedData;
    } catch (validationErrors) {
        // Xử lý lỗi và hiển thị
        const formattedErrors = validationErrors.inner.reduce((acc, error) => {
            acc[error.path] = error.message;
            return acc;
        }, {});
        setErrors(formattedErrors);
        return false;
    }
};

export default validateData;
