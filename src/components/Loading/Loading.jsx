import classNames from 'classnames/bind';
import './Loading.scss';

const cx = classNames.bind();

export const LoadingSmall = () => {
    return (
        <div className={cx('flex h-full w-full items-center justify-center bg-black opacity-70')}>
            <div class="loader">
                <div class="inner one"></div>
                <div class="inner two"></div>
                <div class="inner three"></div>
            </div>
        </div>
    );
};

function Loading() {
    return (
        <div
            className={cx(
                'fixed right-0 top-0 z-20 flex h-full w-full items-center justify-center bg-black opacity-70',
            )}
        >
            <div class="loader">
                <div class="inner one"></div>
                <div class="inner two"></div>
                <div class="inner three"></div>
            </div>
        </div>
    );
}

export default Loading;
