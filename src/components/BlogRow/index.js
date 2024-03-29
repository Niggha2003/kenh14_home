import classNames from 'classnames/bind';
import styles from './BlogRow.module.scss';

const cx = classNames.bind(styles);

function BlogRow({
    href,
    imgUrl,
    des,
    title,
    content,
    width,
    height,
    sizeTitle,
    sizeContent,
    isVideo,
    place,
    time,
    children,
    backgroundColor,
}) {
    return (
        <div style={{ backgroundColor }} className={cx('wrapper')}>
            <a href={href} title={title}>
                {isVideo ? (
                    <video
                        className={cx('image')}
                        style={{ width, height }}
                        poster="https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/7/21/photo1689927487258-1689927488015752010363.gif.png"
                        muted=""
                        autoPlay={true}
                        loop={true}
                        data-src={imgUrl}
                        src={imgUrl}
                        data-loaded="true"
                    ></video>
                ) : (
                    <img className={cx('image')} style={{ width, height }} src={imgUrl} alt={des} />
                )}
            </a>
            <div className={cx('info')}>
                <h4 style={{ fontSize: sizeTitle }} className={cx('title')}>
                    <a href={href} title={title}>
                        {title}
                    </a>
                </h4>
                <div>
                    <div className={cx('place')}>{place}</div>
                    <span>-</span>
                    <div className={cx('time')}>{time}</div>
                </div>
                <div style={{ fontSize: sizeContent }} className={cx('content')}>
                    {content}
                </div>
                {children}
            </div>
        </div>
    );
}

export default BlogRow;
