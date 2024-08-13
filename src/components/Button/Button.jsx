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
    teal,
    green,
    orange,
    rounded,
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
                'min-h-[30px] min-w-[80px] text-text-color',
                'flex items-center justify-center rounded border-0 py-1 font-semibold',
                'bg-primary-color hover:text-text-color-secondnary',
                blue && '!bg-blue-300 hover:!bg-blue-500',
                teal && '!bg-teal-300 hover:!bg-teal-500',
                green && '!bg-green-300 hover:!bg-green-500',
                orange && '!bg-orange-300 hover:!bg-orange-500',

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
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.object,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
};

export default Button;
