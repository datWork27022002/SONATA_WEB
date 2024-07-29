import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoute.map((route) => {
                        const Page = route.component;
                        return <Route path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
