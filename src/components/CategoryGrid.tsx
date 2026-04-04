import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import phoneImg from "@/assets/phone-icon.png";
import laptopImg from "@/assets/laptop-icon.png";
import tabletImg from "@/assets/tablet-icon.png";
import watchImg from "@/assets/watch-icon.png";
import consoleImg from "@/assets/console-icon.png";

const deviceCategories = [
  { id: "phones", name: "Sell Phone", image: phoneImg, path: "/sell/phones" },
  { id: "laptops", name: "Sell Laptop", image: laptopImg, path: "/sell/laptops" },
  { id: "tablets", name: "Sell Tablet", image: tabletImg, path: "/sell/tablets" },
  { id: "watches", name: "Sell Watch", image: watchImg, path: "/sell/watches" },
  { id: "consoles", name: "Sell Console", image: consoleImg, path: "/sell/consoles" },
];

const CategoryGrid = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Sell Your Old Device Now
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {deviceCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={cat.path}
                className="group flex flex-col items-center p-6 rounded-xl border bg-card hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-20 h-20 mb-3 flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    width={80}
                    height={80}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-sm font-semibold text-foreground">{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
