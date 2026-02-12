import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

// ============ EDITABLE ============
const BACKGROUND_IMAGE_URL = "";
const BANNER_IMAGE_URL = "";

const SCENARIOS = [
  {
    name: "At a Coffee Shop ☕",
    messages: [
      { from: "me", text: "Excuse me, is this seat taken?" },
      { from: "her", text: "Nope! It's all yours 😊" },
      { from: "me", text: "Thanks. What are you reading?" },
      { from: "her", text: "Just pretending to read so I look smart 😂" },
      { from: "me", text: "Haha that's literally what I do too" },
      { from: "her", text: "Okay we're already bonding over fake intellectualism" },
      { from: "me", text: "Best foundation for a relationship honestly" },
      { from: "her", text: "Who said anything about a relationship 👀" },
      { from: "me", text: "My heart did, just now, without asking me" },
      { from: "her", text: "Smooth. Very smooth." },
      { from: "me", text: "I try. Can I buy you a coffee?" },
      { from: "her", text: "Only if you promise it won't be the last one" },
      { from: "me", text: "I promise it'll be the first of thousands" },
      { from: "her", text: "Thousands? That's a lot of caffeine" },
      { from: "me", text: "Worth every heartbeat ❤️" },
    ],
  },
  {
    name: "In a Library 📚",
    messages: [
      { from: "me", text: "Hey, you dropped your bookmark" },
      { from: "her", text: "Oh! Thank you so much" },
      { from: "me", text: "It's a cute bookmark. A little heart" },
      { from: "her", text: "My friend gave it to me 💕" },
      { from: "me", text: "What are you reading for real this time?" },
      { from: "her", text: "Something about the universe and fate" },
      { from: "me", text: "Funny. I think the universe just introduced us" },
      { from: "her", text: "That's the cheesiest thing I've ever heard" },
      { from: "me", text: "But you're smiling" },
      { from: "her", text: "…maybe a little" },
      { from: "me", text: "Can I sit here and pretend to study?" },
      { from: "her", text: "Only if you're quiet" },
      { from: "me", text: "I'll be so quiet you'll forget I'm here" },
      { from: "her", text: "Somehow I doubt that" },
      { from: "me", text: "You're right. I'm unforgettable 😎" },
      { from: "her", text: "Okay that made me laugh. You can stay." },
    ],
  },
  {
    name: "On a Rainy Day 🌧️",
    messages: [
      { from: "me", text: "Hey! Need to share an umbrella?" },
      { from: "her", text: "Yes please, I'm literally melting" },
      { from: "me", text: "Melting? You look perfect to me" },
      { from: "her", text: "I look like a wet cat right now 😭" },
      { from: "me", text: "Cutest wet cat I've ever seen" },
      { from: "her", text: "You're weird. But thanks for the umbrella" },
      { from: "me", text: "Where are you headed?" },
      { from: "her", text: "Anywhere dry at this point" },
      { from: "me", text: "There's a café right there. My treat?" },
      { from: "her", text: "You're suspiciously nice to strangers" },
      { from: "me", text: "Only the ones who make my heart skip a beat" },
      { from: "her", text: "Does that line actually work?" },
      { from: "me", text: "I don't know, is it working?" },
      { from: "her", text: "…let's get that coffee ☕" },
      { from: "me", text: "Best rainy day ever" },
      { from: "her", text: "Don't push it 😂" },
    ],
  },
];
// ==================================

const WhatIfWeMet = () => {
  const navigate = useNavigate();
  const [activeChat, setActiveChat] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  const openChat = (idx: number) => {
    setActiveChat(idx);
    setVisibleCount(0);
    // Animate messages appearing one by one
    const msgs = SCENARIOS[idx].messages;
    msgs.forEach((_, i) => {
      setTimeout(() => setVisibleCount((c) => c + 1), (i + 1) * 400);
    });
  };

  return (
    <div
      className="min-h-screen bg-background relative overflow-hidden"
      style={BACKGROUND_IMAGE_URL ? { backgroundImage: `url(${BACKGROUND_IMAGE_URL})`, backgroundSize: "cover" } : {}}
    >
      <FloatingHearts />

      <div className="relative z-10 max-w-lg mx-auto p-4 pb-20">
        {/* Back button */}
        <button onClick={() => navigate("/dashboard")} className="text-muted-foreground font-body text-sm mb-4 hover:text-foreground transition-colors">
          ← Back
        </button>

        {BANNER_IMAGE_URL && (
          <img src={BANNER_IMAGE_URL} alt="Banner" className="w-full h-32 object-cover rounded-2xl mb-4" />
        )}

        <h1 className="text-2xl md:text-3xl font-display text-foreground mb-6 animate-fade-in">
          💭 What If We Met?
        </h1>

        {activeChat === null ? (
          <div className="space-y-3">
            {SCENARIOS.map((s, i) => (
              <button
                key={i}
                onClick={() => openChat(i)}
                className="w-full text-left bg-card border border-border rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <span className="font-display text-foreground text-lg">{s.name}</span>
                <p className="text-sm text-muted-foreground font-body mt-1">Tap to read our story…</p>
              </button>
            ))}
          </div>
        ) : (
          <div>
            <button onClick={() => setActiveChat(null)} className="text-sm text-primary font-body mb-4 hover:underline">
              ← Choose another story
            </button>
            <h2 className="font-display text-lg text-foreground mb-4">{SCENARIOS[activeChat].name}</h2>
            <div className="space-y-3">
              {SCENARIOS[activeChat].messages.slice(0, visibleCount).map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"} ${
                    msg.from === "me" ? "animate-chat-in-right" : "animate-chat-in-left"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm font-body ${
                      msg.from === "me"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-accent text-accent-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatIfWeMet;
