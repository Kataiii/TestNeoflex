import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CatalogPage from "../pages/CatalogPage";
import ErrorPage from "../pages/ErrorPage";
import FavouritesPage from "../pages/FavouritesPage";
import ShopCartPage from "../pages/ShopCartPage";

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
            {
                path: "/",
                element: <CatalogPage/>
            },
            {
                path: "/shop_cart",
                element: <ShopCartPage/>
            },
            {
                path: "/favourites",
                element: <FavouritesPage/>
            }
		]
	}
]);

export default router;