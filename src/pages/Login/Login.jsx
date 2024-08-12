import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { FaStore, FaKey, FaUser, FaRightToBracket } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import styles from './Login.module.scss';
import Input from '~/components/Input';
import config from '~/config';

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

function Login() {
    // eslint-disable-next-line no-unused-vars
    const { t, i18n } = useTranslation('translation', { keyPrefix: 'login' });
    const {
        register,
        handleSubmit,
        // setError,
        // clearErrors,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const { language, routes } = config;

    const onSubmit = (formData, e) => {
        e.preventDefault();
        navigate(routes.HOME);
        console.log(formData);
    };

    const handleChangeLauage = (e) => {
        i18n.changeLanguage(language[e.target.value]);
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
                    <form className={cx('flex flex-col items-center px-10 py-20')} onSubmit={handleSubmit(onSubmit)}>
                        <label className={cx('mb-10 text-3xl text-[#797979]')}>{t('login')}</label>
                        <Input
                            placeholder={t('StoreID')}
                            icon={FaStore}
                            borderBottom
                            className={cx('mb-2 w-[90%]')}
                            name={'StoreID'}
                            {...register('StoreID')}
                            errolMesseage={errors.username?.message}
                        />
                        <Input
                            placeholder={t('UserID')}
                            icon={FaUser}
                            borderBottom
                            className={cx('mb-2 w-[90%]')}
                            name={'UserID'}
                            {...register('UserID')}
                            errolMesseage={errors.UserID?.message}
                        />
                        <Input
                            placeholder={t('Password')}
                            icon={FaKey}
                            borderBottom
                            className={cx('mb-2 w-[90%]')}
                            name={'Password'}
                            type="password"
                            {...register('Password')}
                            errolMesseage={errors.Password?.message}
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
                        >
                            <FaRightToBracket />
                            {t('login')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
