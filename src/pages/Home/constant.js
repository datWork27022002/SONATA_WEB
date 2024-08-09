import { PiMoneyWavyFill } from 'react-icons/pi';
import { FaFilePowerpoint, FaRegCommentDots } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa6';
import { TbGiftCard } from 'react-icons/tb';
import { GrMoney } from 'react-icons/gr';
import { BiSolidDiscount } from 'react-icons/bi';
import { HiReceiptTax } from 'react-icons/hi';
import { GiMoneyStack } from 'react-icons/gi';

export const monthNames = [
    'THÁNG MỘT',
    'THÁNG HAI',
    'THÁNG BA',
    'THÁNG TƯ',
    'THÁNG NĂM',
    'THÁNG SÁU',
    'THÁNG BẢY',
    'THÁNG TÁM',
    'THÁNG CHÍN',
    'THÁNG MƯỜI',
    'THÁNG MƯỜI MỘT',
    'THÁNG MƯỜI HAI',
];

export const payment = [
    { type: 'Cash', icon: GiMoneyStack, quantity: 0, revenue: '0,00' },
    { type: 'Credit Card', icon: FaCreditCard, quantity: 0, revenue: '0,00' },
    { type: 'Gift Card', icon: TbGiftCard, quantity: 0, revenue: '0,00' },
    { type: 'Point', icon: FaFilePowerpoint, quantity: 0, revenue: '0,00' },
    { type: 'Point', icon: FaRegCommentDots, quantity: 0, revenue: '0,00' },
];

export const sumamry = [
    { type: 'Total', icon: GrMoney, revenue: '0,00' },
    { type: 'Discount', icon: BiSolidDiscount, revenue: '0,00' },
    { type: 'Tip', icon: PiMoneyWavyFill, revenue: '0,00' },
    { type: 'Tax', icon: HiReceiptTax, revenue: '0,00' },
];
