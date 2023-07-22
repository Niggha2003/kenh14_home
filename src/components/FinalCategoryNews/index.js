import classNames from 'classnames/bind';
import styles from './FinalCategoryNews.module.scss';

import Col from '../Col';
import FinalCategoryNewsItem from './FinalCategoryNewsItem';

const cx = classNames.bind(styles);

function FinalCategoryNews() {
    return (
        <div className={cx('wrapper')}>
            <Col>
                <FinalCategoryNewsItem
                    logoPosition="-271px -115px"
                    title="TIN HOT TỪ SOHA"
                    linkTitle="/"
                    srcImage="https://sohanews.mediacdn.vn/zoom/210_131/160588918557773824/2023/7/22/photo1689989228774-1689989228921341996330.png"
                    newsTitle="Cuộc sống của Ngọc Trinh ở tuổi U40 sau 7 năm chia tay tỷ phú Hoàng Kiều hơn 45 tuổi ra sao?"
                    linkNews="/"
                    linkBonus1="/"
                    linkBonus1Content="Siêu mẫu Anh Thư tuổi 41: Trẻ đẹp như gái đôi mươi, được con trai động viên đi bước nữa"
                    linkBonus2="/"
                    linkBonus2Content="Nhan sắc tuổi 40 của siêu mẫu Việt nổi danh nhờ đôi chân dài trứ danh"
                ></FinalCategoryNewsItem>
                <FinalCategoryNewsItem
                    logoPosition="-241px -115px"
                    title="TIN HAY AFAMILY"
                    linkTitle="/"
                    srcImage="https://afamilycdn.com/zoom/210_131/150157425591193600/2023/7/22/landscapeavatarcopy68bc98277-0269-4f45-a223-7a92edf38d89-16900106930661365722269-0-0-500-800-crop-16900107091292032895997.jpg"
                    newsTitle='Món ăn quen thuộc của người Việt xuất hiện trong phim "King the Land" đang gây sốt'
                    linkNews="/"
                    linkBonus1="/"
                    linkBonus1Content='"Đổi màu" giữa mùa hè, khu rừng ngập mặn duy nhất ở Huế trở thành điểm đến của các ...'
                    linkBonus2="/"
                    linkBonus2Content="Toàn cảnh drama của 2 nàng Hậu trước giờ chung kết: Bảo Ngọc bị chỉ trích hiếu ..."
                ></FinalCategoryNewsItem>
                <FinalCategoryNewsItem
                    logoPosition="-241px -115px"
                    title="Đẹp"
                    linkTitle="/"
                    srcImage="https://afamilycdn.com/zoom/210_131/150157425591193600/2023/7/19/thiet-ke-chua-co-ten-38-1689760443762685412541-0-0-500-800-crop-1689760448227248997558.jpg"
                    newsTitle="Không phải chân váy đen, chân váy trắng mới là xu hướng hè năm nay"
                    linkNews="/"
                    linkBonus1="/"
                    linkBonus1Content="Kinh nghiệm khắc phục tình trạng da nám, thâm sạm sau 2 tuần"
                    linkBonus2="/"
                    linkBonus2Content="Chuyên gia dinh dưỡng chỉ ra lỗi sai khiến chị em khó giảm cân"
                ></FinalCategoryNewsItem>
            </Col>
        </div>
    );
}

export default FinalCategoryNews;
