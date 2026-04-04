import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import SellCategory from "./pages/SellCategory";
import SelectModel from "./pages/SelectModel";
import DeviceCondition from "./pages/DeviceCondition";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Refurbished from "./pages/Refurbished";
import RefurbishedCategory from "./pages/RefurbishedCategory";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sell/:categoryId" element={<SellCategory />} />
            <Route path="/sell/:categoryId/:brandId" element={<SelectModel />} />
            <Route path="/sell/:categoryId/:brandId/:modelId" element={<DeviceCondition />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/refurbished" element={<Refurbished />} />
            <Route path="/refurbished/:categoryId" element={<RefurbishedCategory />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
