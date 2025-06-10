import { style } from '@vanilla-extract/css';

export const containerStyle = style({
  padding: 20,
  backgroundColor: '#fff',
  vars: {
    '--primary-color': '#007bff',
  },
});

export const buttonStyle = style([
  containerStyle, // 继承样式
  {
    color: 'white',
    backgroundColor: 'var(--primary-color)',
    ':hover': {
      opacity: 0.8,
    },
  },
]);

import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
});
