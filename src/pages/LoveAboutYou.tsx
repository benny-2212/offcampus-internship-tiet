import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

// ============ EDITABLE ============
const BACKGROUND_IMAGE_URL = "";
const BANNER_IMAGE_URL = "";

const REASONS = [
  "I love your smile and the way your gums show just a little when you grin 😭💕",
  "The way you baby talk and pretend you’re not doing it 🥹",
  "How you take care of me without even making it obvious 🤍",
  "The way you cuss and whine and somehow still look adorable when something goes wrong 😤😂",
  "How you instantly start drooling the moment someone mentions cheesecake 🍰",
  "That face you make when the coffee isn’t good ☕️😒",
  "How you manage to make me say sorry even in the 1 out of 100 times it’s actually your fault 😌",
  "How you’re genuinely wonderful at almost everything you do 🌟",
  "The way you read people so quickly — your instincts are actually insane 🧠✨",
  "How you criticize my dressing but still secretly fix it for me 👕😌",
  "The way you whine about not looking good when you’re literally the most beautiful girl in the world 🌷",
  "How much you love sleeping and how cute you look while doing absolutely nothing 😴🤍",
  "When you passionately talk about the future and money and building something big 💼🔥",
  "How insanely goal-driven and growth-driven you are 🚀",
  "The way you’re so respectful and still appreciate the smallest things I do 🫶",
  "How patient you are with me even when I’m being annoying 🥲",
  "How you think you’re smarter than me… and honestly you probably are 🧠😌",
  "The way you rant about other girls who are literally just… dramatic 😭",
  "How we share gossip like it’s confidential government data 🤫😂",
  "Just you. All of it. Every version of you. I love you. ♾️💕",
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
