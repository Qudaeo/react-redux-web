import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path={'/'} element={<div>Hello world!</div>} />
      <Route path={'/signup'} element={<div>sign up</div>} />
      <Route path={'/login'} element={<div>login</div>} />
      <Route path={'/products'} element={<div>products</div>} />
      <Route path={'/*'} element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
