import classNames from 'classnames/bind';
import styles from './SwipeItem.module.scss';

const cx = classNames.bind(styles);

function SwipeItem({ src, href, content, space }) {
    const srcPath = 'url(' + src + ')';
    return (
        <div className={cx('wrapper')}>
            <a style={{ backgroundImage: srcPath }} className={cx('image')} href={href}>
                {' '}
            </a>
            <a style={{ padding: space ? '0 15px' : '' }} className={cx('content')} href={href}>
                {content}
            </a>
        </div>
    );
}

export default SwipeItem;
