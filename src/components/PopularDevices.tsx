import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { deviceModels } from "@/data/devices";

const popular = deviceModels.filter(d => d.category === "phones").slice(0, 8);

const PopularDevices = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Top Selling Phones
          </h2>
          <Link to="/sell/phones" className="text-primary font-medium text-sm flex items-center gap-1 hover:underline">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {popular.map((device, i) => (
            <motion.div
              key={device.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/sell/phones/${device.brandId}/${device.id}`}
                className="group block p-4 rounded-xl border bg-card hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-muted rounded-lg flex items-center justify-center text-2xl">
                  📱
                </div>
                <h3 className="text-sm font-semibold text-foreground text-center mb-1 group-hover:text-primary transition-colors">
                  {device.name}
                </h3>
                <p className="text-xs text-muted-foreground text-center">
                  Get upto <span className="text-primary font-semibold">₹{device.basePrice.toLocaleString("en-IN")}</span>
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDevices;
