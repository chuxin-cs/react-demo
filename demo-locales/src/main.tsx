import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// i18n 国际化
import "./locales/i18n";

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
