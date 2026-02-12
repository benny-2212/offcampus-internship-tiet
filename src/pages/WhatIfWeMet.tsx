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
      { from: "angad", text: "Excuse me, is this seat taken?" },
      { from: "suhani", text: "Nope! It's all yours 😊" },
      { from: "angad", text: "Thanks. What are you reading?" },
      { from: "suhani", text: "Just pretending to read so I look smart 😂" },
      { from: "angad", text: "Haha that's literally what I do too" },
      { from: "suhani", text: "Okay we're already bonding over fake intellectualism" },
      { from: "angad", text: "Best foundation for a relationship honestly" },
      { from: "suhani", text: "Who said anything about a relationship 👀" },
      { from: "angad", text: "My heart did, just now, without asking me" },
      { from: "suhani", text: "Smooth. Very smooth." },
      { from: "angad", text: "I try. Can I buy you a coffee?" },
      { from: "suhani", text: "Only if you promise it won't be the last one" },
      { from: "angad", text: "I promise it'll be the first of thousands" },
      { from: "suhani", text: "Thousands? That's a lot of caffeine" },
      { from: "angad", text: "Worth every heartbeat ❤️" },
      { from: "suhani", text: "Okay stop, you're making me blush in public" },
      { from: "angad", text: "Good. You look cute when you blush" },
      { from: "suhani", text: "I'm literally hiding behind my book right now" },
      { from: "angad", text: "The book you were fake-reading?" },
      { from: "suhani", text: "...okay fine you got me 😂" },
      { from: "angad", text: "So... same time tomorrow?" },
      { from: "suhani", text: "Are you asking me on a date?" },
      { from: "angad", text: "I'm asking you on every date. Forever." },
      { from: "suhani", text: "Then yes. Tomorrow. And every day after that 💕" },
    ],
  },
  {
    name: "In a Library 📚",
    messages: [
      { from: "angad", text: "Hey, you dropped your bookmark" },
      { from: "suhani", text: "Oh! Thank you so much" },
      { from: "angad", text: "It's a cute bookmark. A little heart" },
      { from: "suhani", text: "My friend gave it to me 💕" },
      { from: "angad", text: "What are you reading for real this time?" },
      { from: "suhani", text: "Something about the universe and fate" },
      { from: "angad", text: "Funny. I think the universe just introduced us" },
      { from: "suhani", text: "That's the cheesiest thing I've ever heard" },
      { from: "angad", text: "But you're smiling" },
      { from: "suhani", text: "…maybe a little" },
      { from: "angad", text: "Can I sit here and pretend to study?" },
      { from: "suhani", text: "Only if you're quiet" },
      { from: "angad", text: "I'll be so quiet you'll forget I'm here" },
      { from: "suhani", text: "Somehow I doubt that" },
      { from: "angad", text: "You're right. I'm unforgettable 😎" },
      { from: "suhani", text: "Okay that made me laugh. You can stay." },
      { from: "angad", text: "So what chapter are you on?" },
      { from: "suhani", text: "Chapter 7. The one about soulmates" },
      { from: "angad", text: "Spoiler: they find each other in a library" },
      { from: "suhani", text: "You didn't even read the book!" },
      { from: "angad", text: "I don't need to. I'm living it right now" },
      { from: "suhani", text: "Okay that one actually got me 🥺" },
      { from: "angad", text: "Can I write my number in your book?" },
      { from: "suhani", text: "Only if you promise to never be a stranger 📖💗" },
    ],
  },
  {
    name: "On a Rainy Day 🌧️",
    messages: [
      { from: "angad", text: "Hey! Need to share an umbrella?" },
      { from: "suhani", text: "Yes please, I'm literally melting" },
      { from: "angad", text: "Melting? You look perfect to me" },
      { from: "suhani", text: "I look like a wet cat right now 😭" },
      { from: "angad", text: "Cutest wet cat I've ever seen" },
      { from: "suhani", text: "You're weird. But thanks for the umbrella" },
      { from: "angad", text: "Where are you headed?" },
      { from: "suhani", text: "Anywhere dry at this point" },
      { from: "angad", text: "There's a café right there. My treat?" },
      { from: "suhani", text: "You're suspiciously nice to strangers" },
      { from: "angad", text: "Only the ones who make my heart skip a beat" },
      { from: "suhani", text: "Does that line actually work?" },
      { from: "angad", text: "I don't know, is it working?" },
      { from: "suhani", text: "…let's get that coffee ☕" },
      { from: "angad", text: "Best rainy day ever" },
      { from: "suhani", text: "Don't push it 😂" },
      { from: "angad", text: "Okay but for real, this rain isn't stopping" },
      { from: "suhani", text: "I secretly love the rain though 🌧️" },
      { from: "angad", text: "Then I hope it never stops" },
      { from: "suhani", text: "Because of the rain or because of this?" },
      { from: "angad", text: "Because of you. Obviously." },
      { from: "suhani", text: "You really don't hold back do you" },
      { from: "angad", text: "Life's too short to not say what you feel" },
      { from: "suhani", text: "Then I feel like this is the start of something beautiful 💕" },
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
  };

  const showNext = () => {
    if (activeChat !== null && visibleCount < SCENARIOS[activeChat].messages.length) {
      setVisibleCount((c) => c + 1);
    }
  };

  const allRevealed = activeChat !== null && visibleCount >= SCENARIOS[activeChat].messages.length;

  return (
    <div
      className="min-h-screen bg-background relative overflow-hidden"
      style={BACKGROUND_IMAGE_URL ? { backgroundImage: `url(${BACKGROUND_IMAGE_URL})`, backgroundSize: "cover" } : {}}
    >
      <FloatingHearts />

      <div className="relative z-10 max-w-lg mx-auto p-4 pb-28">
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

            {/* Chat header labels */}
            <div className="flex justify-between mb-3 px-2">
              <span className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide">Suhani</span>
              <span className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide">Angad</span>
            </div>

            <div className="space-y-3 mb-6">
              {SCENARIOS[activeChat].messages.slice(0, visibleCount).map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "angad" ? "justify-end" : "justify-start"} ${
                    msg.from === "angad" ? "animate-chat-in-right" : "animate-chat-in-left"
                  }`}
                >
                  <div className={`max-w-[80%] ${msg.from === "angad" ? "text-right" : "text-left"}`}>
                    <span className="text-[10px] font-body text-muted-foreground mb-0.5 block px-1">
                      {msg.from === "angad" ? "Angad" : "Suhani"}
                    </span>
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm font-body ${
                        msg.from === "angad"
                          ? "bg-primary text-primary-foreground rounded-br-md"
                          : "bg-accent text-accent-foreground rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tap to reveal next */}
            {!allRevealed ? (
              <button
                onClick={showNext}
                className="w-full py-3 rounded-2xl bg-primary/10 text-primary font-body text-sm font-medium hover:bg-primary/20 transition-colors animate-bounce-gentle"
              >
                Tap to see next message 💌
              </button>
            ) : (
              <div className="text-center py-4 animate-fade-in">
                <p className="text-muted-foreground font-body text-sm">That's how it could have been… 💕</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatIfWeMet;
