import HomePage from "../pages/Home";
import NotFound from "../pages/404";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Cart from "../pages/Cart";

const routes = [
  { name: 'Home Page', path: '/', component: HomePage },
  { name: 'Not Found', path: '/not-found', component: NotFound },
  { name: 'Products', path: '/products', component: Products },
  { name: 'Carts', path: '/cart', component: Cart },
]

export const MainRoute = () => {

    return(
        <Routes>
        {routes.map((route) => 
           <Route path={route.path}  element={<route.component/>}/>
        )}
      </Routes>
    )
    
}