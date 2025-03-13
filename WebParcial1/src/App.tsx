import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './pages/Form';
import Home from './pages/Home';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient;
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form></Form>}></Route>
          <Route path="/form" element={<Form></Form>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </QueryClientProvider>
  )
}

export default App
