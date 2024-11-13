import HomePage from "./pages/HomePage";
import ShopePage from "./pages/ShopPage";

const routes = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: 'shop',
        element: <ShopePage/>
    }
];

export default routes;