import { motion } from "framer-motion";
import { Smartphone, IndianRupee, Truck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Select Device",
    description: "Choose your device brand, model and tell us about its condition",
  },
  {
    icon: IndianRupee,
    title: "Get Best Price",
    description: "Get an instant price quote based on your device's condition",
  },
  {
    icon: Truck,
    title: "Schedule Pickup",
    description: "Book a free doorstep pickup at your preferred date & time",
  },
  {
    icon: CheckCircle2,
    title: "Get Paid Instantly",
    description: "Get paid via UPI, bank transfer or cash on the spot",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-16 surface-warm">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
          How It Works
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Sell your gadget in 4 simple steps
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute top-8 left-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
