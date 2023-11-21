import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type TUnOutMenuButton = {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
};

function UnOutFoldMenuButton(props: TUnOutMenuButton) {
    const { collapsed, setCollapsed } = props;

    function onChangeCollapsed() {
        setCollapsed(!collapsed);
    }

    return (
        <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onChangeCollapsed}
            style={{
                width: 64,
                height: 64,
            }}
        />
    );
}
export default UnOutFoldMenuButton;
