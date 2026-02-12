import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "@/components/FloatingHearts";

// ============ EDITABLE ============
const BACKGROUND_IMAGE_URL = "";
const BANNER_IMAGE_URL = "";

const SCENARIOS = [
    {
  name: "at a coffee shop - two adults ☕",
  messages: [
    { from: "angad", text: "hi… you must be suhani? i was hoping i didn’t just walk up to a ceo. can i offer you a cup of coffee ?" },
    { from: "suhani", text: "depends. are you here to pitch me an app or just have coffee?" },
    { from: "angad", text: "just coffee. though i do fix apps for a living." },
    { from: "suhani", text: "ah. software engineer?" },
    { from: "angad", text: "guilty. working at a startup right now. trying to switch to something better though." },
    { from: "suhani", text: "engineering… aah. that word brings back terrible memories." },
    { from: "angad", text: "that bad?" },
    { from: "suhani", text: "four years of survival mode. it felt like i was constantly trying to prove something." },
    { from: "angad", text: "that sounds intense. but from what i’ve heard… running multiple successful fashion businesses isn’t exactly average either." },
    { from: "suhani", text: "i just like building things. creating something of my own. it makes it worth it." },
    { from: "angad", text: "same. except my creations are invisible lines of code nobody notices unless they break lol." },
    { from: "suhani", text: "uunderappreciated. very tragic energy.." },
    { from: "angad", text: "only slightly tragic. my real tragedy is being dragged to bars with friends. i feel obligated to drink but i don’t really enjoy it." },
    { from: "suhani", text: "that’s surprisingly honest. most guys flex their alcohol tolerance like it’s a skill." },
    { from: "angad", text: "i’d rather flex good company. like this place." },
    { from: "suhani", text: "careful. first meeting and you’re already trying to score points." },
    { from: "angad", text: "just trying to keep the conversation interesting." },
    { from: "suhani", text: "hmm." },
    { from: "angad", text: "engineers appreciate calculated risks." },
    { from: "suhani", text: "who said this was a risk?" },
    { from: "angad", text: "didn’t say it was. just saying it’s nice being here." },
    { from: "suhani", text: "that’s better." },
    { from: "angad", text: "maybe next time we skip the awkward start." },
    { from: "suhani", text: "maybe." }
  ],
},

{
  name: "high school library - just talking 📚",
  messages: [
    { from: "angad", text: "uh… hey. is this seat taken?" },
    { from: "suhani", text: "no go ahead." },
    { from: "angad", text: "thanks." },
    { from: "suhani", text: "you’re not from manav mangal are you?" },
    { from: "angad", text: "no… strawberry fields." },
    { from: "suhani", text: "ohh. fancy school." },
    { from: "angad", text: "it’s not that fancy." },
    { from: "suhani", text: "so what are you doing here?" },
    { from: "angad", text: "needed a quiet place to study. our library’s kind of loud." },
    { from: "suhani", text: "that’s ironic." },
    { from: "angad", text: "yeah. i’ve got a physics test coming up." },
    { from: "suhani", text: "you like physics?" },
    { from: "angad", text: "i do. it’s… calm. makes sense." },
    { from: "suhani", text: "you sound like you’ve already planned engineering." },
    { from: "angad", text: "maybe. still thinking about it." },
    { from: "suhani", text: "i can’t sit in one place that long. i’d rather travel." },
    { from: "angad", text: "you travel a lot?" },
    { from: "suhani", text: "whenever i get the chance. i love new cities. new people. feels exciting." },
    { from: "angad", text: "i’m not big on traveling." },
    { from: "suhani", text: "really? why?" },
    { from: "angad", text: "i don’t know. i like routine. cricket on weekends. netflix." },
    { from: "suhani", text: "lucky. i’m not even allowed to watch netflix." },
    { from: "angad", text: "seriously?" },
    { from: "suhani", text: "yeah. strict rules." },
    { from: "angad", text: "that’s rough." },
    { from: "suhani", text: "maybe college will fix that." },
    { from: "angad", text: "yeah… maybe we’ll end up in the same college anyway." },
    { from: "suhani", text: "who knows. maybe we will." },
    { from: "angad", text: "(i kind of hope she does.)" }
  ]
},

  {
  name: "sunny day - playground mess 🌧️",
  messages: [
    { from: "angad", text: "oye suhani popcorn de na thoda." },
    { from: "suhani", text: "bilkul nahi." },
    { from: "angad", text: "bas ek-do." },
    { from: "suhani", text: "tu already kabir ke chips kha chuka hai." },
    { from: "angad", text: "khaaye nahi test kiye the." },
    { from: "suhani", text: "tu har cheez ‘test’ karta hai." },
    { from: "angad", text: "scientific hoon main." },
    { from: "suhani", text: "scientific nahi paagal hai tu paagal." },
    { from: "angad", text: "cold drink hi de de phir." },
    { from: "suhani", text: "last time tu ne bottle hila ke di thi." },
    { from: "angad", text: "woh experiment tha." },
    { from: "suhani", text: "ananya pe phat gaya tha tera experiment." },
    { from: "angad", text: "thoda sa hi." },
    { from: "suhani", text: "ma’am kehti hain tu sabse bewakoof hai." },
    { from: "angad", text: "at least famous toh hoon." },
    { from: "suhani", text: "main bhi famous hoon par nice wali." },
    { from: "angad", text: "haan haan playground ki sadeli diva." },
    { from: "suhani", text: "sports captain hoon main." },
    { from: "angad", text: "captain toh main bhi hoon… farts ka." },
    { from: "suhani", text: "chhi aur tu bas sabka khana churaata hai." },
    { from: "angad", text: "churaata nahi manage karta hoon." },
    { from: "suhani", text: "tu ajeeb hai." },
    { from: "angad", text: "aur tu sadeli dayan." },
    { from: "suhani", text: "main confident hoon." },
    { from: "angad", text: "apne gol gol gaalon ke saath." },
    { from: "suhani", text: "mumma kehti hain nazar na lag jaye." },
    { from: "angad", text: "isliye main dekh bhi nahi raha." },
    { from: "suhani", text: "haan haan popcorn pe nazar hai teri mote." },
    { from: "angad", text: "bas gir jaaye toh pakad lunga sadeli." },
    { from: "suhani", text: "touch kiya na toh ma’am ko bol dungi." },
    { from: "angad", text: "tu chugalkhor hai." },
    { from: "suhani", text: "aur tu badmosh." }
  ]
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
