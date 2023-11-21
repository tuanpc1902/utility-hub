import { ReactNode, Suspense, useState } from 'react';
import { Layout } from 'antd';
import style from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '~/app/layouts/components/Sidebar';
import Header from '~/app/layouts/components/Header';
import Content from '~/app/layouts/components/Content';
import { useTranslation } from 'react-i18next';
import SpinLoading from '~/app/components/Spin/SpinLoading';

const cx = classNames.bind(style);

interface DefaultLayoutProps {
    children: ReactNode;
}

function DefaultLayout(props: DefaultLayoutProps) {
    const { children } = props;
    const [collapsed, setCollapsed] = useState(false);
    const translate = useTranslation('Layout').t;
    return (
        <Layout className={cx('default__layout')}>
            <Sidebar collapsed={collapsed} translate={translate} />
            <Layout>
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content>
                    <Suspense fallback={<SpinLoading />}>{children}</Suspense>
                </Content>
            </Layout>
        </Layout>
    );
}

export default DefaultLayout;
