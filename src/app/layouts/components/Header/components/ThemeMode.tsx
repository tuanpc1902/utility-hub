import { useLocalStorage } from '@uidotdev/usehooks';
import { Select } from 'antd';
import { TFunction } from 'i18next';
import CommonUtils from '~/utils/CommonUtils';

type TThemeModel = {
    translate: TFunction;
};

function ThemeMode(props: TThemeModel) {
    const { translate } = props;
    const [themMode, saveThemeMode] = useLocalStorage('themeMode', 'light');
    const themeOptions = [
        { value: 'light', label: translate('light') },
        { value: 'dark', label: translate('dark') },
        { value: 'system', label: translate('system') },
    ];
    const onChangeTheme = (value: string) => {
        if (value === 'system') {
            saveThemeMode(CommonUtils.getThemeFromSystemSettings());
        } else {
            saveThemeMode(value);
        }
    };
    return (
        <Select defaultValue={themMode} style={{ width: 95 }} onChange={onChangeTheme} options={themeOptions}></Select>
    );
}
export default ThemeMode;
