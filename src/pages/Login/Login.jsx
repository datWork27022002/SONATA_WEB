import cx from 'classnames';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { FaKey, FaUser, FaRightToBracket } from 'react-icons/fa6';

import Input from '~/components/Input';
import Loading from '~/components/Loading';
import config from '~/config';
import { logInService } from '~/services/AuthService';
import { SignInSchema } from '~/config/schema';

const { language, routes } = config;

const cookiesTime = 30 * 24 * 60 * 60 * 1000;

function Login() {
    const [loading, setLoading] = useState(false);

    const methods = useForm({ resolver: zodResolver(SignInSchema) });

    const { t, i18n } = useTranslation('translation', { keyPrefix: 'login' });
    const navigate = useNavigate();

    const { handleSubmit } = methods;

    const [, setCookies] = useCookies(['token', 'DatabaseName', 'DatabaseCSTRName', 'userInfo']);

    const handleChangeLauage = (e) => {
        i18n.changeLanguage(language[e.target.value]);
    };

    const onSubmit = async (formData) => {
        setLoading(true);

        const bodyRequest = {
            username: formData.username,
            password: formData.password,
        };

        const user = await logInService(bodyRequest);
        console.log('user', user);
        if (!user) {
            toast.error('Incorrect infor login');
        }

        setLoading(false);
        if (!user) {
            return;
        }
        user.isCEO = false;
        setCookies('token', user.token, { path: '/', expires: new Date(Date.now() + cookiesTime) });
        setCookies('userInfo', JSON.stringify(user), { path: '/', expires: new Date(Date.now() + cookiesTime) });
        setCookies('DatabaseName', user.database_main_name, { path: '/', expires: new Date(Date.now() + cookiesTime) });
        setCookies('DatabaseCSTRName', user.database_cstr_name, {
            path: '/',
            expires: new Date(Date.now() + cookiesTime),
        });
        toast.success('login success');
        navigate(routes.HOME);
    };

    const onError = (errors) => {
        console.log('Có lỗi:', errors);
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
                    <FormProvider {...methods}>
                        <form
                            className={cx('flex flex-col items-center px-10 py-20')}
                            onSubmit={handleSubmit(onSubmit, onError)}
                        >
                            <label className={cx('mb-10 text-3xl text-[#797979]')}>{t('login')}</label>
                            {/* <Input
                            placeholder={t('StoreID')}
                            icon={FaStore}
                           
                            className={cx('mb-3 w-[90%]')}
                            seletedValue={formData[STORE_ID]}
                            setSeletedValue={(value) => handleChangeValue(STORE_ID, value)}
                            errolMesseage={errors[STORE_ID]}
                        /> */}
                            <Input
                                name={'username'}
                                placeholder={t('UserID')}
                                icon={FaUser}
                                className={cx('mb-3 w-[90%]')}
                            />
                            <Input
                                name={'password'}
                                placeholder={t('Password')}
                                icon={FaKey}
                                className={cx('mb-3 w-[90%]')}
                                type="password"
                            />
                            <div className={cx('flex space-x-2 text-[13px]')}>
                                <input type="checkbox" name="saveInfo" value={true} />
                                <label htmlFor="saveInfo"> {t('SaveUserInfo')}</label>
                            </div>

                            <button
                                className={cx(
                                    'mt-6 w-[90%] rounded-full bg-[#403e43] p-4 font-semibold text-white',
                                    'hover:opacity-80 active:opacity-70',
                                    'flex items-center justify-center',
                                )}
                                onClick={handleSubmit}
                            >
                                <FaRightToBracket />
                                {t('login')}
                            </button>
                        </form>
                    </FormProvider>
                </div>
            </div>
            {loading && <Loading />}
        </div>
    );
}

export default Login;
