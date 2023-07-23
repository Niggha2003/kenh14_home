import classNames from 'classnames/bind';
import styles from './MenuWrapper.module.scss';

import MenuItem from '../MenuItem';
import Grid from '~/components/Grid';

const cx = classNames.bind(styles);

function MenuWrapper() {
    return (
        <Grid className={cx('menu-wrapper')}>
            <div className={cx('orc-list')}>
                <MenuItem title="Đời Sống" contentList={['Nhân Vật', 'Xem-Ăn-Chơi', 'Trạm Yêu']}></MenuItem>
                <MenuItem
                    title="Xem Mua Luôn"
                    contentList={['Thời Trang', 'Đẹp', 'Home & Decor', 'Shopping Guide']}
                ></MenuItem>
                <MenuItem
                    title="Sport"
                    contentList={['Bóng Đá', 'Hậu Trường', 'Thể Thao Khác', 'Video', 'Ngoại hạng Anh', 'Esports']}
                ></MenuItem>
                <MenuItem title="Musik" contentList={['Âu-Mý', 'Châu-Á', 'Việt Nam', 'Edm']}></MenuItem>
                <MenuItem
                    title="Ciné"
                    contentList={['Mọt Phim', 'Phim Việt Nam', 'Phim Âu-Mỹ', 'Phim Châu Á']}
                ></MenuItem>
                <MenuItem title="Tek-Life" contentList={['Metaverse', 'How-To', 'Wow', '2-Mall']}></MenuItem>
                <MenuItem title="Star" contentList={['Sao Việt', 'Paparazzi', 'TV Show']}></MenuItem>
                <MenuItem title="Xã Hội" contentList={['Pháp Luật', 'Nóng Trên Mạng', 'Sống Xanh']}></MenuItem>
                <MenuItem title="Học Đường" contentList={['Người Việt Trẻ', 'Du Học', 'Bản Tin 46']}></MenuItem>
                <MenuItem title="Thế Giới Đó Đây" contentList={['Chùm ảnh', 'Khám phá', 'Lạ & Cool']}></MenuItem>
                <MenuItem title="Sức khỏe"></MenuItem>
            </div>

            <div className={cx('topics')}>
                <div className={cx('topic-title')}>Nhóm chủ đề</div>
                <ul className={cx('topic-list')}>
                    <li className={cx('topic-item')}>
                        <a className={cx('topic-item-link')} href="/" title="Quizz">
                            <img
                                src="https://kenh14cdn.com/zoom/190_70/2016/cover-quizz-1458020660190.jpg"
                                alt="Quizz"
                            />
                            <span>Quizz</span>
                        </a>
                    </li>
                    <li className={cx('topic-item')}>
                        <a className={cx('topic-item-link')} href="/" title="eMagazine">
                            <img
                                src="https://kenh14cdn.com/zoom/190_70/2016/magazine-cover-1470901702968.jpg"
                                alt="eMagazine"
                            />
                            <span>eMagazine</span>
                        </a>
                    </li>
                    <li className={cx('topic-item')}>
                        <a className={cx('topic-item-link')} href="/" title="Đọc Chậm">
                            <img
                                src="https://kenh14cdn.com/zoom/190_70/2016/cover-doc-cham-1477989772612.jpg"
                                alt="Đọc Chậm"
                            />
                            <span>Đọc Chậm</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className={cx('info')}>
                <div className={cx('info-item')}>
                    <h4 className={cx('info-title')}>Tải app</h4>
                    <ul className={cx('info-list')}>
                        <li className={cx('info-link')}>
                            <a
                                href="https://itunes.apple.com/us/app/kenh-14/id670518264?ls=1&amp;mt=8"
                                title="Tải về từ App Store"
                            >
                                iOS
                            </a>
                        </li>
                        <li className={cx('info-link')}>
                            <a
                                href="https://play.google.com/store/apps/details?id=vcc.mobilenewsreader.kenh14"
                                title="Tải về từ Google Play"
                            >
                                Android
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={cx('info-item')}>
                    <h4 className={cx('info-title')}>Fanpage</h4>
                </div>
                <div className={cx('info-item')}>
                    <h4 className={cx('info-title')}>Liên hệ</h4>
                    <ul className={cx('info-list')}>
                        <li className={cx('info-link')}>
                            <a rel="nofollow" href="/adv.chn" title="Liên hệ quảng cáo" target="_blank">
                                Quảng cáo
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Grid>
    );
}

export default MenuWrapper;
