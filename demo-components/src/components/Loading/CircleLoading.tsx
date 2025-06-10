import React from 'react';
import { Spin } from 'antd';

export const CircleLoading: React.RC = () => {
  return (
    <div>
      <Spin size='large' />
    </div>
  );
};

export default CircleLoading;
