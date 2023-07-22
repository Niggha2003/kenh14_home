import BlogRow from '../BlogRow';
import Grid from '../Grid';
import Row from '../Row';

import FirstBlog from '../FirstBlog';
import Swipe from '../Swipe';
import MoreBlog from '../MoreBlog';
import TrendingTag from '../TrendingTag';

import classNames from 'classnames/bind';
import styles from './Body.module.scss';
import CategoryNews from '../CategoryNews';
import FinalCategoryNews from '../FinalCategoryNews';

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
            href: 'https://github.com/atomiks/tippyjs-react',
            imgUrl: 'https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg',
            des: 'hello',
            title: 'Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón',
            content:
                'Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder.',
        },
        {
            href: 'https://github.com/atomiks/tippyjs-react',
            imgUrl: 'https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg',
            des: 'hello',
            title: 'Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón',
            content: '',
        },
    ];

    const item = [
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
        <div className={cx('body')}>
            <Grid width="700px" margin="0 0 0 250px" className={cx('body-wrapper')}>
                <FirstBlog type="home" blog={firstBlog}></FirstBlog>
                <Swipe itemList={item} height="300px"></Swipe>
                <div className={cx('space-red')}></div>
                <Row>
                    <BlogRow
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
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
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
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
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
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
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
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
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
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
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
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
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
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
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
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
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="250px"
                        height="330px"
                        sizeTitle="20px"
                        sizeContent="13px"
                        place="Star"
                        time="1 giờ trước"
                    >
                        <MoreBlog moreBlogList={blog}></MoreBlog>
                    </BlogRow>
                    <BlogRow
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
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
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
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
                <CategoryNews />
                <TrendingTag></TrendingTag>
                <FinalCategoryNews />
            </Grid>
        </div>
    );
}

export default Body;
