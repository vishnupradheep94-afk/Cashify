import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", city: "Mumbai", text: "Got ₹32,000 for my iPhone 13. The pickup was super smooth and payment was instant!", rating: 5 },
  { name: "Rahul Verma", city: "Delhi", text: "Sold my old MacBook Air in just 2 days. Best price compared to any other platform.", rating: 5 },
  { name: "Ananya Patel", city: "Bangalore", text: "Very professional service. They picked up my Samsung Galaxy from my doorstep and paid on the spot.", rating: 4 },
  { name: "Vikram Singh", city: "Hyderabad", text: "I've sold 3 phones through Cashify. Always the best rates and hassle-free experience.", rating: 5 },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
          What Our Customers Say
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Join millions of happy sellers
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl border bg-card"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`h-4 w-4 ${j < t.rating ? "fill-warning text-warning" : "text-muted"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.city}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
