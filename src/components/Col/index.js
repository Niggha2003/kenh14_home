import classNames from 'classnames/bind';
import styles from './Col.module.scss';

const cx = classNames.bind(styles);

function Col({ children, ...props }) {
    return (
        <div className={cx('wrapper')} {...props}>
            {children}
        </div>
    );
}

export default Col;
