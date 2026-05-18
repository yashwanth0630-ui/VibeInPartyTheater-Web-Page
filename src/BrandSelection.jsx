import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./BrandSelection.css";

function TiltCard({ brand, onClick }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;
      card.style.transform = `perspective(1200px) translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = `perspective(1200px) translateX(0px) translateY(0px) scale(1) rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`brand-card brand-card--${brand.id}`}
      ref={cardRef}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      id={`brand-card-${brand.id}`}
    >
      <div className="brand-card__glow" />
      <div className="brand-card__video-wrap">
        <video
          className="brand-card__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={brand.video} type={brand.videoType || "video/mp4"} />
        </video>
        <div className="brand-card__video-overlay" style={{ background: brand.overlay }} />
      </div>
      <div className="brand-card__content">
        <div className="brand-card__tag">{brand.tag}</div>
        <div className="brand-card__emoji">{brand.emoji}</div>
        <h2 className="brand-card__title">{brand.name}</h2>
        <p className="brand-card__desc">{brand.desc}</p>
        <div className="brand-card__chips">
          {brand.chips.map((chip) => (
            <span key={chip} className="brand-card__chip">{chip}</span>
          ))}
        </div>
        <button className="brand-card__cta" style={{ background: brand.gradient }}>
          {brand.cta} →
        </button>
      </div>
      <div className="brand-card__shine" />
    </div>
  );
}

export default function BrandSelection() {
  const navigate = useNavigate();

  const brands = [
    {
      id: "vibe",
      name: "VibeInParty Theater",
      emoji: "🎉",
      tag: "Party Rooms",
      desc: "Premium party rooms with LED shows, DJ booths, and immersive décor for every celebration.",
      chips: ["Party Rooms", "DJ Booths", "LED Shows", "Bookable"],
      cta: "Enter VibeInParty",
      video: "/LoopingVideoVibeInParty.mp4",
      videoType: "video/mp4",
      overlay: "linear-gradient(160deg, rgba(196,77,255,0.55) 0%, rgba(5,3,26,0.85) 100%)",
      gradient: "linear-gradient(135deg, #ff6b9d, #c44dff)",
      path: "/vibeinparty",
    },
    {
      id: "kitchen",
      name: "Neerala's Kitchen",
      emoji: "🍽️",
      tag: "Fine Catering",
      desc: "Authentic home-style cooking meets premium catering. Bringing warmth, flavour, and love to every table.",
      chips: ["Catering", "Home-Style", "Events", "Delivery"],
      cta: "Enter Neerala's Kitchen",
      video: "/NeeralasLooping.MOV",
      videoType: "video/mp4",
      overlay: "linear-gradient(160deg, rgba(255,107,57,0.55) 0%, rgba(5,3,26,0.85) 100%)",
      gradient: "linear-gradient(135deg, #ff7b39, #ffb347)",
      path: "/neeralas-kitchen",
    },
  ];

  return (
    <div className="brand-selection">
      <div className="bs__bg">
        <div className="bs__orb bs__orb--1" />
        <div className="bs__orb bs__orb--2" />
        <div className="bs__orb bs__orb--3" />
        <div className="bs__grain" />
      </div>

      <header className="bs__header">
        <div className="bs__logo">✨ Select Your Experience</div>
        <p className="bs__sub">Two worlds. One platform. Choose your destination.</p>
      </header>

      <main className="bs__cards">
        {brands.map((brand) => (
          <TiltCard
            key={brand.id}
            brand={brand}
            onClick={() => navigate(brand.path)}
          />
        ))}
      </main>

      <footer className="bs__footer">
        <p>© 2026 All Rights Reserved · Made with 🎉 &amp; 🍽️</p>
      </footer>
    </div>
  );
}
