import Upload from "~/app/pages/Upload";
import NoPermission from "../NoPermission/NoPermission";
import { Route } from 'react-router-dom';

type TPrivateRoutes = {
    component: React.ReactNode
    permission: string[]
    key: string
    path: string
}

function PrivateRoutes(propsRoutes: TPrivateRoutes){
    const {component, permission, key, path} = propsRoutes;
    console.log("🚀 ~ file: PrivateRoutes.tsx:14 ~ PrivateRoutes ~ path:", path)
    
    return (
        <Route key={key} path={path} render={props => 
            path.indexOf("upload") !== -1 ? (
                <Upload />
            ) : <NoPermission />
        } />
    )
}
export default PrivateRoutes;