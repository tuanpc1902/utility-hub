import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { ConfigProvider, theme } from 'antd';
import { useLocalStorage } from '@uidotdev/usehooks';
import DefaultLayout from './app/layouts/DefaultLayout/DefaultLayout.js';
import { RoutesInterface } from './interfaces/CommonInterfaces.js';
import { publicRoutes } from './routes/routes.js';

function App() {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [themeMode] = useLocalStorage('themeMode', 'light');
    return (
        <ConfigProvider direction="ltr" theme={{ algorithm: themeMode === 'dark' ? darkAlgorithm : defaultAlgorithm }}>
            <Router>
                <Switch>
                    {publicRoutes.map((route: RoutesInterface) => {
                        const Page = route.component;
                        return (
                            <Route
                                key={uuidv4()}
                                path={route.path}
                                exact={true}
                                render={(props) => (
                                    <DefaultLayout key={uuidv4()}>
                                        <Page {...props} />
                                    </DefaultLayout>
                                )}
                            ></Route>
                        );
                    })}
                </Switch>
            </Router>
        </ConfigProvider>
    );
}

export default App;
