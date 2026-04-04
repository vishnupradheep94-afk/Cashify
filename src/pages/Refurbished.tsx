import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Package, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { refurbishedCategories, refurbishedItems } from "@/data/refurbished";

const Refurbished = () => {
  const featured = refurbishedItems.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero-gradient py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4"
          >
            Certified Refurbished Devices
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Save big on premium devices. All refurbished products come with warranty and quality assurance.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">
          {[
            { icon: ShieldCheck, label: "Quality Checked" },
            { icon: Package, label: "Free Delivery" },
            { icon: Award, label: "Warranty Included" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-muted-foreground">
              <Icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {refurbishedCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/refurbished/${cat.id}`}
                  className="group flex flex-col items-center p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <span className="text-4xl mb-3">{cat.icon}</span>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{cat.name}</span>
                  <span className="text-xs text-muted-foreground mt-1">{cat.count} products</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 surface-warm">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-muted flex items-center justify-center text-5xl">
                  {item.category === "phones" ? "📱" : item.category === "laptops" ? "💻" : item.category === "tablets" ? "📟" : "⌚"}
                </div>
                <div className="p-4">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground font-medium">{item.condition}</span>
                  <h3 className="font-semibold text-foreground mt-2">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">{item.brand}</p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-lg font-bold text-primary">₹{item.refurbishedPrice.toLocaleString("en-IN")}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice.toLocaleString("en-IN")}</span>
                  </div>
                  <p className="text-xs text-success mt-1">
                    Save ₹{(item.originalPrice - item.refurbishedPrice).toLocaleString("en-IN")} ({Math.round((1 - item.refurbishedPrice / item.originalPrice) * 100)}% off)
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {item.specs.map(s => (
                      <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Refurbished;
