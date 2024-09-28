import * as yup from 'yup';
import inputName from './inputName';

const loginInputName = inputName.login.formLogin;

const formValidate = {
    login: {
        loginSchema: yup.object().shape({
            [loginInputName.STORE_ID]: yup.string().required('ID cửa hàng là bắt buộc'),
            [loginInputName.USER_ID]: yup.string().required('User ID là bắt buộc'),
            [loginInputName.PASSWORD]: yup.string().required('Password là bắt buộc'),
        }),
    },
};
export default formValidate;
