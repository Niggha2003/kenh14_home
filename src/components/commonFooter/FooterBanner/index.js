import classNames from 'classnames/bind';
import styles from './FooterBanner.module.scss';

import Col from '~/components/Col';
import Grid from '~/components/Grid';

const cx = classNames.bind(styles);

function FooterBanner() {
    return (
        <div className={cx('wrapper')}>
            <Grid>
                <Col>
                    <div className={cx('contact')}>
                        <Col>
                            <a href="/" className={cx('contact-image')}>
                                {' '}
                            </a>
                            <div className={cx('contact-info')}>
                                <h4>Đóng góp nội dung</h4>
                                <a href="/" className={cx('contact-common-question')}>
                                    Câu hỏi thường gặp
                                </a>
                                <a href="/" className={cx('contact-email')}>
                                    bandoc@kenh14.vn
                                </a>
                                <p>Kenh14.vn rất hoan nghênh độc giả gửi thông tin và góp ý cho chúng tôi.</p>
                            </div>
                        </Col>
                    </div>
                    <div className={cx('fb-page')}>
                        <iframe
                            className={cx('fb-iframe')}
                            name="f2494f061ec9d5c"
                            data-testid="fb:page Facebook Social Plugin"
                            title="fb:page Facebook Social Plugin"
                            frameborder="0"
                            allowtransparency="true"
                            allowfullscreen="true"
                            scrolling="no"
                            allow="encrypted-media"
                            src="https://www.facebook.com/v2.8/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df29e8ed41183928%26domain%3Dkenh14.vn%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fkenh14.vn%252Ff3d8a59b491b87%26relation%3Dparent.parent&amp;container_width=500&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FK14vn&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=false&amp;small_header=false&amp;width=500"
                            style={{ border: 'none', visibility: 'visible', width: '500px', height: '130px' }}
                        ></iframe>
                    </div>
                </Col>
            </Grid>
        </div>
    );
}

export default FooterBanner;
