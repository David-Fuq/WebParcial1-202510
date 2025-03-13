import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Menu from './pages/Menu';
import Stores from './pages/Stores';
import Cart from './pages/Cart';

const queryClient = new QueryClient;
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/menu" element={<Menu></Menu>}></Route>
          <Route path="/stores" element={<Stores></Stores>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </QueryClientProvider>
  )
}

export default App
