import { motion } from "framer-motion";
import { Shield, Zap, Banknote, Recycle, HeadphonesIcon, TruckIcon } from "lucide-react";

const features = [
  { icon: Banknote, title: "Best Price Guaranteed", desc: "We offer the highest resale value in the market" },
  { icon: Zap, title: "Instant Payment", desc: "Get paid immediately via UPI, bank transfer or cash" },
  { icon: TruckIcon, title: "Free Doorstep Pickup", desc: "Schedule a free pickup at your convenience" },
  { icon: Shield, title: "Safe & Secure", desc: "Your data is completely wiped before resale" },
  { icon: Recycle, title: "Eco-Friendly", desc: "Help reduce e-waste by recycling your old devices" },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Our support team is always here to help you" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 surface-cool">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
          Why Choose Cashify?
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Trusted by over 50 lakh customers across India
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 p-5 rounded-xl bg-card border hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
