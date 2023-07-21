import Banner from '../Banner';
import Navbar from '../Navbar';
import Toolbar from '../Toolbar';

function Header() {
    return (
        <div className="header">
            <Toolbar></Toolbar>
            <Banner></Banner>
            <Navbar></Navbar>
        </div>
    );
}

export default Header;
