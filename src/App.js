import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoute } from './routes';
import { DefaultLayout } from './layouts';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoute.map((route, index) => {
                        const Page = route.component;

                        let Layout = route.layout;
                        if (Layout === null) Layout = Fragment;
                        else if (Layout === undefined) Layout = DefaultLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
