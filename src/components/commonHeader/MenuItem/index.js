import classNames from 'classnames/bind';
import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, contentList = [] }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>{title}</h4>
            <ul className={cx('content-list')}>
                {contentList.map((content, index) => {
                    return (
                        <li key={index} className={cx('content-item')}>
                            {content}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default MenuItem;
