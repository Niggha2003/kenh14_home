import BlogRow from '~/components/BlogRow';
import Grid from '~/components/Grid';
import Row from '~/components/Row';

import FirstBlog from '~/components/FirstBlog';
import Swipe from '~/components/Swipe';
import TrendingTag from '~/components/TrendingTag';

import classNames from 'classnames/bind';
import styles from './Body.module.scss';

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
            imgUrl: 'https://kenh14cdn.com/zoom/500_314/203336854389633024/2023/7/23/photo1690109723578-16901097242811524321002.jpg',
            des: 'Trương Bá Chi và Tạ Đình Phong hội ngộ sau nhiều năm xa cách?',
            title: 'Trương Bá Chi và Tạ Đình Phong hội ngộ sau nhiều năm xa cách?',
            content: 'Trương Bá Chi và Tạ Đình Phong được cho là đang cùng con trai cả Lucas có mặt ở Úc.',
        },
        {
            href: '/',
            imgUrl: 'https://kenh14cdn.com/zoom/180_113/203336854389633024/2023/7/23/photo1690117759328-16901177599251282842254.jpeg',
            des: 'Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón mừng anh',
            title: 'Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón mừng anh',
            content: '',
        },
        {
            href: '/',
            imgUrl: 'https://kenh14cdn.com/zoom/180_113/203336854389633024/2023/7/23/photo1690102521981-1690102522313176600731.jpg',
            des: 'hello',
            title: 'Phát sốt phiên bản nữ của dàn nam thần đẹp trai nhất xứ Hàn: Bản nữ của kim',
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
                <FirstBlog blog={firstBlog}></FirstBlog>
                <Swipe itemList={item} height="300px"></Swipe>
                <div className={cx('space-red')}></div>
                <Row>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/300/203336854389633024/2023/7/22/photo1690027794176-1690027794749258302080.jpg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="1 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/300/203336854389633024/2023/7/22/photo1690043108278-1690043108692525707791.jpg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="1 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/300/203336854389633024/2023/7/22/photo1690025758516-16900257590321344050663.jpg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="1 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/300/203336854389633024/2023/7/22/photo1690037553276-1690037553409945420312.jpg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="1 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/300/203336854389633024/2023/7/23/photo1690081730895-1690081731098952079671.jpeg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="1 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/23/photo1690109637157-16901096381631399090181.jpg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="250px"
                        height="330px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="1 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/300/203336854389633024/2023/7/23/photo1690074395512-1690074395697733952592.jpg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="1 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/300/203336854389633024/2023/7/23/photo1690089594012-16900895942911018688323.png"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="1 giờ trước"
                    ></BlogRow>
                    <TrendingTag></TrendingTag>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/300/203336854389633024/2023/7/23/photo1690102173421-16901021739041633190580.jpg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="1 giờ trước"
                    ></BlogRow>
                    <BlogRow
                        href="/"
                        imgUrl="https://kenh14cdn.com/thumb_w/300/203336854389633024/2023/7/23/photo1690074206109-16900742076082015831527.jpg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="250px"
                        height="156px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="1 giờ trước"
                    ></BlogRow>
                </Row>
            </Grid>
        </div>
    );
}

export default Body;
