import { PiMoneyWavyFill } from 'react-icons/pi';
import { FaFilePowerpoint, FaRegCommentDots } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa6';
import { TbGiftCard } from 'react-icons/tb';
import { GrMoney } from 'react-icons/gr';
import { BiSolidDiscount } from 'react-icons/bi';
import { HiReceiptTax } from 'react-icons/hi';
import { GiMoneyStack } from 'react-icons/gi';

import i18n from '~/utils/i18n';

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

export const payment = () => [
    { type: i18n.t('Home.Cash'), icon: GiMoneyStack, quantity: 0, revenue: '0,00' },
    { type: i18n.t('Home.Credit_card'), icon: FaCreditCard, quantity: 0, revenue: '0,00' },
    { type: i18n.t('Home.Gift_card'), icon: TbGiftCard, quantity: 0, revenue: '0,00' },
    { type: i18n.t('Home.Point'), icon: FaFilePowerpoint, quantity: 0, revenue: '0,00' },
    { type: i18n.t('Home.Others'), icon: FaRegCommentDots, quantity: 0, revenue: '0,00' },
];

export const sumamry = () => [
    { type: i18n.t('Home.Total'), icon: GrMoney, revenue: '0,00' },
    { type: i18n.t('Home.Discount'), icon: BiSolidDiscount, revenue: '0,00' },
    { type: i18n.t('Home.Tip'), icon: PiMoneyWavyFill, revenue: '0,00' },
    { type: i18n.t('Home.Tax'), icon: HiReceiptTax, revenue: '0,00' },
];
