import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routing/router';
import CartStore from './store/cartStore';
import CatalogStore from './store/catalogStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const cartStore = new CartStore();
export const catalogStore = new CatalogStore();

interface State {
  cartStore: CartStore,
  catalogStore: CatalogStore
}

export const Context = createContext<State>({
  cartStore,
  catalogStore
});

root.render(
  <Context.Provider value={{cartStore, catalogStore}}>
    <RouterProvider router={router}></RouterProvider>
  </Context.Provider>
);
