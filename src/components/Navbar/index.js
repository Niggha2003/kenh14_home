import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

import Grid from '../Grid';
import ExpandNavbar from '../ExpandNavbar';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Navbar() {
    const navbar = useRef();

    document.onscroll = function () {
        const scroll = document.documentElement.scrollTop || window.scrollY;
        console.log(scroll);
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
                        <a className={cx('navbar-item-link', 'home')} href="/">
                            TRANG CHỦ
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Star">
                            Star
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Ciné">
                            Ciné
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Musik">
                            Musik
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Beauty &amp; Fashion">
                            Beauty &amp; Fashion
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Đời sống">
                            Đời sống
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Money-Z">
                            Money-Z
                        </a>
                    </li>
                    <li className={cx('navbar-item')}>
                        <a className={cx('navbar-item-link')} href="/" title="Ăn - Quẩy - Đi">
                            Ăn - Quẩy - Đi
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
                        <a className={cx('navbar-item-link')} href="/" title="Sport">
                            Sport
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
                    <ExpandNavbar className={cx('navbar-item', 'expand-icon')}></ExpandNavbar>
                </ul>
            </Grid>
        </div>
    );
}

export default Navbar;
