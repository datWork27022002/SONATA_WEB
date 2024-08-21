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
    rounded,
    noBorderRadius,
    leftIcon,
    rightIcon,
    className,
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
                !noBorderRadius && 'rounded',
                blue && '!bg-blue-300 hover:!bg-blue-400',
                teal && '!bg-teal-300 hover:!bg-teal-400',
                green && '!bg-green-300 hover:!bg-green-400',
                orange && '!bg-orange-300 hover:!bg-orange-400',
                red && '!bg-red-300 hover:!bg-red-400',

                { [className]: className },
            )}
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
    rounded: PropTypes.bool,
    noBorderRadius: PropTypes.bool,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.object,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
};

export default Button;
