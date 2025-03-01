import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Fragment } from 'react';
import { useCookies } from 'react-cookie';

import { publicRoutes, privateRoutes } from './routes';
import { BreadcrumbLayout } from './layouts';
import config from './config';

function App() {
    const [cookies] = useCookies(['token']);

    const token = cookies.token;

    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = route.layout;
                        if (Layout === null) Layout = Fragment;
                        else if (Layout === undefined) Layout = BreadcrumbLayout;

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

                    {privateRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = route.layout;
                        if (Layout === null) Layout = Fragment;
                        else if (Layout === undefined) Layout = BreadcrumbLayout;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    token ? (
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    ) : (
                                        <Navigate to={config.routes.LOGIN} replace /> // Chuyển hướng đến trang đăng nhập
                                    )
                                }
                            />
                        );
                        // token ? (
                        //     <Layout>
                        //         <Page />
                        //     </Layout>
                        // ) : (
                        //     <Navigate to={config.routes.LOGIN} replace /> // Chuyển hướng đến trang đăng nhập
                        // )
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
