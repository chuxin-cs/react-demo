import { useState } from 'react';
import { t } from './locales/i18n';
import { useLocale } from './locales/use-locale';

function App() {
  const { setLocale } = useLocale();

  return (
    <div>
      <div>
        <button onClick={() => setLocale('zh_CN')}>中文</button>
        <button onClick={() => setLocale('en_US')}>english</button>
      </div>

      <h1>{t('system.api.title')}</h1>
    </div>
  );
}

export default App;
