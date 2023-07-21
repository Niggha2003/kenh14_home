import Banner from './components/Banner';
import Toolbar from './components/Toolbar';

function App() {
    return (
        <div className="App">
            <Toolbar></Toolbar>
            <Banner></Banner>
            <div style={{ height: '1000px' }}></div>
        </div>
    );
}

export default App;
