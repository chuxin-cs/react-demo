import { useTranslation } from 'react-i18next';
// types
import { LocalEnum } from './type.ts';

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";

import en_US from "antd/locale/en_US";
import zh_CN from "antd/locale/zh_CN";

// 定义类型
type Locale = keyof typeof LocalEnum;

// 第一版
// export const useLocale = () => {
//   const { i18n } = useTranslation();

//   const locale = i18n.resolvedLanguage as Locale;

//   const setLocale = (locale: Locale) => {
//     i18n.changeLanguage(locale);
//   };

//   return {
//     locale,
//     setLocale,
//   };
// };
type Language = {
  locale: keyof typeof LocalEnum;
  icon: string;
  label: string;
  antdLocal: AntdLocal;
};

// 提供给到时候select切换的时候用的
export const LANGUAGE_MAP: Record<Locale, Language> = {
  [LocalEnum.zh_CN]: {
    locale: LocalEnum.zh_CN,
    label: 'Chinese',
    icon: 'ic-locale_zh_CN',
    antdLocal: zh_CN,
  },
  [LocalEnum.en_US]: {
    locale: LocalEnum.en_US,
    label: 'English',
    icon: 'ic-locale_en_US',
    antdLocal: en_US,
  },
};

export const useLocale = () => {
  const { i18n } = useTranslation();

  const locale = (i18n.resolvedLanguage || LocalEnum.en_US) as Locale;
  const language = LANGUAGE_MAP[locale];

  const setLocale = (locale: Locale) => {
    i18n.changeLanguage(locale);
    document.documentElement.lang = locale;
    dayjs.locale(locale);
  };

  return {
    locale,
    language,
    setLocale,
  };
};

export default useLocale;
