import classNames from 'classnames/bind';
import styles from './FooterMenu.module.scss';

import Grid from '~/components/Grid';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function FooterMenu() {
    return (
        <div className={cx('wrapper')}>
            <Grid className={cx('menu-wrapper')}>
                <ul className={cx('navbar-list')}>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Star">
                            Star
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Musik">
                            Musik
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Ciné">
                            Ciné
                        </Link>
                    </li>

                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Đời sống">
                            Đời sống
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Xã hội">
                            Xã hội
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Thế giới đó đây">
                            Thế giới đó đây
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Sức khỏe">
                            Sức khỏe
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Made by Me">
                            Made by Me
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Sport">
                            Sport
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Khám phá">
                            Khám phá
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="2-Tek">
                            2-Tek
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Dị">
                            Dị
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Học đường">
                            Học đường
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} to="/other" title="Xem Mua Luôn">
                            Xem Mua Luôn
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} href="http://video.kenh14.vn/" title="Video">
                            Video
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link className={cx('navbar-item-link')} href="http://video.kenh14.vn/" title="Quizz">
                            Quizz
                        </Link>
                    </li>
                </ul>
            </Grid>
        </div>
    );
}

export default FooterMenu;
