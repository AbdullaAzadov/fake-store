import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./ui/Header/Header";
import ProductList from "./pages/ProductList/ProductList";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
