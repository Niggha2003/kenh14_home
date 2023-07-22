import classNames from 'classnames/bind';
import styles from './CategoryNewsItem.module.scss';

const cx = classNames.bind(styles);

function CategoryNewsItem({
    title,
    linkTitle,
    srcImage,
    newsTitle,
    linkNews,
    newsContent,
    linkBonus1,
    linkBonus1Content,
    linkBonus2,
    linkBonus2Content,
    titleInImage,
}) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>
                <a href={linkTitle}>{title}</a>
            </h3>
            {!titleInImage && (
                <>
                    <a href={linkNews}>
                        <img src={srcImage} alt={newsTitle}></img>
                    </a>
                    <h4 className={cx('news-title')}>
                        <a href={linkNews}>{newsTitle}</a>
                    </h4>
                    <p className={cx('news-content')}>{newsContent}</p>
                </>
            )}
            {titleInImage && (
                <div className={cx('title-in-image')}>
                    <a href={linkNews}>
                        <img className={cx('image')} src={srcImage} alt={newsTitle} />
                    </a>
                    <h3>
                        <a href={linkNews}>{newsTitle}</a>
                    </h3>
                </div>
            )}
            <p className={cx('bonus-link')}>
                <a href={linkBonus1}>{linkBonus1Content}</a>
            </p>
            <p className={cx('bonus-link')}>
                <a href={linkBonus2}>{linkBonus2Content}</a>
            </p>
        </div>
    );
}

export default CategoryNewsItem;
