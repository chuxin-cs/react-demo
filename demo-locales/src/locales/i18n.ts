// 导入 i18next 库，用于实现国际化功能
import i18n from 'i18next';
// 导入 react-i18next 中的 initReactI18next，用于将 i18next 集成到 React 应用中
import { initReactI18next } from 'react-i18next';
// 导入 i18next-browser-languagedetector，用于自动检测用户的浏览器语言
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入英文翻译资源文件
import en_US from './lang/en_US';
// 导入中文翻译资源文件
import zh_CN from './lang/zh_CN';

// 配置 i18next 实例
i18n
  // 使用语言检测器自动检测用户的浏览器语言
  .use(LanguageDetector)
  // 将 i18next 集成到 React 应用中
  .use(initReactI18next)
  // 初始化 i18next 实例
  .init({
    // 开启调试模式，会在控制台输出调试信息
    debug: true,
    // 当检测不到用户语言时，使用的备用语言
    fallbackLng: 'zh_CN',
    // 插值配置，设置为 false 表示不转义插值的值
    interpolation: {
      escapeValue: false,
    },
    // 翻译资源配置，包含英文和中文的翻译资源
    resources: {
      en_US: { translation: en_US },
      zh_CN: { translation: zh_CN },
    },
  });

// 导出默认的 i18next 实例
export default i18n;
// 从 i18next 实例中解构导出 t 函数，用于在组件中进行翻译
export const { t } = i18n;
