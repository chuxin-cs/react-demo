import { baseStore } from './store/baseStore';

function App() {
  const count = baseStore((state) => state.count);
  const inc = baseStore((state) => state.inc);
  const dec = baseStore((state) => state.dec);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </>
  );
}

export default App;
