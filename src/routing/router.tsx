import { createBrowserRouter, createRoutesFromElements, Route, Routes, useLocation } from "react-router-dom";
import App from "../App";
import EndPayModal from "../components/EndPayModal";
import ModalCartItem from "../components/ModalCartItem";
import Portal from "../components/Portal";
import CatalogPage from "../pages/CatalogPage";
import ContactsPage from "../pages/ContactsPage";
import ErrorPage from "../pages/ErrorPage";
import FavouritesPage from "../pages/FavouritesPage";
import PaymentPage from "../pages/PaymentPage";
import ShopCartPage from "../pages/ShopCartPage";
import { CART_PATH, CONTACTS_PATH, END_PAYMENT_PATH, FAVOURITES_PATH, HOME_PATH, ITEM_DETAILS, PAYMENT_PATH } from "../utils/constants";

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
                    <Route path={PAYMENT_PATH} element={<PaymentPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
            </Routes>

            {
                previousLocation && (
                    <Routes>
                        <Route path={`${ITEM_DETAILS}/:id`} element={<Portal children={<ModalCartItem/>}/>} />
                        <Route path={END_PAYMENT_PATH} element={<Portal children={<EndPayModal/>}/>}/>
                    </Routes>
                )
            }
        </>
    )
}

export default Router;