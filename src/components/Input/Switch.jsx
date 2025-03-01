import { useFormContext } from 'react-hook-form';
import cx from 'classnames';

import { Switch as SwitchAntd } from 'antd';

const Switch = ({ name, label, disabled = false, className }) => {
    const {
        watch,
        setValue,
        formState: { errors },
    } = useFormContext();

    const error = errors[name]?.message;

    return (
        <div className={cx({ [className]: className })}>
            <div className={cx('flex items-center gap-2')}>
                <SwitchAntd checked={watch(name)} onChange={(value) => setValue(name, value)} disabled={disabled} />
                <label htmlFor={name} className="block font-semibold text-gray-700">
                    {label}
                </label>
            </div>
            <div className="mt-1">{error && <div className="mt-1 text-red-500">{error}</div>}</div>
        </div>
    );
};

export default Switch;
