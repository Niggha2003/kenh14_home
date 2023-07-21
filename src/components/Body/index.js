import BlogCol from '../BlogCol';
import BlogRow from '../BlogRow';
import Grid from '../Grid';
import Row from '../Row';
import Col from '../Col';

import MoreBlog from '../MoreBlog';

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

    return (
        <div className={cx('body')}>
            <Grid width="700px" margin="0 0 0 250px" className={cx('body-wrapper')}>
                <Col>
                    <BlogCol
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        content="Charlie Puth cuối cùng đã tung hình ảnh chào khán giả Việt Nam trên trang cá nhân và sẵn sàng cháy hết mình trên sân khấu 8Wonder."
                        width="460px"
                        height="289px"
                        sizeTitle="26px"
                        sizeContent="14px"
                    ></BlogCol>
                    <BlogCol
                        href="https://github.com/atomiks/tippyjs-react"
                        imgUrl="https://kenh14cdn.com/thumb_w/250/203336854389633024/2023/7/21/photo1689929554314-1689929554447537019244.jpg"
                        des="hello"
                        title="Charlie Puth check-in tại Việt Nam, Amee và Suboi cùng dàn sao Việt rần rần vào chào đón"
                        width="220px"
                        height="289px"
                        sizeTitle="19px"
                    ></BlogCol>
                </Col>
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
                </Row>
            </Grid>
        </div>
    );
}

export default Body;