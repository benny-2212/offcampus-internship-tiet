import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

// ============ EDITABLE ============
const BACKGROUND_IMAGE_URL = "";
const BANNER_IMAGE_URL = "";

const TIMELINE = [
  { emoji: "🌅", title: "Morning Chai Together", text: "Waking up slow, making chai, sitting by the window while the world wakes up with us." },
  { emoji: "🍳", title: "Cooking Disasters", text: "Trying to cook breakfast together, burning toast, laughing about it, ordering in anyway." },
  { emoji: "🎵", title: "Our Playlist Mornings", text: "Dancing in the kitchen to our favorite songs. Badly. Beautifully." },
  { emoji: "💻", title: "Working Side by Side", text: "Both focused on our laptops, stealing glances, passing notes like we're in school." },
  { emoji: "🛋️", title: "Afternoon Naps", text: "Falling asleep on the couch mid-movie, tangled in a blanket, perfectly at peace." },
  { emoji: "🌆", title: "Sunset Walks", text: "Evening walks to nowhere in particular. Just us, the sky, and comfortable silence." },
  { emoji: "🍕", title: "Late Night Snack Runs", text: "Midnight cravings leading to impulsive trips for pizza or ice cream in pajamas." },
  { emoji: "🌙", title: "Pillow Talks", text: "Whispering dreams and fears at 2am, knowing every word is safe with each other." },
  { emoji: "🎄", title: "Our First Festival Together", text: "Decorating our little space, making it ours, creating traditions that are just for us." },
  { emoji: "✈️", title: "Traveling the World", text: "Passport stamps, airport selfies, getting lost in new cities together." },
  { emoji: "🏠", title: "Building Our Home", text: "Choosing curtains, arguing over paint colors, making a space that feels like love." },
  { emoji: "♾️", title: "Forever & Always", text: "Growing old together, still laughing at the same jokes, still choosing each other every single day." },
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
