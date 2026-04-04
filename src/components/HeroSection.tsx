import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-devices.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4">
              Sell Your Old
              <br />
              Gadgets for
              <br />
              <span className="opacity-90">Instant Cash</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
              Get the best price for your used phones, laptops, tablets & more. 
              Free doorstep pickup across 200+ cities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/sell/phones">
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 font-semibold gap-2">
                  Sell Now
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/sell/phones">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Get Price Estimate
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <img
              src={heroImg}
              alt="Sell your old electronics for instant cash"
              width={1280}
              height={720}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-foreground/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-primary-foreground">
            {[
              { num: "50L+", label: "Devices Sold" },
              { num: "200+", label: "Cities Served" },
              { num: "₹2000Cr+", label: "Paid to Sellers" },
              { num: "4.5★", label: "User Rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl md:text-2xl font-bold">{s.num}</div>
                <div className="text-xs md:text-sm opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
