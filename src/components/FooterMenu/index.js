import classNames from 'classnames/bind';
import styles from './FooterMenu.module.scss';

import Grid from '../Grid';

const cx = classNames.bind(styles);

function FooterMenu() {
    return (
        <div className={cx('wrapper')}>
            <Grid className={cx('menu-wrapper')}>
                <ul className={cx('navbar-list')}>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Star">
                            Star
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Musik">
                            Musik
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Ciné">
                            Ciné
                        </a>
                    </li>

                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Đời sống">
                            Đời sống
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Xã hội">
                            Xã hội
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Thế giới đó đây">
                            Thế giới đó đây
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Sức khỏe">
                            Sức khỏe
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Made by Me">
                            Made by Me
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Sport">
                            Sport
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Khám phá">
                            Khám phá
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="2-Tek">
                            2-Tek
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Dị">
                            Dị
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Học đường">
                            Học đường
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Xem Mua Luôn">
                            Xem Mua Luôn
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="http://video.kenh14.vn/" title="Video">
                            Video
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="http://video.kenh14.vn/" title="Video">
                            Quizz
                        </a>
                    </li>
                </ul>
            </Grid>
        </div>
    );
}

export default FooterMenu;
