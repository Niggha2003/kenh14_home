import classNames from 'classnames/bind';
import styles from './CategoryNews.module.scss';

import CategoryNewsItem from './CategoryNewsItem';
import Col from '../Col';
import Row from '../Row';

const cx = classNames.bind(styles);

function CategoryNews() {
    return (
        <div className={cx('wrapper')}>
            <Row>
                <Col>
                    <CategoryNewsItem
                        title="star"
                        linkTitle="/"
                        srcImage="https://kenh14cdn.com/zoom/340_213/203336854389633024/2023/7/22/photo1690027519050-16900275194571789791951.jpg"
                        newsTitle="Thảm đỏ Miss World Vietnam 2023: Hoa hậu Mai Phương, Thùy Tiên chiếm spotlight, Á hậu Bảo Ngọc diện đồ nổi bật"
                        linkNews="/"
                        newsContent="Đông đảo người đẹp trong showbiz Việt như Hoa hậu Thùy Tiên, Hoa hậu Mai Phương, Á hậu Bảo Ngọc… đã xuất hiện tại thảm đỏ Chung kết Miss "
                        linkBonus1="/"
                        linkBonus1Content="Siêu mẫu Anh Thư tuổi 41: Trẻ đẹp như gái đôi mươi, được con trai động viên đi bước nữa"
                        linkBonus2="/"
                        linkBonus2Content="Bắt khẩn cấp bạn trai cũ của 1 nữ idol nổi tiếng vì tội lừa đảo"
                    ></CategoryNewsItem>
                    <CategoryNewsItem
                        title="Đời sống"
                        linkTitle="/"
                        srcImage="https://kenh14cdn.com/zoom/340_213/203336854389633024/2023/7/22/photo1690026701634-16900267020391532094635.png"
                        newsTitle="Linda Ngô, Salim đọ sắc qua “cam” thường, 2 anh chồng hộ tống được chấm 10 điểm tinh tế"
                        linkNews="/"
                        newsContent="Bên cạnh 2 cô vợ nổi tiếng, hành động tinh tế của Phong Đạt - chồng Linda Ngô và Hải Long - chồng Salim được nhiều người chú ý."
                        linkBonus1="/"
                        linkBonus1Content="Cặp đôi cách nhau 17.000km quyết định kết hôn sau 11 ngày bên nhau"
                        linkBonus2="/"
                        linkBonus2Content="Chàng trai cầu hôn bằng chiếc nhẫn 150.000 đồng, đưa vợ đi mua mảnh đất 40.000m2"
                    ></CategoryNewsItem>
                </Col>
                <Col>
                    <CategoryNewsItem
                        title="Xã hội"
                        linkTitle="/"
                        srcImage="https://kenh14cdn.com/zoom/340_213/203336854389633024/2023/7/22/photo1690033092040-169003309225663395890.jpg"
                        newsTitle="Dự báo thời tiết ngày 23/7: Miền Bắc oi nóng trở lại, nhiệt độ gia tăng"
                        linkNews="/"
                        newsContent="Ngày 23/7, Bắc Bộ ngày nắng, có nơi nắng nóng, nhiệt độ cao nhất ghi nhận ở các tỉnh, thành dự báo dao động trong khoảng 33-36 độ C."
                        linkBonus1="/"
                        linkBonus1Content="Cổ đông lớn nước ngoài đăng ký mua 20,9 triệu cổ phiếu của Vinamilk"
                        linkBonus2="/"
                        linkBonus2Content="Đã bắt được phạm nhân trốn trại giam của Bộ Công an ở Bình Dương"
                    ></CategoryNewsItem>
                    <CategoryNewsItem
                        title="MONEY-Z"
                        linkTitle="/"
                        srcImage="https://kenh14cdn.com/zoom/340_213/203336854389633024/2023/7/22/photo1690030261919-16900302621471845258226.jpg"
                        newsTitle='Ông bố chi tiền tỷ xây biệt thự 110m2, mời con gái lẫn con rể về chung sống hòa thuận 4 thế hệ vì một nguyên do "khó đoán"'
                        linkNews="/"
                        newsContent="Người đàn ông Nhật Bản này không ngại chi một số tiền lớn để xây biệt thự làm không gian sống thoải mái, tiện nghi cho các con về ở chung."
                        linkBonus1="/"
                        linkBonus1Content="Giá căn hộ chênh lệch đến 30 lần so với thu nhập người dân TP HCM"
                        linkBonus2="/"
                        linkBonus2Content="2 sai lầm trong chi tiêu khiến bạn quản lý tài chính không hiệu quả"
                    ></CategoryNewsItem>
                </Col>
                <Col>
                    <CategoryNewsItem
                        title="Beauty & fashion"
                        linkTitle="/"
                        srcImage="https://kenh14cdn.com/zoom/340_446/203336854389633024/2023/7/21/photo1689946112901-168994611301997599927.jpg"
                        newsTitle="Sự tinh tế của Song Hye Kyo khi diện váy dạ hội"
                        linkNews="/"
                        linkBonus1="/"
                        linkBonus1Content="Thon gọn hơn với 5 bài tập dưới nước mùa hè này"
                        linkBonus2="/"
                        linkBonus2Content="Địch Lệ Nhiệt Ba o ép vòng một sau khi bị chê giả tạo"
                        titleInImage
                    ></CategoryNewsItem>
                    <CategoryNewsItem
                        title="Xem mua luôn"
                        linkTitle="/"
                        srcImage="https://kenh14cdn.com/zoom/340_446/203336854389633024/2023/7/21/photo1689925806935-16899258071052125117065.jpg"
                        newsTitle="Thả que diêm xuống bồn cầu có tác dụng gì?"
                        linkNews="/"
                        linkBonus1="/"
                        linkBonus1Content="Một mẫu váy công sở hack dáng cực khéo, đang được lăng xê trong phim ngôn tình"
                        linkBonus2="/"
                        linkBonus2Content="Rời thành phố về ngoại ô xây nhà vườn rộng 1.000m2 với bể bơi và cây xanh"
                        titleInImage
                    ></CategoryNewsItem>
                </Col>
                <Col>
                    <CategoryNewsItem
                        title="Học đường"
                        linkTitle="/"
                        srcImage="https://kenh14cdn.com/zoom/340_213/203336854389633024/2023/7/22/photo1690022316236-1690022316381612031865.png"
                        newsTitle="Cha mẹ thường xuyên nói ra 3 câu này là thừa nhận sự thất bại trong cách nuôi dạy con cái"
                        linkNews="/"
                        newsContent="Khi con không nghe lời, nhiều cha mẹ có xu hướng quát mắng, chỉ trích hoặc dùng hình phạt, lấy uy quyền của người lớn để dạy dỗ con."
                        linkBonus1="/"
                        linkBonus1Content="Bố mẹ có thể cho con chơi điện tử nhưng cần đặt ra 8 nguyên tắc này"
                        linkBonus2="/"
                        linkBonus2Content='Ứng xử với "con thi trượt"'
                    ></CategoryNewsItem>
                    <CategoryNewsItem
                        title="MONEY-Z"
                        linkTitle="/"
                        srcImage="https://kenh14cdn.com/zoom/340_213/203336854389633024/2023/7/22/photo1690035076228-16900350763631432054623.jpg"
                        newsTitle="5 thói quen ăn uống khởi động chế độ chống oxy hóa, ngăn bệnh tật và làm chậm lão hóa"
                        linkNews="/"
                        newsContent="Chúng ta có thể tăng cường chất chống oxy hóa để mạnh khỏe, trẻ lâu hơn nhờ chế độ ăn uống."
                        linkBonus1="/"
                        linkBonus1Content="Bé gái 12 tuổi bị đột quỵ"
                        linkBonus2="/"
                        linkBonus2Content='Thanh niên dính trọn bộ bệnh tình dục sau một lần đi "vui vẻ"'
                    ></CategoryNewsItem>
                </Col>
            </Row>
        </div>
    );
}

export default CategoryNews;
