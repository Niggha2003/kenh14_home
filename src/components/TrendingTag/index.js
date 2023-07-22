import classNames from 'classnames/bind';
import styles from './TrendingTag.module.scss';
import Swipe from '../Swipe';

import { faArrowRight, faForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function TrendingTag() {
    const trends = [
        {
            content: 'hello xin chào tất cả mọi người',
            href: 'https://www.facebook.com/',
            src: 'https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/22/photo1689996011916-16899960121061725455709.png',
        },
        {
            content: 'hello xin chào tất cả mọi người',
            href: 'https://www.facebook.com/',
            src: 'https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/22/photo1689996011916-16899960121061725455709.png',
        },
        {
            content: 'hello xin chào tất cả mọi người',
            href: 'https://www.facebook.com/',
            src: 'https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/22/photo1689996011916-16899960121061725455709.png',
        },
        {
            content: 'hello xin chào tất cả mọi người',
            href: 'https://www.facebook.com/',
            src: 'https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/22/photo1689996011916-16899960121061725455709.png',
        },
        {
            content: 'hello xin chào tất cả mọi người',
            href: 'https://www.facebook.com/',
            src: 'https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/22/photo1689996011916-16899960121061725455709.png',
        },
        {
            content: 'hello xin chào tất cả mọi người',
            href: 'https://www.facebook.com/',
            src: 'https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/22/photo1689996011916-16899960121061725455709.png',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('tag')}>
                <div className={cx('tag-title')}>Tag hot</div>
                <div className={cx('tag-btn')}>
                    <p>Trending Tag</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
            <div className={cx('title')}>
                <FontAwesomeIcon icon={faForward} />
                <p>Charlie Puth Và Dàn Sao Việt Khuấy Đảo Đại Nhạc Hội 8Wonder</p>
            </div>
            <Swipe height="360px" itemList={trends} backgroundColor="#e7e6e6" space></Swipe>
        </div>
    );
}

export default TrendingTag;
