import Footer from '~/components/commonFooter/Footer';
import Header from '~/components/commonHeader/Header';

function HeaderFooter({ children }) {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
}

export default HeaderFooter;
