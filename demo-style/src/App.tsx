import './App.css';
import globalStyle from './global.module.css';

import styled from 'styled-components';
interface StyleButtonProps {
  $bg?: boolean;
}
//                  styled.* 范围（html元素，或者组件）
const StyleButton = styled.button<StyleButtonProps>`
  color: #fff;
  border: 0;
  background: ${(props) => (props.$bg ? '#000' : '#666')};
`;

// shouldForwardProp
interface StyleButtonProps1 {
  bg?: boolean;
}
const StyleButtonWithConfig = styled.button.withConfig({
  shouldForwardProp: (prop) => !['bg'].includes(prop), // 过滤 bg 属性
})<StyleButtonProps1>`
  color: #fff;
  border: 0;
  background: ${(props) => (props.bg ? '#000' : '#666')};
`;

import { containerStyle, buttonStyle } from './styles.css.ts';

import clsx from 'clsx';

function App() {
  const mergeClassName = clsx({
    btn: true,
    'btn-active': true,
    'btn-error': true,
  });

  // css module 和 clsx 结合
  const mergeClassNameModule = clsx(mergeClassName, {
    // global.module.css 中的 flex 编译成 _btn_wyasb_1 这种hash规则 这是 module.css 自带的功能
    [globalStyle.flex]: true,
  });

  return (
    <div>
      <div className={'css_style'}>1</div>
      <div className={globalStyle.flex}>2</div>

      {/* styled-components */}
      {/* 这里直接绑定 bg 会被渲染到 button dom 上 但是button没有这个属性 react会抛出警告 Warning: Received `true` for a non-boolean attribute `bg` */}
      <StyleButton $bg={true}>3</StyleButton>
      <StyleButtonWithConfig bg={true}>4</StyleButtonWithConfig>

      {/* @vanilla-extract */}
      <div className={containerStyle}>
        <button className={buttonStyle}>点击我</button>
      </div>

      {/* clsx */}
      <div className={mergeClassName}>5</div>
      <div className={mergeClassNameModule}>6</div>
    </div>
  );
}

export default App;
