import { Router, Routes, Route } from "react-router-dom";
import OrderDeatils from "./pages/OrderDeatils";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
      <Routes>
        <Route path="/order" element={<OrderPage/>}/>
        <Route path="/order/:id" element={<OrderDeatils/>}/>
      </Routes>
  );
}

export default App;
