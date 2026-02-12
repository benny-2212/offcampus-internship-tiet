import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

// ============ EDITABLE IMAGE URLS ============
const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=300&fit=crop",
];
const BACKGROUND_IMAGE_URL = "";
// =============================================

const cards = [
  { title: "What If We Met?", subtitle: "Our imagined love stories", path: "/what-if-we-met", emoji: "💭" },
  { title: "20 Things I Love About You", subtitle: "Every reason my heart chose you", path: "/love-about-you", emoji: "💗" },
  { title: "Our Future Together", subtitle: "Dreams we'll build side by side", path: "/our-future", emoji: "🏡" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-background relative overflow-hidden"
      style={BACKGROUND_IMAGE_URL ? { backgroundImage: `url(${BACKGROUND_IMAGE_URL})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
    >
      <FloatingHearts />

      <div className="relative z-10 w-full max-w-lg">
        <h1 className="text-3xl md:text-4xl font-display text-center text-foreground mb-2 animate-fade-in">
          For You, Suhani 💝
        </h1>
        <p className="text-center text-muted-foreground font-body mb-10 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Pick a door to something special…
        </p>

        <div className="space-y-5">
          {cards.map((card, i) => (
            <button
              key={card.path}
              onClick={() => navigate(card.path)}
              className="w-full group animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="flex items-center gap-4 bg-card border border-border rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={CARD_IMAGES[i]} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{card.emoji}</span>
                    <h2 className="text-lg font-display text-foreground">{card.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground font-body mt-1">{card.subtitle}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
