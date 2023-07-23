import classNames from 'classnames/bind';
import styles from './Toolbar.module.scss';

import ToolbarSearch from '../ToolbarSearch';
import Grid from '~/components/Grid';

const cx = classNames.bind(styles);

function Toolbar() {
    return (
        <div className={cx('wrapper')}>
            <Grid className={cx('toolbar-wrapper')}>
                <ul className={cx('toolbar-item-wrapper')}>
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
                </ul>
                <ToolbarSearch></ToolbarSearch>
            </Grid>
        </div>
    );
}

export default Toolbar;
