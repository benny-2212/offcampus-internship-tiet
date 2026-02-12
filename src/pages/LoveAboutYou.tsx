import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

// ============ EDITABLE ============
const BACKGROUND_IMAGE_URL = "";
const BANNER_IMAGE_URL = "";

const REASONS = [
  "Your smile lights up every room you walk into ✨",
  "The way you laugh at my dumbest jokes 😂",
  "How you always know exactly what to say 💬",
  "Your kindness that makes the world softer 🌸",
  "Those eyes that hold entire galaxies 🌌",
  "How passionate you are about everything you do 🔥",
  "The way you care so deeply about the people you love 💕",
  "Your voice — my favorite sound in the world 🎵",
  "How brave and strong you are, even on hard days 💪",
  "The way you make even ordinary moments magical 🪄",
  "Your sense of humor that always catches me off guard 😄",
  "How you never give up on anything or anyone 🌟",
  "The little texts you send that make my whole day 📱",
  "Your intelligence that constantly amazes me 🧠",
  "How beautiful you look without even trying 🌹",
  "The warmth in your hugs — like coming home 🏠",
  "How you make me want to be a better person 🦋",
  "Your creativity and the way you see the world 🎨",
  "Those quiet moments when words aren't needed 🤍",
  "Simply everything about you. All of it. Forever. ♾️",
];
// ==================================

const LoveAboutYou = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-background relative overflow-hidden"
      style={BACKGROUND_IMAGE_URL ? { backgroundImage: `url(${BACKGROUND_IMAGE_URL})`, backgroundSize: "cover" } : {}}
    >
      <FloatingHearts />

      <div className="relative z-10 max-w-lg mx-auto p-4 pb-20">
        <button onClick={() => navigate("/dashboard")} className="text-muted-foreground font-body text-sm mb-4 hover:text-foreground transition-colors">
          ← Back
        </button>

        {BANNER_IMAGE_URL && (
          <img src={BANNER_IMAGE_URL} alt="Banner" className="w-full h-32 object-cover rounded-2xl mb-4" />
        )}

        <h1 className="text-2xl md:text-3xl font-display text-foreground mb-6 animate-fade-in">
          💗 20 Things I Love About You
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {REASONS.map((reason, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="text-xs text-primary font-body font-semibold">#{i + 1}</span>
              <p className="text-sm text-foreground font-body mt-1 leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveAboutYou;
