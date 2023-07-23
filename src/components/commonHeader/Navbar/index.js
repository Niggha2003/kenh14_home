import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import Grid from '~/components/Grid';
import ExpandNavbar from '../ExpandNavbar';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navbar() {
    const navbar = useRef();

    document.onscroll = function () {
        const scroll = document.documentElement.scrollTop || window.scrollY;
        if (scroll > 95) {
            navbar.current.classList.add(cx('black'));
        } else {
            if (navbar.current.classList.contains(cx('black'))) {
                navbar.current.classList.remove(cx('black'));
            }
        }
    };

    return (
        <div ref={navbar} className={cx('wrapper')}>
            <Grid className={cx('navbar-wrapper')}>
                <ul className={cx('navbar-list')}>
                    <li className={cx('navbar-item', 'home')}>
                        <Link className={cx('navbar-item-Link', 'home')} to="/">
                            TRANG CHỦ
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Star">
                            Star
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Ciné">
                            Ciné
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Musik">
                            Musik
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Beauty &amp; Fashion">
                            Beauty &amp; Fashion
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Đời sống">
                            Đời sống
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Money-Z">
                            Money-Z
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Ăn - Quẩy - Đi">
                            Ăn - Quẩy - Đi
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Xã hội">
                            Xã hội
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Thế giới đó đây">
                            Thế giới đó đây
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Sport">
                            Sport
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Học đường">
                            Học đường
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <Link to="/other" title="Xem Mua Luôn">
                            Xem Mua Luôn
                        </Link>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a href="http://video.kenh14.vn/" title="Video">
                            Video
                        </a>
                    </li>
                    <ExpandNavbar className={cx('navbar-item', 'expand-icon')}></ExpandNavbar>
                </ul>
            </Grid>
        </div>
    );
}

export default Navbar;
