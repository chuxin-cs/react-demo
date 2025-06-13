import './app.css';
import { motion } from 'motion/react';

function RotateAndScale() {
  return (
    <motion.div
      className='box'
      // 初始状态：组件渲染时的起始样式
      initial={{ scale: 0 }}
      // 动画目标状态：实现360度旋转并从小变大的效果
      animate={{ rotate: 360, scale: 1 }}
      // 动画配置：设置动画持续时间为2秒
      transition={{ duration: 2 }}
    />
  );
}

export default function App() {
  return (
    <>
      <RotateAndScale />
    </>
  );
}
