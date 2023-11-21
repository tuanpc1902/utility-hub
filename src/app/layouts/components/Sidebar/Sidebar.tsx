import { Layout, Menu, MenuProps, MenuTheme } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '@uidotdev/usehooks';
import './Sidebar.scss';
import { TFunction } from 'i18next';
import { useState } from 'react';

const { Sider } = Layout;

type TSidebar = {
    collapsed: boolean;
    translate: TFunction;
};

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

function Sidebar(props: TSidebar) {
    const { collapsed, translate } = props;
    const [theme] = useLocalStorage('themeMode', 'light');
    const [current, setCurrent] = useState('1');

    console.log('current1 => ' + current);
    const items: MenuItem[] = [
        getItem(
            translate('account'),
            '1',
            <Link to={'/account'}>
                <UserOutlined />
            </Link>,
        ),
        getItem(
            translate('video'),
            '2',
            <Link to={'/video'}>
                <VideoCameraOutlined />
            </Link>,
        ),
        getItem(
            translate('upload'),
            '3',
            <Link to={'/upload'}>
                <UploadOutlined />
            </Link>,
        ),
    ];

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <Menu
                theme={theme as MenuTheme}
                onClick={onClick}
                mode="inline"
                selectedKeys={[current]}
                defaultSelectedKeys={[current]}
                items={items}
            />
        </Sider>
    );
}

export default Sidebar;
