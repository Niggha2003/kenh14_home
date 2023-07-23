import classNames from 'classnames/bind';
import styles from './Banner.module.scss';

import Grid from '~/components/Grid';

const cx = classNames.bind(styles);

function Banner() {
    return (
        <div className={cx('wrapper')}>
            <Grid className={cx('banner-wrapper')}>
                <a href="/" className={cx('logo')}>
                    {' '}
                </a>
                <div className={cx('trending-wrapper')}>
                    <ul className={cx('trending-list')}>
                        <li className={cx('trending-item')}>
                            <a href="/" className={cx('trending-item-link')}>
                                #Charlie Puth và dàn sao Việt khuấy đảo đại nhạc hội 8Wonder
                            </a>
                        </li>
                        <li className={cx('trending-item')}>
                            <a href="/" className={cx('trending-item-link')}>
                                #Nước đến chân là nhảy tại Tiger Crystal Rave 2.0
                            </a>
                        </li>
                    </ul>
                </div>
            </Grid>
        </div>
    );
}

export default Banner;
