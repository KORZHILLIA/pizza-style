import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const PizzaPage = lazy(() => import("./pages/PizzaPage"));
const CartPage = lazy(() => import("./pages/CartPage"));

const GeneralRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<PizzaPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Suspense>
  );
};

export default GeneralRoutes;
