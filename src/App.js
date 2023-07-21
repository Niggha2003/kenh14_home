import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Toolbar from './components/Toolbar';

function App() {
    return (
        <div className="App">
            <Toolbar></Toolbar>
            <Banner></Banner>
            <Navbar></Navbar>
            <div style={{ height: '1000px' }}></div>
        </div>
    );
}

export default App;
