import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const cx = classNames.bind();

function Dropdown({ listOptions, seletedValue, setSeletedValue }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (value) => {
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
        <div className="relative min-w-32 flex-1" ref={ref}>
            <button
                onClick={toggleDropdown}
                className={cx(
                    'flex w-full flex-1 rounded border border-solid border-slate-400 p-1',
                    'items-center justify-between hover:border-primary-color',
                )}
            >
                <span>{seletedValue}</span>
                <MdOutlineArrowDropDown size={20} />
            </button>
            <div
                className={cx(
                    isOpen ? 'scale-y-100' : 'scale-y-0',
                    'absolute left-0 w-full origin-top-left overflow-hidden rounded transition-all duration-300',
                    'z-20 border border-solid border-primary-color bg-white shadow-lg',
                )}
            >
                <ul className="py-1">
                    {listOptions.map((value, index) => (
                        <li
                            className="cursor-pointer px-4 py-1 hover:bg-primary-color"
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
    seletedValue: PropTypes.string,
    setSeletedValue: PropTypes.func,
    listOptions: PropTypes.array,
};

export default Dropdown;
