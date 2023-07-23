import classNames from 'classnames/bind';
import styles from './FooterInfoItem.module.scss';

const cx = classNames.bind(styles);

function FooterInfoItem({
    title,
    description,
    link,
    linkTitle,
    urlPosition,
    linkTitle1,
    urlPosition1,
    linkTitle2,
    urlPosition2,
}) {
    console.log(urlPosition, urlPosition1, urlPosition2);
    return (
        <div className={cx('info-wrapper')}>
            <h4>{title}</h4>
            <p>{description}</p>
            {linkTitle1 && (
                <p className={cx('link1')}>
                    <span style={{ backgroundPosition: urlPosition1 }}></span>
                    {linkTitle1}
                </p>
            )}
            {linkTitle2 && (
                <a className={cx('link1')} href={link}>
                    <span style={{ backgroundPosition: urlPosition2 }}></span>
                    {linkTitle2}
                </a>
            )}
            {linkTitle && (
                <a className={cx('link')} href={link}>
                    <span style={{ backgroundPosition: urlPosition }}></span>
                    {linkTitle}
                </a>
            )}
        </div>
    );
}

export default FooterInfoItem;
