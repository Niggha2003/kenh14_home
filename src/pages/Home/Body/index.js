import BlogRow from '~/components/BlogRow';
import Grid from '~/components/Grid';
import Row from '~/components/Row';

import FirstBlog from '~/components/FirstBlog';
import Swipe from '~/components/Swipe';
import MoreBlog from '~/components/MoreBlog';
import TrendingTag from '~/components/TrendingTag';

import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import CategoryNews from '~/components/CategoryNews';
import FinalCategoryNews from '~/components/FinalCategoryNews';

const cx = classNames.bind(styles);

function Body() {
    const blog = [
        {
            href: '/',
            title: 'Không muốn phải rời sân, Ronaldo ra dấu để "nhắc" HLV trưởng',
            time: '8 giờ trước',
        },
        {
            href: '/',
            title: 'Vợ HLV Mai Đức Chung hết lòng ủng hộ ước mơ World Cup của chồng',
            time: '10 giờ trước',
        },
        {
            href: '/',
            title: 'Khoảnh khắc vỡ òa của đội tuyển New Zealand sau khi giành chiến thắng lịch sử tại World Cup nữ',
            time: '8 giờ trước',
        },
    ];

    const firstBlog = [
        {
            href: '/',
            imgUrl: 'https://kenh14cdn.com/zoom/460_289/203336854389633024/2023/7/23/photo1690077629237-1690077629968302430306.jpg',
            des: 'Nổi da gà nghe Charlie Puth hát We Don\'t Talk Anymore và See You Again, thổ lộ: "Trải nghiệm đầu tiên tại Việt Nam thật đặc biệt"',
            title: 'Nổi da gà nghe Charlie Puth hát We Don\'t Talk Anymore và See You Again, thổ lộ: "Trải nghiệm đầu tiên tại Việt Nam thật đặc biệt"',
            content:
                'Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder.',
        },
        {
            href: '/',
            imgUrl: 'https://kenh14cdn.com/zoom/220_289/203336854389633024/2023/7/23/photo1690106555992-1690106556224178139577.png',
            des: 'Chung kết Miss World Vietnam 2023: Ấn tượng với khoảnh khắc đăng quang của Huỳnh Trần Ý Nhi',
            title: 'Chung kết Miss World Vietnam 2023: Ấn tượng với khoảnh khắc đăng quang của Huỳnh Trần Ý Nhi',
            content: '',
        },
    ];

    const item = [
        {
            content: 'Charlie Puth nức nở khen đất nước và fan Việt Nam, hé lộ cảm xúc tuyệt vời',
            href: '/',
            src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/7/23/photo1690117759328-16901177599251282842254.jpeg',
        },
        {
            content: 'Hành trình giành ngôi Á hậu của Minh Kiên - Cô gái có mẹ làm giúp việc',
            href: '/',
            src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/7/23/photo1690083925972-1690083926204825478159.jpg',
        },
        {
            content: 'Ông xã Hồ Ngọc Hà "cực cháy" sau sân khấu 8Wonder, biểu cảm gây chú ý',
            href: '/',
            src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/7/22/photo1690041521615-1690041521960940270572.png',
        },
        {
            content: 'Khung ảnh gây "bùng nổ" của Hà Anh Tuấn và MONO, tương tác thân thiết trên sân khấu 8Wonder',
            href: '/',
            src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/7/22/photo1690041289235-16900412895561085104872.jpg',
        },
        {
            content: 'HIEUTHUHAI "đốt cháy" sân khấu 8Wonder khiến hàng nghìn khán giả phát cuồng',
            href: '/',
            src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/7/22/photo1690034458609-1690034458893255968251.jpg',
        },
        {
            content:
                'Nhân vật kề cận Charlie Puth tại 8Wonder, diện mạo nổi bật khiến khán giả truy tìm ngay danh tính',
            href: '/',
            src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/7/22/photo1690015403163-16900154035551366222178.png',
        },
        {
            content: 'Đi xem "8Wonder": Beat chưa kịp bắt thì đã bị nàng nhờ cầm túi để "đu" idol',
            href: '/',
            src: 'https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/7/22/photo1690034071896-16900340723111883843560.jpg',
        },
    ];

    return (
        <div className={cx('body')}>
            <Grid width="700px" margin="0 0 0 250px" className={cx('body-wrapper')}>
                <FirstBlog type="home" blog={firstBlog}></FirstBlog>
                <Swipe itemList={item} height="300px"></Swipe>
                <div className={cx('space-red')}></div>
                <Row>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/23/photo1690118832495-16901188326771102853883.jpg"
                        des="Mổ bụng cá sấu 800 kg ở Malaysia, phát hiện người xấu số"
                        title="Mổ bụng cá sấu 800 kg ở Malaysia, phát hiện người xấu số"
                        content="Lực lượng kiểm lâm ở Tawau, bang Sabah, miền Đông Malaysia, đã phát hiện thi thể của người đàn ông 60 tuổi mất tích"
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Thế Giới Đó Đây"
                        time="1 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/203336854389633024/2023/7/23/photo1690113053106-1690113053249367557680.gif.mp4"
                        des="Mối tình của Hoa hậu Ý Nhi và bạn trai được gia đình ủng hộ, “đàng trai” góp mặt trong nhiều dịp đặc biệt"
                        title="Mối tình của Hoa hậu Ý Nhi và bạn trai được gia đình ủng hộ, “đàng trai” góp mặt trong nhiều dịp đặc biệt"
                        content="Tân Hoa hậu Ý Nhi không ngần ngại công khai mối tình đầu kéo dài 6 năm của mình và bạn trai khiến người hâm mộ chú ý"
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Đời sống"
                        time="2 giờ trước"
                        isVideo
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/23/photo1690115597341-16901155975091142066582.jpg"
                        des="Ảnh hiếm thời đi học của top 3 Miss World Vietnam 2023: Ý Nhi, Đào Hiền thuần khiết, Minh Kiên gây thương nhớ"
                        title="Ảnh hiếm thời đi học của top 3 Miss World Vietnam 2023: Ý Nhi, Đào Hiền thuần khiết, Minh Kiên gây thương nhớ"
                        content="Chung kết Miss World Vietnam 2023 khép lại đã tìm ra top 3 đương nhiệm gồm: Hoa hậu Huỳnh Trần Ý Nhi, Á hậu 1 Đào Thị ..."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Học đường"
                        time="2 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/203336854389633024/2023/7/23/photo1690096086820-16900960871231403710238.gif.mp4"
                        des="Đợi Á hậu Phương Anh tới 1 giờ sáng sau Chung kết Miss World Vietnam, ông xã doanh nhân ghi điểm vì điều này"
                        title="Đợi Á hậu Phương Anh tới 1 giờ sáng sau Chung kết Miss World Vietnam, ông xã doanh nhân ghi điểm vì điều này"
                        content="Doanh nhân Đức Hồ được khán giả khen ngợi vì hành động tinh tế, chăm sóc Á hậu Phương Anh sau Chung kết Miss World ..."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="2 giờ trước"
                        isVideo
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/23/photo1690100735017-16901007351892062471522.jpg"
                        des="HH Huỳnh Trần Ý Nhi “gây lú” vì giống Đông Nhi, 1 người đẹp cũng bất ngờ được gọi tên"
                        title="HH Huỳnh Trần Ý Nhi “gây lú” vì giống Đông Nhi, 1 người đẹp cũng bất ngờ được gọi tên"
                        content="Nhan sắc của tân Miss World Vietnam 2023 - Huỳnh Trần Ý Nhi đang trở thành chủ đề bàn tán của cộng đồng mạng."
                        width="250px"
                        height="330px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Beauty & Fashion"
                        time="3 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/23/photo1690110029016-1690110029386840351462.jpg"
                        des="Nam thần lai Gia Đình Là Số 1 rủ hôn thê giảm cân cấp tốc sau màn cầu hôn, kết quả gây trầm trồ"
                        title="Nam thần lai Gia Đình Là Số 1 rủ hôn thê giảm cân cấp tốc sau màn cầu hôn, kết quả gây trầm trồ"
                        content="Thân hình của tài tử Gia Đình Là Số 1 đã thay đổi đáng kể sau màn giảm cân."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="3 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/203336854389633024/2023/7/23/photo1690100522337-16901005225552028905445.gif.mp4"
                        des="Bị netizen chỉ trích thờ ơ không quan tâm đến con gái đầu, Phạm Quỳnh Anh bức xúc lên tiếng"
                        title="Bị netizen chỉ trích thờ ơ không quan tâm đến con gái đầu, Phạm Quỳnh Anh bức xúc lên tiếng"
                        content="Nữ ca sĩ Phạm Quỳnh Anh vướng tranh cãi vì hành động bị cho là bỏ bê, thờ ơ với con gái Tuệ Lâm trong bữa tiệc sinh ..."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="4 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/23/photo1690098919764-16900989199291239011507.jpg"
                        des="Kết quả World Cup 2023: ĐT nữ Bồ Đào Nha thua trận trước khi gặp ĐT nữ Việt Nam"
                        title="Kết quả World Cup 2023: ĐT nữ Bồ Đào Nha thua trận trước khi gặp ĐT nữ Việt Nam"
                        content="Kết quả World Cup 2023 hôm nay 23/7, ĐT nữ Bồ Đào Nha để thua Hà Lan 0-1 trước ngày đối đầu ĐT nữ Việt Nam."
                        width="250px"
                        height="330px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Sport"
                        time="6 giờ trước"
                    >
                        <MoreBlog moreBlogList={blog}></MoreBlog>
                    </BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/23/photo1690107305663-16901073059841383481607.jpeg"
                        des="Phan Công Khanh bị tố lừa bán xe, chiếm đoạt 24,5 tỷ và nợ tiền mua hoa khai trương showroom"
                        title="Phan Công Khanh bị tố lừa bán xe, chiếm đoạt 24,5 tỷ và nợ tiền mua hoa khai trương showroom"
                        content="Thêm nhiều người đã đến Công an TPHCM tố cáo Phan Công Khanh và đồng bọn lừa bán siêu xe, chiếm đoạt tiền cũng như nợ ..."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Xã hội"
                        time="5 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/23/photo1690096854143-1690096854394974081560.png"
                        des='Ai đang giàu nhất đại gia đình Kim "siêu vòng ba"?'
                        title='Ai đang giàu nhất đại gia đình Kim "siêu vòng ba"?'
                        content='Với giá trị tài sản ròng cá nhân lên đến 1,7 tỉ USD, Kim "siêu vòng ba" đang là người giàu nhất đại gia đình thị phi ...'
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Money-Z"
                        time="2 giờ trước"
                    ></BlogRow>
                </Row>
                <CategoryNews />
                <TrendingTag></TrendingTag>
                <FinalCategoryNews />
            </Grid>
        </div>
    );
}

export default Body;
