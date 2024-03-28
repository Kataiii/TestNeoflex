import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import styles from "./App.module.css";
import { Context, PortalScrollContext } from '.';
import { observer } from 'mobx-react-lite';

const App: React.FC = observer(() => {

	return (
			<div className={styles.App}>
				<Header />
				<div>
					<Outlet />
				</div>
				<Footer />
			</div>
	);
})

export default App;
