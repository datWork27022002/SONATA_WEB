import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const cx = classNames.bind();

function Dropdown({ listOptions, seletedValue = '', setSeletedValue = () => {}, className, top }) {
    const [valueInput, setValueInput] = useState(seletedValue || listOptions[0]);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (value) => {
        setValueInput(value);
        setSeletedValue(value);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false); // Đóng component khi click ra ngoài
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            className={cx('relative min-w-32', {
                [className]: className,
            })}
            ref={ref}
        >
            <button
                onClick={toggleDropdown}
                className={cx(
                    'flex w-full flex-1 rounded border border-solid border-slate-400 p-1',
                    'items-center justify-between bg-white px-1 hover:border-primary-color',
                )}
            >
                <span>{valueInput}</span>
                <MdOutlineArrowDropDown size={20} />
            </button>
            <div
                className={cx(
                    isOpen ? 'scale-y-100' : 'scale-y-0',
                    'absolute left-0 w-full overflow-hidden rounded transition-all duration-300',
                    'z-20 border border-solid border-primary-color bg-white shadow-lg',
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
                            {value}
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
