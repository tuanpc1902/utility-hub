import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import ProfileInfoTab from '~/app/pages/Profile/components/ProfileInfoTab.tsx';

function Profile() {
    const translate = useTranslation('Profile').t;
    return (
        <Tabs
            defaultActiveKey={'1'}
            items={[
                {
                    label: translate('profile'),
                    key: '1',
                    children: <ProfileInfoTab />,
                },
                {
                    label: translate('password'),
                    key: '2',
                    children: 'Tab 2',
                },
                {
                    label: translate('image'),
                    key: '3',
                    children: 'Tab 3',
                },
                {
                    label: translate('contact'),
                    key: '4',
                    children: 'Tab 4',
                },
            ]}
        />
    );
}

export default Profile;
