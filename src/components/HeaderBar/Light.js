import Color from 'color';

import {Platform} from 'react-native';

export default {

    // Badge
    badgeBg: '#ED1727',
    badgeColor: '#fff',


    // Button
    btnFontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto_medium',
    btnDisabledBg: '#b5b5b5',
    btnDisabledClr: '#f1f1f1',

    get btnPrimaryBg () {
        return this.brandPrimary;
    },
    get btnPrimaryColor () {
        return this.inverseTextColor;
    },
    get btnInfoBg () {
        return this.brandInfo;
    },
    get btnInfoColor () {
        return this.inverseTextColor;
    },
    get btnSuccessBg () {
        return this.brandSuccess;
    },
    get btnSuccessColor () {
        return this.inverseTextColor;
    },
    get btnDangerBg () {
        return this.brandDanger;
    },
    get btnDangerColor () {
        return this.inverseTextColor;
    },
    get btnWarningBg () {
        return this.brandWarning;
    },
    get btnWarningColor () {
        return this.inverseTextColor;
    },
    get btnTextSize () {
        return (Platform.OS==='ios') ? this.fontSizeBase* 1.1 :
        this.fontSizeBase-1;
    },
    get btnTextSizeLarge () {
        return this.fontSizeBase* 1.5;
    },
    get btnTextSizeSmall () {
        return this.fontSizeBase* .8;
    },
    get borderRadiusLarge () {
        return this.fontSizeBase* 3.8;
    },

    buttonPadding: 6,

    get iconSizeLarge () {
        return this.iconFontSize* 1.5;
    },
    get iconSizeSmall () {
        return this.iconFontSize* .6;
    },


    // card
    cardDefaultBg: '#fff',


    // checkbox
    checkboxBgColor: '#039BE5',
    checkboxSize: 23,
    checkboxTickColor: '#fff',


    // colors
    brandPrimary : '#5067FF',
    brandInfo: '#5bc0de',
    brandSuccess: '#5cb85c',
    brandDanger: '#d9534f',
    brandWarning: '#f0ad4e',
    brandSidebar: '#252932',


    // font
    fontFamily: (Platform.OS === 'ios' ) ? 'HelveticaNeue' : 'Roboto',
    fontSizeBase: 15,

    get fontSizeH1 () {
        return this.fontSizeBase*1.8;
    },
    get fontSizeH2 () {
        return this.fontSizeBase* 1.6;
    },
    get fontSizeH3 () {
        return this.fontSizeBase* 1.4;
    },


    // footer
    footerHeight: 55,
    footerDefaultBg: (Platform.OS === 'ios' ) ? '#F8F8F8' : '#4179F7',
    footerBtnMargin: 1,


    //footertab
    tabBarTextColor: (Platform.OS === 'ios' ) ? '#6b6b6b' : '#b3c7f9',
    tabBarActiveTextColor: (Platform.OS === 'ios' ) ? '#007aff' : '#fff',
    tabActiveBgColor: (Platform.OS=='ios') ? '#cde1f9' : undefined,
    tabActiveBorderRadius: (Platform.OS=='ios') ? 7 : undefined,
    tabBarTextSize:  (Platform.OS=='ios') ? 12.5 : 10,
    tabBarActiveTextSize:  (Platform.OS=='ios') ? 12.5 : 11,

    //tab
    tabDefaultBg: (Platform.OS === 'ios' ) ? '#F8F8F8' : '#4179F7',
    topTabBarTextColor: (Platform.OS === 'ios' ) ? '#6b6b6b' : '#b3c7f9',
    topTabBarActiveTextColor: (Platform.OS === 'ios' ) ? '#007aff' : '#fff',
    topTabActiveBgColor: (Platform.OS=='ios') ? '#cde1f9' : undefined,
    topTabBarBorderColor: (Platform.OS === 'ios' ) ? '#007aff' : '#fff',


    // header
    iosToolbarBtnColor: '#007aff',
    toolbarDefaultBg: (Platform.OS === 'ios' ) ? '#F8F8F8' : '#4179F7',
    toolbarHeight: (Platform.OS === 'ios' ) ? 64 : 56,
    toolbarIconSize: (Platform.OS === 'ios' ) ? 20 : 22,
    toolbarInputColor: '#CECDD2',
    toolbarInverseBg: '#222',
    toolbarTextColor: (Platform.OS==='ios') ? '#000' : '#fff',
    get statusBarColor() {
        return Color(this.toolbarDefaultBg).darken(0.2).hexString();
    },


    // icon
    iconFamily: 'Ionicons',
    iconFontSize: (Platform.OS === 'ios' ) ? 30 : 28,
    iconMargin: 7,


    // inputgroup
    inputFontSize: 15,
    inputBorderColor: '#D9D5DC',
    inputSuccessBorderColor: '#2b8339',
    inputErrorBorderColor: '#ed2f2f',

    get inputColor () {
        return this.textColor;
    },
    get inputColorPlaceholder () {
        return '#575757';
    },

    inputGroupMarginBottom: 10,
    inputHeightBase: 40,
    inputPaddingLeft: 5,

    get inputPaddingLeftIcon () {
        return this.inputPaddingLeft* 8;
    },


    // lineheight
    btnLineHeight: 19,
    lineHeightH1: 32,
    lineHeightH2: 27,
    lineHeightH3: 22,
    iconLineHeight: (Platform.OS === 'ios' ) ? 37 : 30,
    lineHeight: (Platform.OS === 'ios' ) ? 20 : 24,


    // list
    listBorderColor: '#ddd',
    listDividerBg: '#ddd',
    listItemHeight: 45,
    listItemPadding: (Platform.OS === 'ios' ) ? 12 : 16,
    listNoteColor: '#808080',
    listNoteSize: 13,
    listMarginLeft: 15,


    // progress
    defaultProgressColor: '#E4202D',
    inverseProgressColor: '#1A191B',


    // radiobtn
    radioBtnSize: (Platform.OS === 'ios') ? 25 : 23,
    radioColor: '#7e7e7e',

    get radioSelectedColor() {
        return Color(this.radioColor).darken(0.2).hexString();
    },


    // spinner
    defaultSpinnerColor: '#45D56E',
    inverseSpinnerColor: '#1A191B',


    // tabs
    tabBgColor: '#F8F8F8',
    tabFontSize: 15,
    tabTextColor: '#222222',


    // text
    textColor: '#000',
    inverseTextColor: '#fff',
    textBgColor: 'transparent',


    // title
    titleFontSize: (Platform.OS === 'ios' ) ? 17 : 19,
    subTitleFontSize: (Platform.OS === 'ios' ) ? 12 : 14,
    subtitleColor: '#8e8e93',


    // other
    borderRadiusBase: (Platform.OS === 'ios' ) ? 5 : 2,
    borderWidth: 1,
    contentPadding: 10,

    get darkenHeader() {
        return Color(this.tabBgColor).darken(0.03).hexString();
    },

    dropdownBg: '#000',
    dropdownLinkColor: '#414142',
    inputLineHeight: 24,
    jumbotronBg: '#C9C9CE',
    jumbotronPadding: 30
}
