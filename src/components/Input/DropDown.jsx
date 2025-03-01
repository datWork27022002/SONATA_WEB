import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const cx = classNames.bind();

function Dropdown({ listOptions = [], className, top, name }) {
    const [valueInput, setValueInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const { watch, setValue, register, trigger } = useFormContext();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = async (item) => {
        const code = listOptions.filter((value) => value?.name === item.name)[0]?.code;
        setValue(name, String(code));
        // setValueInput(item.name);
        setIsOpen(false);
        await trigger(name);
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false); // Đóng component khi click ra ngoài
        }
    };

    const handleChangeWhenWatchNameChange = () => {
        //console.log(name, watch(name));
        const filter = listOptions.filter((value) => String(value?.code) === String(watch(name)));
        let valueVisible = '';
        if (filter.length === 1) {
            valueVisible = filter[0]?.name;
        }
        if (watch(name)) setValueInput(valueVisible);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (listOptions?.length > 0) {
            setValue(name, listOptions[0]?.code);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listOptions]);

    useEffect(() => {
        handleChangeWhenWatchNameChange();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [watch(name)]);

    return (
        <div
            className={cx('relative min-w-32', {
                [className]: className,
            })}
            ref={ref}
        >
            <input {...register(name)} className={cx('hidden')} />
            <button
                onClick={toggleDropdown}
                className={cx(
                    'flex w-full flex-1 rounded border border-solid border-slate-400 p-1',
                    'items-center justify-between bg-white px-1 hover:border-primary-color',
                )}
                type="button"
            >
                <span>{valueInput}</span>
                <MdOutlineArrowDropDown size={20} />
            </button>
            <div
                className={cx(
                    isOpen ? 'scale-y-100' : 'scale-y-0',
                    'absolute left-0 w-full rounded transition-all duration-300',
                    'z-20 border border-solid border-primary-color bg-white shadow-lg',
                    'max-h-[200px] overflow-auto',
                    top ? 'bottom-8 origin-bottom' : 'origin-top-left',
                )}
            >
                <ul className="py-1">
                    {listOptions.map((value, index) => (
                        <li
                            className="cursor-pointer text-ellipsis text-nowrap px-1 py-1 hover:bg-primary-color"
                            key={index}
                            onClick={() => handleChange(value)}
                        >
                            {value.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    seletedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    setSeletedValue: PropTypes.func,
    listOptions: PropTypes.array,
    className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    top: PropTypes.bool,
};

export default Dropdown;
