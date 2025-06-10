import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path='/' element={<div>home</div>} />
          <Route path='/about' element={<div>about</div>} />
        </Routes>
      </Suspense>
    </Router>
  );
}
