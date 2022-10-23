import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../base/routes';
import Login from '../pages/Login/Login';
import Items from '../pages/Items/Items';

const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.Items} element={<Items />} />
    <Route path={AppRoute.SignUp} element={<Login type={'signup'} />} />
    <Route path={AppRoute.Login} element={<Login type={'login'} />} />
    <Route path={AppRoute.NotFound} element={<div>404</div>} />
  </Routes>
);

export default AppRoutes;
