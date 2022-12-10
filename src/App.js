import { Route, Routes, Outlet } from 'react-router-dom';
import Home from './routes/home';

const Shop = () => {
  return <h1>Hello from Shop</h1>
};

const Navigation = () => {
  return (
  <div>
    <h1> Navigation bar here</h1>
    <Outlet />
  </div>
  )

};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      
      </Route>
      {/* <Outlet>

      </Outlet> */}
    </Routes>
  );
}

export default App;
