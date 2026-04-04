import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBrandsForCategory, categories } from "@/data/devices";

const SellCategory = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = categories.find(c => c.id === categoryId);
  const categoryBrands = getBrandsForCategory(categoryId || "phones");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {category?.name || "Sell Device"}
        </h1>
        <p className="text-muted-foreground mb-8">Select your brand to get started</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categoryBrands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/sell/${categoryId}/${brand.id}`}
                className="group flex flex-col items-center p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <span className="text-4xl mb-3">{brand.logo}</span>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {brand.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellCategory;
