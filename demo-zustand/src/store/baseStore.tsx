import { create } from 'zustand';

function base(set) {
  console.log("base")
  return {
    count: 0,
    inc: () => set((state) => ({ count: state.count + 1 })),
    dec: () => set((state) => ({ count: state.count - 1 })),
  };
}
export const baseStore = create(base);
export default baseStore;
