import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaStore, FaKey, FaUser, FaRightToBracket } from 'react-icons/fa6';

import Input from '~/components/Input';
import Loading from '~/components/Loading';
import config from '~/config';
import validateData from '~/utils/validateData';
import { handleLogin } from './LoginLogic';

const { language, routes, inputName, formValidate } = config;
const { STORE_ID, USER_ID, PASSWORD } = inputName.login.formLogin;

const schema = formValidate.login.loginSchema;

// eslint-disable-next-line no-unused-vars
const cx = classNames;

function Login() {
    const [formData, setFormData] = useState({ [STORE_ID]: '', [USER_ID]: '', [PASSWORD]: '' });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const { t, i18n } = useTranslation('translation', { keyPrefix: 'login' });
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookies] = useCookies(['token']);

    const handleChangeLauage = (e) => {
        i18n.changeLanguage(language[e.target.value]);
    };

    const handleChangeValue = (inputName, value) => {
        setFormData({
            ...formData,
            [inputName]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const isValidate = await validateData(schema, formData, setErrors);
        if (!isValidate) {
            setLoading(false);
            return;
        }

        const user = await handleLogin(formData);
        setLoading(false);
        if (!user) {
            return;
        }
        setCookies('token', JSON.stringify(user), { path: '/', expires: new Date(Date.now() + 24 * 60 * 60 * 1000) });
        toast.success('login success');
        navigate(routes.HOME);
    };

    return (
        <div className={cx('flex h-screen w-screen items-center justify-center bg-[#eff0f2]')}>
            <div
                className={cx(
                    'relative flex w-[800px] flex-wrap overflow-hidden rounded-lg bg-white',
                    'max-md:h-screen',
                )}
            >
                {/* img login */}
                <img src={require('~/assets/img/bgLogin.png')} alt="" className={cx('max-md:hidden')} />
                <img src={require('~/assets/img/logo.png')} alt="" className={cx('mt-12 md:hidden')} />
                {/* form login */}
                <div className={cx('min-w-[300px] flex-1')}>
                    {/* change language */}
                    <select
                        className={cx('absolute right-8 top-6 rounded-md bg-blue-100 p-2')}
                        name="language"
                        onChange={(e) => handleChangeLauage(e)}
                    >
                        {Object.keys(language).map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <form className={cx('flex flex-col items-center px-10 py-20')}>
                        <label className={cx('mb-10 text-3xl text-[#797979]')}>{t('login')}</label>
                        <Input
                            placeholder={t('StoreID')}
                            icon={FaStore}
                            borderBottom
                            className={cx('mb-3 w-[90%]')}
                            seletedValue={formData[STORE_ID]}
                            setSeletedValue={(value) => handleChangeValue(STORE_ID, value)}
                            errolMesseage={errors[STORE_ID]}
                        />
                        <Input
                            placeholder={t('UserID')}
                            icon={FaUser}
                            borderBottom
                            className={cx('mb-3 w-[90%]')}
                            seletedValue={formData[USER_ID]}
                            setSeletedValue={(value) => handleChangeValue(USER_ID, value)}
                            errolMesseage={errors[USER_ID]}
                        />
                        <Input
                            placeholder={t('Password')}
                            icon={FaKey}
                            borderBottom
                            className={cx('mb-3 w-[90%]')}
                            type="password"
                            seletedValue={formData[PASSWORD]}
                            setSeletedValue={(value) => handleChangeValue(PASSWORD, value)}
                            errolMesseage={errors[PASSWORD]}
                        />
                        <div className={cx('flex space-x-2 text-[13px]')}>
                            <input type="checkbox" name="saveInfo" value={true} />
                            <label htmlFor="saveInfo"> {t('SaveUserInfo')}</label>
                        </div>

                        <button
                            className={cx(
                                'mt-6 w-[90%] rounded-full bg-[#403e43] p-4 font-semibold text-white',
                                'flex items-center justify-center',
                            )}
                            onClick={handleSubmit}
                        >
                            <FaRightToBracket />
                            {t('login')}
                        </button>
                    </form>
                </div>
            </div>
            {loading && <Loading />}
        </div>
    );
}

export default Login;
