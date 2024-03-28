import { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import CartStore from './store/cartStore';
import CatalogStore from './store/catalogStore';
import Router from './routing/router';

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

export const PortalScrollContext = createContext<boolean>(false);

root.render(
	<Context.Provider value={{ cartStore, catalogStore }}>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</Context.Provider>
);
