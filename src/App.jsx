import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./ui/Header/Header";
import ProductList from "./pages/ProductList/ProductList";
import NotFound from "./ui/NotFound/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Navigate to="/products" />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
