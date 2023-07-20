import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Search({ ...props }) {
    return (
        <div className={cx('wrapper')}>
            <input className={cx('search-input')} placeholder="Tìm kiếm..."></input>
            <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
        </div>
    );
}

export default Search;
