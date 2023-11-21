import { MenuProps } from 'antd';

export type MenuItem = Required<MenuProps>['items'][number];
export type TMenuItem = {
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
};