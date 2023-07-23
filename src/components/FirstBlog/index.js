import BlogCol from '~/components/BlogCol';
import Col from '~/components/Col';
import Row from '~/components/Row';

function FirstBlog({ type, blog = [] }) {
    return (
        <div className="wrapper">
            <Col>
                <BlogCol
                    href={blog[0].href}
                    imgUrl={blog[0].imgUrl}
                    des={blog[0].des}
                    title={blog[0].title}
                    content={blog[0].content}
                    width="460px"
                    height="289px"
                    sizeTitle="26px"
                    sizeContent="14px"
                ></BlogCol>
                {type === 'home' && (
                    <BlogCol
                        href={blog[1].href}
                        imgUrl={blog[1].imgUrl}
                        des={blog[1].des}
                        title={blog[1].title}
                        content={blog[1].content}
                        width="220px"
                        height="289px"
                        sizeTitle="19px"
                        backgroundColor="#efefef75"
                    ></BlogCol>
                )}
                {!type && (
                    <Row>
                        <BlogCol
                            href={blog[1].href}
                            imgUrl={blog[1].imgUrl}
                            des={blog[1].des}
                            title={blog[1].title}
                            content={blog[1].content}
                            width="220px"
                            height="289px"
                            sizeTitle="19px"
                            backgroundColor="wheat"
                        ></BlogCol>
                        <BlogCol
                            href={blog[2].href}
                            imgUrl={blog[2].imgUrl}
                            des={blog[2].des}
                            title={blog[2].title}
                            content={blog[2].content}
                            width="220px"
                            height="289px"
                            sizeTitle="19px"
                            backgroundColor="wheat"
                        ></BlogCol>
                    </Row>
                )}
            </Col>
        </div>
    );
}

export default FirstBlog;
