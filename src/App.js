import { Route, Routes } from 'react-router-dom';
import Home from './routes/home';
import Navigation from './routes/navigation';
import SignIn from './routes/sign-in';

const Shop = () => {
  return <h1>Hello from Shop</h1>
};


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signIn' element={<SignIn />} />
      
      </Route>
      {/* <Outlet>

      </Outlet> */}
    </Routes>
  );
}

export default App;
