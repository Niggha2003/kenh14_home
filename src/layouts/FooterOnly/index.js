import Footer from '~/components/commonFooter/Footer';

function FooterOnly({ children }) {
    return (
        <div>
            {children}
            <Footer></Footer>
        </div>
    );
}

export default FooterOnly;
