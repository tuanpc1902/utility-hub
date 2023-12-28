import { Select } from 'antd';
import React from 'react';
import i18n from '~/i18n/i18n.js';

const LanguageDropdown: React.FC = () => {
    const languageOptions = [
        { value: 'en-US', label: 'English' },
        { value: 'vi-VN', label: 'Tiếng Việt' },
    ];
    const defaultLanguage = localStorage.getItem('i18nextLng') || 'en-US';

    function onChangeLanguage(value: string) {
        i18n.changeLanguage(value).then();
    }

    return (
        <Select
            defaultValue={defaultLanguage}
            style={{ width: 110 }}
            onChange={onChangeLanguage}
            options={languageOptions}
        ></Select>
    );
};

export default LanguageDropdown;
