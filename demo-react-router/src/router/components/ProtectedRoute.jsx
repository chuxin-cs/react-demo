import { Navigate } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import PageError from '@/pages/sys/error/PageError';

const ProtectedRoute = ({ children }) => {
  // TODO: 鉴权逻辑，当前演示是从本地存储中获取token
  const token = localStorage.getItem('token') || true;
  if (!token) {
    return <Navigate to='/login' replace />; // 如果没有token，跳转到登录页面
  }
  return (
    <ErrorBoundary FallbackComponent={PageError}>{children}</ErrorBoundary>
  );
};

export default ProtectedRoute;
