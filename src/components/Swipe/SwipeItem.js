import classNames from 'classnames/bind';
import styles from './SwipeItem.module.scss';

const cx = classNames.bind(styles);

function SwipeItem({ src, href, content, space, backgroundColor, shadow }) {
    const srcPath = 'url(' + src + ')';
    return (
        <div style={{ backgroundColor, boxShadow: shadow ? '0px 2px 10px #d0cdcd' : '' }} className={cx('wrapper')}>
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
