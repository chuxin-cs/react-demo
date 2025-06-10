import '@ant-design/v5-patch-for-react-19'; //React 19 兼容问题
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
