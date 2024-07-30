import classNames from 'classnames/bind';
import { useTranslation } from 'react-i18next';
import { faStore, faKey, faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import styles from './Login.module.scss';
import Input from '~/components/Input';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <div className={cx('bg-[#eff0f2] flex justify-center items-center w-screen h-screen')}>
            <div className={cx('flex bg-white overflow-hidden rounded-lg relative w-[800px]')}>
                {/* img login */}
                <img src={require('~/assets/img/bgLogin.png')} alt="" />
                {/* form login */}
                <div className={cx('flex-1')}>
                    {/* change language */}
                    <select
                        className={cx('absolute top-6 right-8  bg-blue-100 p-2 rounded-md')}
                        name="language"
                        onChange={(e) => handleChangeLauage(e)}
                    >
                        {Object.keys(language).map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <form className={cx('flex flex-col px-10 py-20')} onSubmit={handleSubmit(onSubmit)}>
                        <label className={cx('text-[#797979] text-3xl mb-10')}>{t('login')}</label>
                        <Input
                            placeholder={t('StoreID')}
                            label={faStore}
                            className={cx('w-[90%]')}
                            name={'StoreID'}
                            {...register('StoreID')}
                            errolMesseage={errors.username?.message}
                        />
                        <Input
                            placeholder={t('UserID')}
                            label={faUser}
                            className={cx('w-[90%]')}
                            name={'UserID'}
                            {...register('UserID')}
                            errolMesseage={errors.UserID?.message}
                        />
                        <Input
                            placeholder={t('Password')}
                            label={faKey}
                            className={cx('w-[90%]')}
                            name={'Password'}
                            type="password"
                            {...register('Password')}
                            errolMesseage={errors.Password?.message}
                        />
                        <div className={cx('text-[13px] flex space-x-2')}>
                            <input type="checkbox" name="saveInfo" value={true} />
                            <label htmlFor="saveInfo"> {t('SaveUserInfo')}</label>
                        </div>

                        <button className={cx('w-[90%] bg-[#403e43] mt-6 p-4 text-white  rounded-full font-semibold')}>
                            <FontAwesomeIcon icon={faRightToBracket} />
                            {t('login')}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
