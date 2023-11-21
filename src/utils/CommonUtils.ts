
class CommonUtils {
    static getThemeFromSystemSettings() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // static getMenuItems(
    //     label: React.ReactNode,
    //     key: React.Key,
    //     icon?: React.ReactNode,
    //     children?: MenuItem[],
    //     type?: 'group',
    // ): MenuItem {
    //     return {
    //         key,
    //         icon,
    //         children,
    //         label,
    //         type,
    //     } as MenuItem;
    // }
}
export default CommonUtils;
