import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import AppRoutes from './components/Routes/Routes';

const App = () => (
  <BrowserRouter>
    <Header />
    <AppRoutes />
  </BrowserRouter>
);

export default App;
