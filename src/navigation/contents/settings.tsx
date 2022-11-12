const ORANGE = '#FF9500';
const BLUE = '#007AFF';
const GREEN = '#4CD964';
const RED = '#FF3B30';
const GREY = '#8E8E93';
const PURPLE = '#5856D6';
const TEAL_BLUE = '#5AC8FA';

type SettingData = {
    title?: string;
    icon: string;
    backgroundColor?: string;
    hideChevron?: boolean;
    checkbox?: boolean;
    rightTitle?: string;
    type?: string;
};

type SettingsData = {
    data: SettingData[];
};


const settingsData: SettingsData[] = [
    {
        data: [
            {
                title: 'Airplane Mode',
                icon: 'ios-airplane',
                backgroundColor: ORANGE,
                hideChevron: true,
                checkbox: true,
                type: 'ionicon',
            },
            {
                title: 'Wi-Fi',
                backgroundColor: BLUE,
                icon: 'ios-wifi',
                type: 'ionicon',
            },
            {
                title: 'Bluetooth',
                backgroundColor: BLUE,
                icon: 'ios-bluetooth',
                rightTitle: 'Off',
                type: 'ionicon',
            },
            {
                title: 'Cellular',
                backgroundColor: GREEN,
                icon: 'ios-phone-portrait',
                type: 'ionicon',
            },
            {
                title: 'Personal Hotspot',
                backgroundColor: GREEN,
                icon: 'ios-radio',
                rightTitle: 'Off',
                type: 'ionicon',
            },
            {
                title: 'General',
                icon: 'ios-settings',
                backgroundColor: GREY,
                type: 'ionicon',
            },
            {
                title: 'Display & Brightness',
                backgroundColor: BLUE,
                icon: 'ios-bulb',
                type: 'ionicon',
            },
            {
                title: 'Wallpaper',
                backgroundColor: TEAL_BLUE,
                icon: 'ios-color-wand',
                type: 'ionicon',
            },
            {
                title: 'Sounds',
                backgroundColor: RED,
                icon: 'ios-volume-high',
                type: 'ionicon',
            },
            {
                title: 'Touch ID & Code',
                backgroundColor: RED,
                icon: 'ios-finger-print',
                type: 'ionicon',
            },
            {
                title: 'Emergency Call',
                backgroundColor: ORANGE,
                icon: 'ios-medical',
                type: 'ionicon',
            },
            {
                title: 'Battery',
                backgroundColor: GREEN,
                icon: 'ios-battery-full',
                type: 'ionicon',
            },
            {
                title: 'Confidentiality',
                backgroundColor: GREY,
                icon: 'ios-hand-left',
                type: 'ionicon',
            },
            {
                title: 'Notifications',
                icon: 'ios-notifications',
                backgroundColor: RED,
                type: 'ionicon',
            },
            {
                title: 'Control Center',
                backgroundColor: GREY,
                icon: 'switch',
                type: 'entypo',
            },
            {
                title: 'Do Not Disturb',
                backgroundColor: PURPLE,
                icon: 'ios-moon',
                type: 'ionicon',
            },
        ],
    }
];

export {
    settingsData,
}

export type {
    SettingData,
    SettingsData
}