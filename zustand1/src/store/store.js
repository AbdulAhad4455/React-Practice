import {create} from 'zustand'
const initialState={
    counter :0,
}
const useStore = create((set)=>({
    ...initialState,
    incrementCounter : ()=> set((state)=>({counter : state.counter +1})),

    decrementCounter : ()=> set((state)=>({counter : state.counter -1})),
   incresBy : ()=> set((state)=>({counter : state.counter +10})),
   decresBy : ()=> set((state)=>({counter : state.counter -10 })),
   reset : ()=> set(initialState),
   

}));
export default useStore;