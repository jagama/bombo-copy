import Carousel from "./components/Carousel";

function App() {
    return (
        <div className="App">
            <Carousel/>
            <div className='bg-danger' style={{height: '100vh'}}></div>
            <div className='bg-warning' style={{height: '100vh'}}></div>
            <div className='bg-info' style={{height: '100vh'}}></div>
        </div>
    );
}

export default App;
