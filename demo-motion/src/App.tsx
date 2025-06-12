import './app.css';
import { useState } from 'react';
import { motion } from 'motion/react';

function Rotate() {
  return (
    <motion.div
      className={'box'}
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{ duration: 1 }}
    />
  );
}

export default function App() {
  return (
    <>
      <Rotate />
    </>
  );
}
