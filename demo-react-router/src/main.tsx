import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const root = createRoot(document.getElementById('root')!);
root.render(
  <>
    <h1>React Router</h1>
    <App />
  </>
);
