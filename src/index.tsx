import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routing/router';
import CartStore from './store/cartStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const cartStore = new CartStore();

interface State {
  cartStore: CartStore
}

export const Context = createContext<State>({
  cartStore
});

root.render(
  <Context.Provider value={{cartStore}}>
    <RouterProvider router={router}></RouterProvider>
  </Context.Provider>
);
