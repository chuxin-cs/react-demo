import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

function middleware(set) {
  console.log('devtools middleware');
  return {
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 })),
  };
}
export const middlewareStore = create(
  devtools(middleware, {
    name: 'DevTools_chuxin', // DevTools 中的显示名称
  })
);
export default middlewareStore;
