import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

import styles from './TitleLayout.module.scss';

const cx = classNames.bind(styles);

const TitleLayout = ({ title, children }) => {
    return (
        <Fragment>
            <div className={cx('my-2 py-2 text-xl font-semibold', 'border-b-[1px] border-solid border-b-[#ddd]')}>
                {title}
            </div>
            {children}
        </Fragment>
    );
};

TitleLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default TitleLayout;
