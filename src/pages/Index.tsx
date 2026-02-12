import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


// ============ EDITABLE IMAGE URL ============
const VALENTINE_IMAGE_URL = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=300&fit=crop";
// ============================================

const BRANCHES = [
  "Computer Engineering",
  "Electronics & Communication",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Chemical Engineering",
  "Biotechnology",
];

const Index = () => {
  const [phase, setPhase] = useState<"form" | "transition" | "valentine">("form");
  const [showPopup, setShowPopup] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhase("transition");
    setTimeout(() => setPhase("valentine"), 800);
  };

  const handleNo = () => {
    setShowPopup(true);
    // Move the No button to a random position
    setNoPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    });
  };

  const handleNoHover = () => {
    setNoPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    });
  };

  // Phase 1: Boring college form
  if (phase === "form" || phase === "transition") {
    return (
      <div
        className={`min-h-screen flex items-center justify-center p-4 transition-all duration-700 ${phase === "transition" ? "opacity-0 scale-95" : "opacity-100"
          }`}
        style={{ background: "#fff" }}
      >
        <div className="w-full max-w-lg">
          {/* Institutional header  */}
          <div className="text-center mb-8">

            <h1 className="text-xl font-bold font-body" style={{ color: "#1a237e" }}>
              Offcampus Internship TIET
            </h1>
            <p className="text-sm mt-1 font-body" style={{ color: "#666" }}>
              Student Registration Form – Academic Year 2025-26
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="border rounded-lg p-6 space-y-5"
            style={{ borderColor: "#e0e0e0", background: "#fafafa" }}
          >
            <div>
              <label className="block text-sm font-medium mb-1.5 font-body" style={{ color: "#333" }}>
                Full Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border rounded text-sm font-body focus:outline-none focus:ring-2"
                style={{ borderColor: "#ccc", background: "#fff" }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 font-body" style={{ color: "#333" }}>
                Roll Number <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. 102103XXX"
                className="w-full px-3 py-2 border rounded text-sm font-body focus:outline-none focus:ring-2"
                style={{ borderColor: "#ccc", background: "#fff" }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 font-body" style={{ color: "#333" }}>
                Branch <span style={{ color: "red" }}>*</span>
              </label>
              <select
                required
                className="w-full px-3 py-2 border rounded text-sm font-body focus:outline-none focus:ring-2"
                style={{ borderColor: "#ccc", background: "#fff" }}
                defaultValue=""
              >
                <option value="" disabled>Select your branch</option>
                {BRANCHES.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded text-sm font-medium text-white font-body transition-colors"
              style={{ background: "#1a237e" }}
            >
              Submit
            </button>

            <p className="text-xs text-center font-body" style={{ color: "#999" }}>
              This form is for academic purposes only.
            </p>
          </form>
        </div>
      </div>
    );
  }

  // Phase 2: Valentine question
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background relative overflow-hidden">


      <div className="relative z-10 w-full max-w-md text-center animate-fade-in">
        {/* Photo placeholder */}
        <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-accent shadow-lg">
          <img
            src={VALENTINE_IMAGE_URL}
            alt="Valentine"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl md:text-4xl font-display text-foreground leading-tight mb-8">
          Suhani Bhutna,
          <br />
          <span className="text-primary">will you be my Valentine?</span>
        </h1>

        <div className="flex items-center justify-center gap-6 relative">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-10 py-3 rounded-full bg-primary text-primary-foreground font-body font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-soft"
          >
            Yes 💖
          </button>

          <button
            onClick={handleNo}
            onMouseEnter={handleNoHover}
            className="px-8 py-3 rounded-full border-2 border-primary text-primary font-body font-medium transition-all duration-200"
            style={{
              transform: `translate(${noPos.x}px, ${noPos.y}px)`,
            }}
          >
            No
          </button>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="mt-6 animate-scale-in">
            <div className="inline-block bg-card border border-border rounded-2xl px-6 py-4 shadow-lg">
              <p className="text-foreground font-body text-sm">
                Oops! Wrong answer. 💕
                <br />
                <span className="text-muted-foreground">Right answer only.</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
