import { theme } from 'antd';
import { Layout } from 'antd';
import { ReactNode } from 'react';

interface ContentProps {
    children: ReactNode;
}

function Content({ children }: ContentProps) {
    const {
        token: { colorBgContainer, colorText },
    } = theme.useToken();

    return (
        <Layout.Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: '500px',
                background: colorBgContainer,
                color: colorText,
            }}
        >
            {children}
        </Layout.Content>
    );
}

export default Content;