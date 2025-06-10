import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

// 使用动态导入实现懒加载
const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));

export default function RouterDomDemo() {
  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/about' element={<div>about</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
