import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getModelsForBrand, brands } from "@/data/devices";

const SelectModel = () => {
  const { categoryId, brandId } = useParams<{ categoryId: string; brandId: string }>();
  const brand = brands.find(b => b.id === brandId);
  const models = getModelsForBrand(brandId || "", categoryId || "");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link to={`/sell/${categoryId}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Brands
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Sell Your {brand?.name} Device
        </h1>
        <p className="text-muted-foreground mb-8">Select your model</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {models.map((model, i) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/sell/${categoryId}/${brandId}/${model.id}`}
                className="group block p-5 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-muted rounded-lg flex items-center justify-center text-2xl">
                  {categoryId === "phones" ? "📱" : categoryId === "laptops" ? "💻" : categoryId === "tablets" ? "📟" : categoryId === "watches" ? "⌚" : "🎮"}
                </div>
                <h3 className="text-sm font-semibold text-foreground text-center mb-1 group-hover:text-primary transition-colors">
                  {model.name}
                </h3>
                <p className="text-xs text-muted-foreground text-center">
                  Upto <span className="text-primary font-semibold">₹{model.basePrice.toLocaleString("en-IN")}</span>
                </p>
              </Link>
            </motion.div>
          ))}
          {models.length === 0 && (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No models found for this brand in this category.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectModel;
