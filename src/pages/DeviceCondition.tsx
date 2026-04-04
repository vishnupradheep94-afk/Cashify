import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, XCircle, Smartphone, Battery, Droplets, ScreenShare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { deviceModels, conditions } from "@/data/devices";

const questions = [
  {
    id: "screen",
    question: "How is the screen condition?",
    icon: ScreenShare,
    options: [
      { id: "perfect", label: "No scratches", multiplier: 1 },
      { id: "minor", label: "Minor scratches", multiplier: 0.95 },
      { id: "cracked", label: "Cracked/Broken", multiplier: 0.6 },
    ],
  },
  {
    id: "battery",
    question: "How is the battery health?",
    icon: Battery,
    options: [
      { id: "good", label: "Good (>80%)", multiplier: 1 },
      { id: "average", label: "Average (60-80%)", multiplier: 0.9 },
      { id: "poor", label: "Poor (<60%)", multiplier: 0.75 },
    ],
  },
  {
    id: "functional",
    question: "Are all functions working?",
    icon: Smartphone,
    options: [
      { id: "yes", label: "Yes, everything works", multiplier: 1 },
      { id: "minor_issues", label: "Minor issues", multiplier: 0.85 },
      { id: "major_issues", label: "Major issues", multiplier: 0.6 },
    ],
  },
  {
    id: "water",
    question: "Any water damage?",
    icon: Droplets,
    options: [
      { id: "no", label: "No water damage", multiplier: 1 },
      { id: "yes", label: "Yes, water damaged", multiplier: 0.5 },
    ],
  },
];

const DeviceCondition = () => {
  const { categoryId, brandId, modelId } = useParams();
  const navigate = useNavigate();
  const model = deviceModels.find(m => m.id === modelId);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showPrice, setShowPrice] = useState(false);

  if (!model) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-muted-foreground">Device not found</p>
          <Link to="/" className="text-primary hover:underline mt-4 inline-block">Go Home</Link>
        </div>
      </div>
    );
  }

  const calculatePrice = () => {
    let price = model.basePrice;
    const condition = conditions.find(c => c.id === selectedCondition);
    if (condition) price *= condition.multiplier;

    questions.forEach(q => {
      const answer = answers[q.id];
      if (answer) {
        const opt = q.options.find(o => o.id === answer);
        if (opt) price *= opt.multiplier;
      }
    });

    return Math.round(price);
  };

  const handleConditionSelect = (conditionId: string) => {
    setSelectedCondition(conditionId);
    setCurrentStep(1);
  };

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    if (currentStep < questions.length) {
      setCurrentStep(prev => prev + 1);
    }
    if (currentStep === questions.length) {
      setShowPrice(true);
    }
  };

  const finalPrice = calculatePrice();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Link
          to={`/sell/${categoryId}/${brandId}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Models
        </Link>

        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-muted rounded-xl flex items-center justify-center text-3xl">
            {categoryId === "phones" ? "📱" : categoryId === "laptops" ? "💻" : "📟"}
          </div>
          <h1 className="text-2xl font-bold text-foreground">{model.name}</h1>
          <p className="text-muted-foreground text-sm">Tell us about your device condition</p>
        </div>

        {/* Progress bar */}
        <div className="flex gap-1 mb-8">
          {Array.from({ length: questions.length + 1 }).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i <= currentStep ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        {!showPrice ? (
          <>
            {currentStep === 0 && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Overall Condition
                </h2>
                <div className="space-y-3">
                  {conditions.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => handleConditionSelect(c.id)}
                      className={`w-full p-4 rounded-xl border text-left transition-all hover:border-primary/50 hover:shadow-sm ${
                        selectedCondition === c.id ? "border-primary bg-primary/5" : "bg-card"
                      }`}
                    >
                      <div className="font-semibold text-foreground">{c.label}</div>
                      <div className="text-sm text-muted-foreground">{c.description}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep > 0 && currentStep <= questions.length && (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {(() => {
                  const q = questions[currentStep - 1];
                  return (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <q.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-lg font-semibold text-foreground">{q.question}</h2>
                      </div>
                      <div className="space-y-3">
                        {q.options.map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => handleAnswer(q.id, opt.id)}
                            className={`w-full p-4 rounded-xl border text-left transition-all hover:border-primary/50 hover:shadow-sm ${
                              answers[q.id] === opt.id ? "border-primary bg-primary/5" : "bg-card"
                            }`}
                          >
                            <span className="font-medium text-foreground">{opt.label}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </motion.div>
            )}

            {currentStep > questions.length && !showPrice && (
              <div className="text-center">
                <Button onClick={() => setShowPrice(true)} size="lg" className="bg-primary text-primary-foreground">
                  Get My Price
                </Button>
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="p-8 rounded-2xl border bg-card shadow-lg">
              <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">Estimated price for your</p>
              <h2 className="text-xl font-bold text-foreground mb-4">{model.name}</h2>
              <div className="text-5xl font-extrabold text-primary mb-6">
                ₹{finalPrice.toLocaleString("en-IN")}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => navigate(`/checkout?device=${modelId}&price=${finalPrice}`)}
                >
                  Sell Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => {
                    setCurrentStep(0);
                    setSelectedCondition(null);
                    setAnswers({});
                    setShowPrice(false);
                  }}
                >
                  Re-evaluate
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DeviceCondition;
