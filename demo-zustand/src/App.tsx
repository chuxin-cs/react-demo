// import { baseStore } from './store/baseStore';
// import { middlewareStore } from './store/persistMiddlewareStore';
import { middlewareStore } from './store/devtoolsMiddlewareStore';

function App() {
  const { count } = middlewareStore();
  const inc = middlewareStore((state) => state.inc);
  const dec = middlewareStore((state) => state.dec);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  );
}

export default App;
