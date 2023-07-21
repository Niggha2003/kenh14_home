import Banner from '../Banner';
import Navbar from '../Navbar';
import Toolbar from '../Toolbar';

function Header() {
    return (
        <div className="header">
            <Toolbar></Toolbar>
            <Banner></Banner>
            <Navbar></Navbar>
            <div style={{ height: '1000px' }}></div>
        </div>
    );
}

export default Header;
