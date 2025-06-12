import { create } from 'zustand';
import { persist } from 'zustand/middleware';

function middleware(set) {
  console.log('persist middleware');
  return {
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 })),
  };
}
export const middlewareStore = create(
  persist(middleware, {
    name: 'chuxin', // localStorage key
    getStorage: () => localStorage, // 或 sessionStorage
  })
);
export default middlewareStore;
