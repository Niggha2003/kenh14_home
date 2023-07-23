import HeaderFooter from '~/layouts/HeaderFooter';
import Body from './Body';
import { useEffect } from 'react';

function Home() {
    const ScrollToTop = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return null;
    };

    return (
        <div>
            <ScrollToTop />
            <HeaderFooter>
                <Body></Body>
            </HeaderFooter>
        </div>
    );
}

export default Home;
