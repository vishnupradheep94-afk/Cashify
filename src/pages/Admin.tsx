import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Package, ShoppingCart, Users, TrendingUp, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { refurbishedItems } from "@/data/refurbished";

// Mock orders data (will come from MongoDB later)
const mockOrders = [
  { id: "ORD-001", device: "iPhone 15 Pro", customer: "Rahul Sharma", price: 45000, status: "Completed", date: "2026-04-03", type: "sell" },
  { id: "ORD-002", device: "MacBook Air M3", customer: "Priya Singh", price: 55000, status: "Pickup Scheduled", date: "2026-04-03", type: "sell" },
  { id: "ORD-003", device: "Galaxy S24 Ultra", customer: "Amit Patel", price: 52000, status: "Completed", date: "2026-04-02", type: "sell" },
  { id: "ORD-004", device: "iPad Pro M2 (Refurbished)", customer: "Neha Gupta", price: 69999, status: "Delivered", date: "2026-04-02", type: "buy" },
  { id: "ORD-005", device: "iPhone 14 (Refurbished)", customer: "Vikram Mehta", price: 46999, status: "Shipped", date: "2026-04-01", type: "buy" },
  { id: "ORD-006", device: "OnePlus 12", customer: "Deepak Kumar", price: 28000, status: "Pending", date: "2026-04-04", type: "sell" },
  { id: "ORD-007", device: "Dell XPS 13 (Refurbished)", customer: "Sneha Roy", price: 59999, status: "Processing", date: "2026-04-04", type: "buy" },
  { id: "ORD-008", device: "Apple Watch Ultra 2", customer: "Karan Joshi", price: 32000, status: "Completed", date: "2026-04-01", type: "sell" },
];

const Admin = () => {
  const { user, isAdmin, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<"orders" | "stock">("orders");
  const [orderFilter, setOrderFilter] = useState<"all" | "sell" | "buy">("all");

  if (loading) return <div className="min-h-screen flex items-center justify-center text-muted-foreground">Loading...</div>;
  if (!user || !isAdmin) return <Navigate to="/login" replace />;

  const filteredOrders = orderFilter === "all" ? mockOrders : mockOrders.filter(o => o.type === orderFilter);
  const totalRevenue = mockOrders.reduce((sum, o) => sum + o.price, 0);
  const completedOrders = mockOrders.filter(o => o.status === "Completed" || o.status === "Delivered").length;
  const lowStockItems = refurbishedItems.filter(i => i.stock <= 5);
  const totalStock = refurbishedItems.reduce((sum, i) => sum + i.stock, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Orders", value: mockOrders.length, icon: ShoppingCart, color: "text-primary" },
            { label: "Revenue", value: `₹${(totalRevenue / 100000).toFixed(1)}L`, icon: TrendingUp, color: "text-success" },
            { label: "Completed", value: completedOrders, icon: BarChart3, color: "text-blue-500" },
            { label: "Total Stock", value: totalStock, icon: Package, color: "text-warning" },
          ].map(({ label, value, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl border bg-card"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">{label}</span>
                <Icon className={`h-5 w-5 ${color}`} />
              </div>
              <span className="text-2xl font-bold text-foreground">{value}</span>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {(["orders", "stock"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                activeTab === tab ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {tab === "orders" ? "Orders" : "Refurbished Stock"}
            </button>
          ))}
        </div>

        {activeTab === "orders" && (
          <div>
            <div className="flex gap-2 mb-4">
              {(["all", "sell", "buy"] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setOrderFilter(f)}
                  className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition-colors ${
                    orderFilter === f ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {f === "all" ? "All" : f === "sell" ? "Sell Orders" : "Buy Orders"}
                </button>
              ))}
            </div>

            <div className="rounded-xl border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-3 font-medium text-muted-foreground">Order ID</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Device</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Customer</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Amount</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Type</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map(order => (
                      <tr key={order.id} className="border-b last:border-0 hover:bg-muted/30">
                        <td className="p-3 font-mono text-xs">{order.id}</td>
                        <td className="p-3 font-medium text-foreground">{order.device}</td>
                        <td className="p-3 text-muted-foreground">{order.customer}</td>
                        <td className="p-3 font-semibold text-foreground">₹{order.price.toLocaleString("en-IN")}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            order.type === "sell" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                          }`}>{order.type === "sell" ? "Sell" : "Buy"}</span>
                        </td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            order.status === "Completed" || order.status === "Delivered" ? "bg-green-100 text-green-700" :
                            order.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                            "bg-blue-100 text-blue-700"
                          }`}>{order.status}</span>
                        </td>
                        <td className="p-3 text-muted-foreground">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "stock" && (
          <div>
            {lowStockItems.length > 0 && (
              <div className="mb-6 p-4 rounded-xl border border-warning/30 bg-warning/5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  <span className="font-semibold text-foreground">Low Stock Alert</span>
                </div>
                <p className="text-sm text-muted-foreground">{lowStockItems.length} items have 5 or fewer units remaining.</p>
              </div>
            )}

            <div className="rounded-xl border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-3 font-medium text-muted-foreground">Product</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Brand</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Category</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Condition</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Price</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Stock</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {refurbishedItems.map(item => (
                      <tr key={item.id} className="border-b last:border-0 hover:bg-muted/30">
                        <td className="p-3 font-medium text-foreground">{item.name}</td>
                        <td className="p-3 text-muted-foreground">{item.brand}</td>
                        <td className="p-3 capitalize text-muted-foreground">{item.category}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            item.condition === "Excellent" ? "bg-green-100 text-green-700" :
                            item.condition === "Good" ? "bg-blue-100 text-blue-700" :
                            "bg-orange-100 text-orange-700"
                          }`}>{item.condition}</span>
                        </td>
                        <td className="p-3 font-semibold text-foreground">₹{item.refurbishedPrice.toLocaleString("en-IN")}</td>
                        <td className="p-3 font-semibold text-foreground">{item.stock}</td>
                        <td className="p-3">
                          {item.stock === 0 ? (
                            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">Out of Stock</span>
                          ) : item.stock <= 5 ? (
                            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">Low Stock</span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">In Stock</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
