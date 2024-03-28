import { createBrowserRouter, createRoutesFromElements, Route, Routes, useLocation } from "react-router-dom";
import App from "../App";
import ModalCartItem from "../components/ModalCartItem";
import Portal from "../components/Portal";
import CatalogPage from "../pages/CatalogPage";
import ContactsPage from "../pages/ContactsPage";
import ErrorPage from "../pages/ErrorPage";
import FavouritesPage from "../pages/FavouritesPage";
import ShopCartPage from "../pages/ShopCartPage";
import { CART_PATH, CONTACTS_PATH, FAVOURITES_PATH, HOME_PATH, ITEM_DETAILS } from "../utils/constants";

const Router: React.FC = () => {
    const location = useLocation();
    const previousLocation = location.state?.previousLocation;

    return(
        <>
            <Routes location={previousLocation || location}>
                <Route path={HOME_PATH} element={<App/>}>
                    <Route path={HOME_PATH} element={<CatalogPage/>}/>
                    <Route path={CART_PATH} element={<ShopCartPage/>}/>
                    <Route path={FAVOURITES_PATH} element={<FavouritesPage/>}/>
                    <Route path={CONTACTS_PATH} element={<ContactsPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>

            {
                previousLocation && (
                    <Routes>
                        <Route path={`${ITEM_DETAILS}/:id`} element={<Portal children={<ModalCartItem/>}/>} />
                    </Routes>
                )
            }
        </>
    )
}

export default Router;