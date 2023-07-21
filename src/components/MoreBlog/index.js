import classNames from 'classnames/bind';
import styles from './MoreBlog.module.scss';

const cx = classNames.bind(styles);

function MoreBlog({ moreBlogList = [] }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>Đọc thêm</div>
            <ul className={cx('content-list')}>
                {moreBlogList.map((blog, index) => {
                    return (
                        <li key={index} className={cx('content-item')}>
                            <a href={blog.href}>{blog.title}</a>
                            <span>{blog.time}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MoreBlog;
