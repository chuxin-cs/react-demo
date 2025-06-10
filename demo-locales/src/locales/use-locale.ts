import { useTranslation } from 'react-i18next';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

// 定义类型
export enum LocalEnum {
  en_US = 'en_US',
  zh_CN = 'zh_CN',
}
type Locale = keyof typeof LocalEnum;

export const useLocale = () => {
  const { i18n } = useTranslation();
  const locale = (i18n.resolvedLanguage || LocalEnum.en_US) as Locale;

  const setLocale = (locale: Locale) => {
    i18n.changeLanguage(locale);
    dayjs.locale(locale);
  };

  return {
    locale,
    setLocale,
  };
};

export default useLocale;
