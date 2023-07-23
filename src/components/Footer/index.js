import FooterMenu from '../FooterMenu';
import FooterBanner from '../FooterBanner';
import FooterInfo from '../FooterInfo';

function Footer() {
    return (
        <div className="footer">
            <FooterMenu></FooterMenu>
            <FooterBanner></FooterBanner>
            <FooterInfo></FooterInfo>
        </div>
    );
}

export default Footer;
