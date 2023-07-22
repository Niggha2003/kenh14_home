import classNames from 'classnames/bind';
import styles from './FinalCategoryNewsItem.module.scss';

import Row from '../Row';

const cx = classNames.bind(styles);

function FinalCategoryNewsItem({
    logoPosition,
    linkTitle,
    title,
    linkNews,
    srcImage,
    newsTitle,
    linkBonus1,
    linkBonus1Content,
    linkBonus2,
    linkBonus2Content,
}) {
    const url = 'url(https://kenh14cdn.com/web_images/sprite-k14.20.png)' + logoPosition + ' no-repeat';
    return (
        <div className={cx('wrapper')}>
            <Row>
                <h4 className={cx('title')}>
                    <span style={{ background: url }}></span>
                    <a href={linkTitle}>{title}</a>
                </h4>
                <img className={cx('image')} href={linkNews} src={srcImage} alt={newsTitle}></img>
                <h4 className={cx('news-title')}>
                    <a href={linkNews}>{newsTitle}</a>
                </h4>
                <p className={cx('bonus-link')}>
                    <a href={linkBonus1}>{linkBonus1Content}</a>
                </p>
                <p className={cx('bonus-link')}>
                    <a href={linkBonus2}>{linkBonus2Content}</a>
                </p>
            </Row>
        </div>
    );
}

export default FinalCategoryNewsItem;
