import HomePage from "./pages/HomePage";
import ShopePage from "./pages/ShopPage";
import CagePage from "./pages/CartPage";

const routes = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: 'shop',
        element: <ShopePage/>
    },
    {
        path: 'cage',
        element: <CagePage/>
    }
];

export default routes;