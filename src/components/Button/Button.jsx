import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';
import IconCustom from '../IconCustom';

const cx = classNames.bind(styles);

function Button({
    children,
    primary,
    blue,
    red,
    teal,
    green,
    orange,
    lime,
    rounded,
    border,
    noBorderRadius,
    leftIcon,
    rightIcon,
    className,
    disable,
    to,
    href,
    ...passProps
}) {
    let Comp = 'button';

    let Props = {
        ...passProps,
    };

    if (to) {
        Props.to = to;
        Comp = Link;
    } else if (href) {
        Props.href = href;
        Comp = 'a';
    }

    return (
        <Comp
            className={cx(
                'min-h-[30px] min-w-[80px] px-2 text-[13px] text-text-color',
                'flex items-center justify-center border-0 py-1 font-semibold',
                'bg-gray-200 text-text-color hover:bg-primary-color',
                border && '!border border-solid border-primary-color',
                !noBorderRadius && 'rounded',
                blue && `!bg-blue-300 ${!disable && 'hover:!bg-blue-400'}`,
                teal && `!bg-teal-300 ${!disable && 'hover:!bg-teal-400'}`,
                green && `!bg-green-300 ${!disable && 'hover:!bg-green-400'}`,
                orange && `!bg-orange-300 ${!disable && 'hover:!bg-orange-400'}`,
                red && `!bg-red-300 ${!disable && 'hover:!bg-red-400'}`,
                lime && `!bg-lime-300 ${!disable && 'hover:!bg-lime-400'}`,
                disable && 'cursor-default opacity-70',
                { [className]: className },
            )}
            disabled={disable}
            {...Props}
        >
            {leftIcon && <IconCustom className={cx('mr-2 w-4')} icon={leftIcon} />}
            {children}
            {rightIcon && <IconCustom className={cx('ml-2 w-4')} icon={rightIcon} />}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    red: PropTypes.bool,
    blue: PropTypes.bool,
    teal: PropTypes.bool,
    green: PropTypes.bool,
    orange: PropTypes.bool,
    lime: PropTypes.bool,
    rounded: PropTypes.bool,
    border: PropTypes.bool,
    noBorderRadius: PropTypes.bool,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.object,
    className: PropTypes.string,
    disable: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
};

export default Button;
