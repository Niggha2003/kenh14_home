import classNames from 'classnames/bind';
import styles from './BlogCol.module.scss';

const cx = classNames.bind(styles);

function BlogCol({ href, imgUrl, des, title, content, width, height, sizeTitle, sizeContent, isVideo }) {
    return (
        <div className={cx('wrapper')}>
            <a href={href} title={title}>
                {isVideo ? (
                    <video
                        className={cx('image')}
                        style={{ width, height }}
                        poster="https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/7/21/photo1689927487258-1689927488015752010363.gif.png"
                        muted=""
                        autoplay="true"
                        loop="true"
                        data-src={imgUrl}
                        src={imgUrl}
                        data-loaded="true"
                    ></video>
                ) : (
                    <img className={cx('image')} style={{ width, height }} src={imgUrl} alt={des} />
                )}
            </a>
            <h4 style={{ fontSize: sizeTitle, width }} className={cx('title')}>
                <a href={href} title={title}>
                    {title}
                </a>
            </h4>
            <div style={{ fontSize: sizeContent, width }} className={cx('content')}>
                {content}
            </div>
        </div>
    );
}

export default BlogCol;
