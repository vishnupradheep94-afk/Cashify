import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Filter, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getRefurbishedByCategory } from "@/data/refurbished";

const conditionFilters = ["All", "Excellent", "Good", "Fair"];
const sortOptions = ["Price: Low to High", "Price: High to Low", "Discount"];

const RefurbishedCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [conditionFilter, setConditionFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Price: Low to High");
  const navigate = useNavigate();

  const items = getRefurbishedByCategory(categoryId || "phones");
  const categoryName = categoryId === "phones" ? "Phones" : categoryId === "laptops" ? "Laptops" : categoryId === "tablets" ? "Tablets" : "Watches";

  let filtered = conditionFilter === "All" ? items : items.filter(i => i.condition === conditionFilter);

  if (sortBy === "Price: Low to High") filtered = [...filtered].sort((a, b) => a.refurbishedPrice - b.refurbishedPrice);
  else if (sortBy === "Price: High to Low") filtered = [...filtered].sort((a, b) => b.refurbishedPrice - a.refurbishedPrice);
  else filtered = [...filtered].sort((a, b) => (b.originalPrice - b.refurbishedPrice) - (a.originalPrice - a.refurbishedPrice));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link to="/refurbished" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Refurbished
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Refurbished {categoryName}
        </h1>
        <p className="text-muted-foreground mb-6">{filtered.length} products available</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Condition:</span>
            {conditionFilters.map(c => (
              <button
                key={c}
                onClick={() => setConditionFilter(c)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  conditionFilter === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value)}
            className="text-sm border rounded-lg px-3 py-1.5 bg-card text-foreground"
          >
            {sortOptions.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="h-40 bg-muted flex items-center justify-center text-5xl">
                {categoryId === "phones" ? "📱" : categoryId === "laptops" ? "💻" : categoryId === "tablets" ? "📟" : "⌚"}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    item.condition === "Excellent" ? "bg-green-100 text-green-700" :
                    item.condition === "Good" ? "bg-blue-100 text-blue-700" :
                    "bg-orange-100 text-orange-700"
                  }`}>{item.condition}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <ShieldCheck className="h-3 w-3" />
                    {item.warranty}
                  </div>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</h3>
                <p className="text-xs text-muted-foreground">{item.brand}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-lg font-bold text-primary">₹{item.refurbishedPrice.toLocaleString("en-IN")}</span>
                  <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice.toLocaleString("en-IN")}</span>
                </div>
                <p className="text-xs text-success mt-1">
                  {Math.round((1 - item.refurbishedPrice / item.originalPrice) * 100)}% off
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.specs.map(s => (
                    <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{s}</span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  {item.stock > 5 ? `${item.stock} in stock` : item.stock > 0 ? `Only ${item.stock} left!` : "Out of stock"}
                </p>
                <Button className="w-full mt-3 bg-primary text-primary-foreground hover:bg-primary/90" size="sm" disabled={item.stock === 0}>
                  {item.stock > 0 ? "Buy Now" : "Out of Stock"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">No products match your filters.</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default RefurbishedCategory;
