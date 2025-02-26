import { useEffect, useState } from 'react';
import classNames from 'classnames';

const cx = classNames;

function Switch({ status = false, setStatus = () => {} }) {
    const [curentStatus, setCurrentStatus] = useState(status);

    const changeStatus = () => {
        setStatus(!status);
        setCurrentStatus(!curentStatus);
    };

    useEffect(() => {
        setCurrentStatus(status);
    }, [status]);
    return (
        <div
            className={cx(
                'flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded border border-solid border-blue-500',
                curentStatus && 'bg-blue-500 text-white',
            )}
            onClick={changeStatus}
        >
            Y
        </div>
    );
}

export default Switch;
