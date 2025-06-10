import './App.css';
import globalStyle from './global.module.css';

function App() {
  return (
    <div>
      <div className={'css_style'}>1</div>
      <div className={globalStyle.flex}>2</div>
    </div>
  );
}

export default App;
