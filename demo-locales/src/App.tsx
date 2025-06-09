import { useState } from 'react';
import { t } from './locales/i18n';

function App() {
  return (
    <div>
      <div>
        <button onClick={() => {}}>中文</button>
        <button onCLick={() => {}}>english</button>
      </div>

      <h1>{t('system.api.title')}</h1>
    </div>
  );
}

export default App;
