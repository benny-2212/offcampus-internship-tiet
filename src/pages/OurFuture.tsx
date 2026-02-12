import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

// ============ EDITABLE ============
const BACKGROUND_IMAGE_URL = "";
const BANNER_IMAGE_URL = "";

const TIMELINE = [
  { emoji: "🌅", title: "morning chai or coffee together", text: "waking up slow making chai or coffee and sitting quietly before the day starts." },
  { emoji: "🍳", title: "cooking disasters", text: "me trying to cook chicken while you insist on making something veg and both of us pretending we know what we’re doing." },
  { emoji: "🎵", title: "our music moods", text: "first blasting loud punjabi old school hits then switching to romantic soft cuddly songs." },
  { emoji: "🚗", title: "long drives & random dates", text: "late night drives no destination planning little surprise dates on the way." },
  { emoji: "🍲", title: "cooking together properly", text: "actually cooking food together without burning it and feeling proud for no reason." },
  { emoji: "✈️", title: "traveling together", text: "new cities airport chaos you convincing me to travel more and me acting tough but secretly loving it." },
  { emoji: "🏋️", title: "hitting the gym together", text: "working out side by side motivating each other and competing for no reason." },
  { emoji: "💸", title: "earning & spending", text: "earning money together and spending most of it on clothes food and random travel plans." },
  { emoji: "🎬", title: "movie nights", text: "watching movies together fighting over what to pick and ending up rewatching something comfort." },
  { emoji: "📺", title: "sitcom marathons", text: "late nights watching sitcoms laughing too loud at jokes we’ve already heard before." },
  { emoji: "🏠", title: "our little space", text: "coming back home tired but happy knowing this is ours." },
  { emoji: "♾️", title: "just us", text: "doing all of this again and again and never getting bored of it." },
];
// ==================================

const OurFuture = () => {
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

        <h1 className="text-2xl md:text-3xl font-display text-foreground mb-8 animate-fade-in">
          🏡 Our Future Together
        </h1>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="relative pl-14 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Dot */}
                <div className="absolute left-3 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="bg-card border border-border rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{item.emoji}</span>
                    <h3 className="font-display text-foreground text-base">{item.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFuture;
