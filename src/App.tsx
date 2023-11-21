import DefaultLayout from '~/app/layouts/DefaultLayout/DefaultLayout.tsx';
import { publicRoutes } from '~/routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RoutesInterface } from '~/interfaces/CommonInterfaces.ts';
import { v4 as uuidv4 } from 'uuid';
import { ConfigProvider, theme } from 'antd';
import { useLocalStorage } from '@uidotdev/usehooks';

function App() {
    const { defaultAlgorithm, darkAlgorithm } = theme;
    const [themeMode] = useLocalStorage('themeMode', 'light');
    console.log(themeMode);
    return (
        <ConfigProvider direction="ltr" theme={{ algorithm: themeMode === 'dark' ? darkAlgorithm : defaultAlgorithm }}>
            <Router>
                <div className="App">
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
                </div>
            </Router>
        </ConfigProvider>
    );
}

export default App;
