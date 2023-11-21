import { Avatar, Button, DatePicker, Flex, Form, Input, Radio, Select } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import style from './ProfilleInfoTab.module.scss';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import { DATETIME_CONSTANT } from '~/app/constants/datetime.constant.ts';

const cx = classNames.bind(style);

function ProfileInfoTab() {
    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 4 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
    };

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    function onChangeGender() {}

    const gender = 1;

    function renderProfile(): JSX.Element {
        return (
            <div className={cx('account_info-tab')}>
                <div className={cx('account_info-tab--name')}>
                    <Form
                        {...formItemLayout}
                        form={form}
                        name="profile"
                        onFinish={onFinish}
                        style={{ maxWidth: 600 }}
                        scrollToFirstError
                    >
                        <Form.Item name="avatar">
                            <Avatar
                                size={{ xs: 32, sm: 42, md: 60, lg: 80, xl: 96, xxl: 120 }}
                                icon={<AntDesignOutlined />}
                            />
                        </Form.Item>
                        <Form.Item labelAlign={'left'} name="username" label="Username">
                            <Input autoFocus readOnly={true} placeholder={'Enter username'} />
                        </Form.Item>
                        <Form.Item
                            labelAlign={'left'}
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'Email is invalid',
                                },
                            ]}
                        >
                            <Input placeholder={'example@email.com'} />
                        </Form.Item>
                        <Form.Item labelAlign={'left'} name="firstName" label="First name">
                            <Input placeholder={'Enter first name'} />
                        </Form.Item>
                        <Form.Item labelAlign={'left'} name="lastName" label="Last name">
                            <Input placeholder={'Enter last name'} />
                        </Form.Item>
                        <Form.Item labelAlign={'left'} name="phone" label="Phone">
                            <Input type={'text'} placeholder={'098.7654.321'} />
                        </Form.Item>
                        <Form.Item labelAlign={'left'} name="gender" label="Gender" rules={[{ type: 'number' }]}>
                            <Radio.Group onChange={onChangeGender} value={gender} defaultValue={1}>
                                <Radio value={1}>Male</Radio>
                                <Radio value={0}>FeMale</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item labelAlign={'left'} name={'birthday'} label={'Birthday'}>
                            <DatePicker
                                defaultValue={dayjs(dayjs(), DATETIME_CONSTANT.DD_MM_YYYY_SLASH)}
                                format={DATETIME_CONSTANT.DD_MM_YYYY_SLASH}
                            ></DatePicker>
                        </Form.Item>
                        <Form.Item labelAlign={'left'} name="defaultTheme" label="Default theme">
                            <Select
                                defaultValue="System"
                                style={{ width: 120 }}
                                onChange={() => {}}
                                options={[
                                    { value: 'system', label: 'System' },
                                    { value: 'light', label: 'Light' },
                                    { value: 'dark', label: 'Dark' },
                                ]}
                            ></Select>
                        </Form.Item>
                    </Form>
                </div>
                <Flex gap={'small'} wrap={'wrap'}>
                    <Button type={'primary'}>Submit</Button>
                    <Button>Reset</Button>
                </Flex>
            </div>
        );
    }

    return renderProfile();
}

export default ProfileInfoTab;
