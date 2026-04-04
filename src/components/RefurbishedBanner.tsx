import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Smartphone, Laptop, Tablet, Watch } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "phones", label: "Phones", icon: Smartphone, emoji: "📱" },
  { id: "laptops", label: "Laptops", icon: Laptop, emoji: "💻" },
  { id: "tablets", label: "Tablets", icon: Tablet, emoji: "📟" },
  { id: "watches", label: "Watches", icon: Watch, emoji: "⌚" },
];

const RefurbishedBanner = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/30 to-primary/5 border border-primary/20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="relative p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <ShieldCheck className="h-4 w-4" />
                  Certified & Warranty Included
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Buy Refurbished. Save Big.
                </h2>
                <p className="text-muted-foreground max-w-lg">
                  Get certified pre-owned devices at up to 60% off with warranty, quality checks, and free returns.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  {categories.map((cat) => (
                    <Link key={cat.id} to={`/refurbished/${cat.id}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border hover:border-primary/50 hover:shadow-md transition-all cursor-pointer"
                      >
                        <span className="text-lg">{cat.emoji}</span>
                        <span className="text-sm font-medium text-foreground">{cat.label}</span>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/refurbished">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  Browse All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RefurbishedBanner;
