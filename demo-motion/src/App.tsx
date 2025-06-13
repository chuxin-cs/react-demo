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
function EnterAnimation() {
  return (
    <motion.div
      className='box'
      // 初始状态：元素完全透明且缩小为0
      initial={{ opacity: 0, scale: 0 }}
      // 动画目标状态：元素变为完全不透明且恢复正常大小
      animate={{ opacity: 1, scale: 1 }}
      // 动画过渡配置
      transition={{
        // 整体动画持续时间为1秒
        duration: 1,
        // 缩放动画使用弹簧效果
        scale: {
          type: 'spring', // 动画类型：弹簧物理效果
          visualDuration: 1, // 视觉上的动画持续时间
          bounce: 0.5, // 弹跳系数：控制回弹效果的强度
        },
      }}
    ></motion.div>
  );
}
function Gestures() {
  return (
    <motion.div
      className='box'
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      onHoverStart={() => console.log('hover started!')}
    ></motion.div>
  );
}

export default function App() {
  return (
    <>
      <RotateAndScale />
      <EnterAnimation />
      <Gestures />
    </>
  );
}
