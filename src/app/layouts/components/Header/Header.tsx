import { Layout, Space, theme } from 'antd';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './components/LanguageDropdown';
import ThemeMode from './components/ThemeMode';
import UnOutFoldMenuButton from './components/UnOutFoldMenuButton';
import { THeaderProps } from '~/app/types/HeaderTypes';

function Header(props: THeaderProps) {
    const { collapsed = false, setCollapsed } = props;
    const translate = useTranslation('Header').t;
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout.Header
            style={{
                padding: 0,
                background: colorBgContainer,
            }}
        >
            <UnOutFoldMenuButton collapsed={collapsed} setCollapsed={setCollapsed} />
            <Space wrap>
                <LanguageDropdown />
                <ThemeMode translate={translate} />
            </Space>
        </Layout.Header>
    );
}

export default Header;
