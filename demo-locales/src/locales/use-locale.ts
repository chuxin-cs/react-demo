import { useTranslation } from 'react-i18next';
// types
import { LocalEnum } from './type';

// 定义类型
type Locale = keyof typeof LocalEnum;

export const useLocale = () => {
  const { i18n } = useTranslation();

  const locale = i18n.resolvedLanguage as Locale;

  const setLocale = (locale: Locale) => {
    i18n.changeLanguage(locale);
  };

  return {
    locale,
    setLocale,
  };
};

export default useLocale;
