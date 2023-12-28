import { Upload } from 'antd';
import { Route } from 'react-router-dom';
import NoPermission from '../NoPermission/NoPermission.js';

type TPrivateRoutes = {
    component: React.ReactNode
    permission: string[]
    key: string
    path: string
}

function PrivateRoutes(propsRoutes: TPrivateRoutes){
    const { key, path} = propsRoutes;
    
    return (
        <Route key={key} path={path} render={props => 
            path.indexOf("upload") !== -1 ? (
                <Upload />
            ) : <NoPermission />
        } />
    )
}
export default PrivateRoutes;