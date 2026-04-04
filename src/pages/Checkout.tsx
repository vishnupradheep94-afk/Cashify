import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Clock, CreditCard, Banknote, Smartphone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { deviceModels } from "@/data/devices";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const deviceId = searchParams.get("device");
  const price = searchParams.get("price");
  const device = deviceModels.find(d => d.id === deviceId);
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
    date: "",
    time: "10:00",
    upiId: "",
    bankAccount: "",
    ifsc: "",
  });

  const updateForm = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 max-w-lg text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <CheckCircle2 className="h-24 w-24 text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-foreground mb-2">Order Placed!</h1>
            <p className="text-muted-foreground mb-6">
              Your pickup has been scheduled. We'll contact you shortly to confirm.
            </p>
            <div className="p-4 rounded-xl bg-muted mb-6">
              <p className="text-sm text-muted-foreground">Order Amount</p>
              <p className="text-3xl font-bold text-primary">₹{Number(price).toLocaleString("en-IN")}</p>
            </div>
            <Link to="/">
              <Button className="bg-primary text-primary-foreground">Back to Home</Button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-6">Complete Your Sale</h1>

        {/* Order summary card */}
        <div className="p-4 rounded-xl border bg-card mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
              <Smartphone className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <p className="font-semibold text-foreground">{device?.name || "Device"}</p>
              <p className="text-xs text-muted-foreground">Selling price</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-primary">₹{Number(price).toLocaleString("en-IN")}</p>
        </div>

        {/* Steps */}
        <div className="flex gap-2 mb-8">
          {["Details", "Pickup", "Payment"].map((s, i) => (
            <button
              key={s}
              onClick={() => setStep(i + 1)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                step === i + 1 ? "bg-primary text-primary-foreground" : step > i + 1 ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={form.name} onChange={e => updateForm("name", e.target.value)} placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" value={form.phone} onChange={e => updateForm("phone", e.target.value)} placeholder="+91 99999 99999" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={form.email} onChange={e => updateForm("email", e.target.value)} placeholder="you@email.com" />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" value={form.address} onChange={e => updateForm("address", e.target.value)} placeholder="Street address" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" value={form.city} onChange={e => updateForm("city", e.target.value)} placeholder="City" />
              </div>
              <div>
                <Label htmlFor="pincode">Pincode</Label>
                <Input id="pincode" value={form.pincode} onChange={e => updateForm("pincode", e.target.value)} placeholder="110001" />
              </div>
            </div>
            <Button className="w-full bg-primary text-primary-foreground mt-4" onClick={() => setStep(2)}>
              Continue to Pickup
            </Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <div className="p-4 rounded-xl border bg-card flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground text-sm">Pickup Address</p>
                <p className="text-sm text-muted-foreground">
                  {form.address || "No address"}, {form.city} - {form.pincode}
                </p>
              </div>
            </div>
            <div>
              <Label htmlFor="date" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Pickup Date
              </Label>
              <Input id="date" type="date" value={form.date} onChange={e => updateForm("date", e.target.value)} />
            </div>
            <div>
              <Label htmlFor="time" className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Preferred Time
              </Label>
              <select
                id="time"
                value={form.time}
                onChange={e => updateForm("time", e.target.value)}
                className="w-full h-10 px-3 rounded-md border bg-background text-foreground text-sm"
              >
                <option value="10:00">10:00 AM - 12:00 PM</option>
                <option value="12:00">12:00 PM - 2:00 PM</option>
                <option value="14:00">2:00 PM - 4:00 PM</option>
                <option value="16:00">4:00 PM - 6:00 PM</option>
              </select>
            </div>
            <Button className="w-full bg-primary text-primary-foreground mt-4" onClick={() => setStep(3)}>
              Continue to Payment
            </Button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
            <p className="text-sm text-muted-foreground mb-2">How would you like to receive payment?</p>
            <div className="space-y-3">
              {[
                { id: "upi", label: "UPI Transfer", icon: CreditCard, desc: "Instant payment to your UPI ID" },
                { id: "bank", label: "Bank Transfer", icon: Banknote, desc: "NEFT/IMPS to your bank account" },
                { id: "cash", label: "Cash on Pickup", icon: Banknote, desc: "Get cash when agent picks up" },
              ].map((pm) => (
                <button
                  key={pm.id}
                  onClick={() => setPaymentMethod(pm.id)}
                  className={`w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4 ${
                    paymentMethod === pm.id ? "border-primary bg-primary/5" : "bg-card hover:border-primary/30"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <pm.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{pm.label}</p>
                    <p className="text-xs text-muted-foreground">{pm.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            {paymentMethod === "upi" && (
              <div>
                <Label htmlFor="upi">UPI ID</Label>
                <Input id="upi" value={form.upiId} onChange={e => updateForm("upiId", e.target.value)} placeholder="name@upi" />
              </div>
            )}

            {paymentMethod === "bank" && (
              <div className="space-y-3">
                <div>
                  <Label htmlFor="account">Account Number</Label>
                  <Input id="account" value={form.bankAccount} onChange={e => updateForm("bankAccount", e.target.value)} placeholder="Account number" />
                </div>
                <div>
                  <Label htmlFor="ifsc">IFSC Code</Label>
                  <Input id="ifsc" value={form.ifsc} onChange={e => updateForm("ifsc", e.target.value)} placeholder="IFSC code" />
                </div>
              </div>
            )}

            <Button
              className="w-full bg-primary text-primary-foreground mt-4"
              size="lg"
              onClick={() => setOrderPlaced(true)}
            >
              Confirm & Place Order
            </Button>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
