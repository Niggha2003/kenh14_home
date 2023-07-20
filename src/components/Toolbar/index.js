import classNames from 'classnames/bind';
import styles from './Toolbar.module.scss';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Search from '../Search';
import Grid from '../Grid';

const cx = classNames.bind(styles);

function Toolbar() {
    return (
        <div className={cx('wrapper')}>
            <Grid className={cx('toolbar-wrapper')}>
                <div className={cx('toolbar-item-wrapper')}>
                    <li className={cx('toolbar-item')}>
                        <a className={cx('toolbar-item-link')} href="/">
                            EMAGAZINE
                        </a>
                    </li>
                    <li className={cx('toolbar-item')}>
                        <a className={cx('toolbar-item-link')} href="/">
                            SHOWLIVE
                        </a>
                    </li>
                </div>
                <Search></Search>
            </Grid>
        </div>
    );
}

export default Toolbar;
