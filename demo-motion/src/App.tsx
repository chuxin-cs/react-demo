import './app.css';
import { useState } from 'react';
import { motion } from 'motion/react';

function Rotate() {
  return (
    <motion.div
      className={'box'}
      animate={{ rotate: 360 }}
      transition={{ duration: 5 }}
    />
  );
}

function App() {
  return (
    <>
      <h1>react motion</h1>

      {/* 360度旋转 */}
      <Rotate />
    </>
  );
}

export default App;
