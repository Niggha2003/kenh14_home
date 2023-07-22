import classNames from 'classnames/bind';
import styles from './SwipeItem.module.scss';

const cx = classNames.bind(styles);

function SwipeItem({ src, href, content }) {
    const srcPath = 'url(' + src + ') no-repeat';
    return (
        <div className={cx('wrapper')}>
            <a style={{ background: srcPath }} className={cx('image')} href={href}>
                {' '}
            </a>
            <a className={cx('content')} href={href}>
                {content}
            </a>
        </div>
    );
}

export default SwipeItem;
