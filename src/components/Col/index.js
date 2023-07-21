import classNames from 'classnames/bind';
import styles from './Col.module.scss';

const cx = classNames.bind(styles);

function Col({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Col;
