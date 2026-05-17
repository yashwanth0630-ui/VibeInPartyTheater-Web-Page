import { useState, useEffect, useRef } from "react";
import "./App.css";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with Public Key
emailjs.init('RUyIJ-pqMIKXypM2F');
import heroVideo from "../LoopingVideoVibeInParty.mp4";

const NAV_LINKS = ["Experience", "Packages", "How It Works", "Testimonials", "Team", "FAQs"];

const PACKAGES = [
  {
    emoji: "👑",
    name: "VIP",
    price: "₹1,999",
    duration: "1.5 Hours",
    guests: "Up to 5 (Extra charge for more)",
    color: "#ffb347",
    features: ["Single Burger", "Fries", "3 Piece Chicken Wings", "Thickshake", "Custom lighting show", "Live DJ booth"],
  },
  {
    emoji: "🎊",
    name: "Deluxe",
    price: "₹1,499",
    duration: "1.5 Hours",
    guests: "Up to 5 (Extra charge for more)",
    color: "#c44dff",
    features: ["Any Wrap", "Fries", "Thickshake", "Programmable LED lighting", "DJ-grade sound system"],
    popular: true,
  },
  {
    emoji: "🎂",
    name: "Basic",
    price: "₹1,199",
    duration: "1.5 Hours",
    guests: "Up to 5 (Extra charge for more)",
    color: "#ff6b9d",
    features: ["Single Burger", "Fries", "Standard LED lighting", "Bluetooth speaker"],
  },
  {
    emoji: "🎬",
    name: "Movie",
    price: "₹799",
    duration: "1.5 Hours",
    guests: "Up to 5",
    color: "#4dc8ff",
    features: ["Movie Screening Only", "Standard LED lighting", "Surround sound system", "No Food Included"],
  },
];

const SLOTS = [
  { label: "10:00 AM - 11:30 AM", start: "10:00" },
  { label: "11:30 AM - 1:00 PM", start: "11:30" },
  { label: "1:00 PM - 2:30 PM", start: "13:00" },
  { label: "2:30 PM - 4:00 PM", start: "14:30" },
  { label: "4:00 PM - 5:30 PM", start: "16:00" },
  { label: "5:30 PM - 7:00 PM", start: "17:30" },
  { label: "7:00 PM - 8:30 PM", start: "19:00" },
  { label: "8:30 PM - 10:00 PM", start: "20:30" },
];

const STEPS = [
  { step: "01", title: "Pick Your Room & Date", desc: "Browse our 5 unique themed rooms and check real-time availability. From neon lounges to grand ballrooms — find your vibe." },
  { step: "02", title: "Choose Your Package", desc: "Select Basic, Deluxe, VIP or Corporate. Each package is fully customisable. Add catering, extra hours, or special décor as needed." },
  { step: "03", title: "Confirm & Celebrate!", desc: "Pay securely online, receive instant confirmation, and show up on your day. Our team will have everything ready and sparkling for you." },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", role: "Birthday Bride, Mumbai", text: "The VIP room was absolutely magical! Every detail was perfect — from the LED show to the red carpet. My 30th birthday was truly unforgettable.", rating: 5 },
  { name: "Rahul Verma", role: "Corporate Event, Bengaluru", text: "Booked the Corporate package for our product launch. The AV setup was flawless and the team was incredibly professional. 10/10 would book again.", rating: 5 },
  { name: "Sneha Iyer", role: "Anniversary Celebration, Chennai", text: "We were blown away by how seamless everything was. The Deluxe package had everything we needed. Staff was so warm and accommodating!", rating: 5 },
  { name: "Arjun Nair", role: "Farewell Party, Hyderabad", text: "Booked the Basic package for a small farewell and it exceeded every expectation. Clean, vibey, and great sound. Highly recommended!", rating: 5 },
  { name: "Kavya Reddy", role: "Engagement Party, Pune", text: "From the enquiry to the event — everything was handled with so much care. The lighting designer was brilliant. Absolutely loved it!", rating: 5 },
  { name: "Vikram Mehta", role: "New Year's Party, Delhi", text: "The DJ booth in the VIP room is insane. Our entire crew had the best night. The booking process was super easy too. Will be back!", rating: 5 },
];

const TEAM = [
  { name: "Dr. Ananya Krishnamurthy", role: "Chief Experience Officer", emoji: "✨" },
  { name: "Meera Balachandran", role: "Head of Guest Relations", emoji: "🎯" },
  { name: "Deepika Pillai", role: "Lighting & Décor Designer", emoji: "💡" },
  { name: "Manish Gupta", role: "Operations Director", emoji: "⚙️" },
];

const FAQS = [
  { q: "How far in advance should I book?", a: "We recommend booking at least 7–14 days in advance, especially for weekends and holidays. Last-minute bookings (24–48 hrs) are possible subject to availability." },
  { q: "Can I bring my own food and drinks?", a: "Yes! All packages include a catering setup area. You're welcome to bring your own food and beverages, or we can connect you with our trusted catering partners." },
  { q: "What is your cancellation policy?", a: "Full refund if cancelled 7+ days before. 50% refund for cancellations 3–6 days before. No refund within 48 hours of the event." },
  { q: "Is decoration included?", a: "Basic décor (balloons, table settings) is included in all packages. Premium custom décor is available as an add-on or is included in VIP/Corporate packages." },
  { q: "Can I extend my booking duration?", a: "Extensions can be arranged subject to availability. Additional hours are billed at ₹1,500/hr for Basic, ₹2,500/hr for Deluxe, and ₹4,000/hr for VIP." },
  { q: "Are the rooms soundproofed?", a: "Yes, all our rooms are fully soundproofed. You can crank the music as loud as you want without disturbing neighbouring spaces." },
];

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__logo">🎉 VibeInPartyTheater</div>
      <ul className={`nav__links ${menuOpen ? "nav__links--open" : ""}`}>
        {NAV_LINKS.map(l => (
          <li key={l}><a href={`#${l.toLowerCase().replace(/ /g, "-")}`} onClick={() => setMenuOpen(false)}>{l}</a></li>
        ))}
        <li><a href="#book" className="nav__cta" onClick={() => setMenuOpen(false)}>Book Now</a></li>
      </ul>
      <button className="nav__burger" onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <video className="hero__video" autoPlay muted loop playsInline preload="metadata">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero__video-overlay" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grain" />
      </div>
      <div className="hero__content">
        <div className="hero__badge">✨Near Medipally </div>
        <h1 className="hero__title">
          Book the <em>Ultimate</em><br />
          Party Room Experience
        </h1>
        <p className="hero__sub">Birthdays · Celebrations · Corporate · Nightlife</p>
        <div className="hero__actions">
          <a href="#book" className="btn btn--primary">Book Your Room Now 🎉</a>
          <a href="#experience" className="btn btn--ghost">See Our Rooms ↓</a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat"><span>500+</span><p>Happy Celebrations</p></div>
          <div className="hero__stat__divider" />
          <div className="hero__stat"><span>5</span><p>Unique Rooms</p></div>
          <div className="hero__stat__divider" />
          <div className="hero__stat"><span>4.9★</span><p>Average Rating</p></div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [ref, inView] = useInView();
  const ROOMS = [
    { emoji: "🌈", name: "Neon Lounge", color: "#ff6b9d" },
    { emoji: "👑", name: "Royal Ballroom", color: "#ffb347" },
    { emoji: "🌙", name: "Midnight Club", color: "#c44dff" },
    { emoji: "🌸", name: "Garden Suite", color: "#4dc8ff" },
   
  ];
  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className={`container fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="section__tag" style={{ color: "#ff6b9d" }}>The Experience</div>
        <h2 className="section__title">Why Our Party Rooms Are Unlike<br />Anything You've Experienced</h2>
        <div className="experience__grid">
          <div className="experience__text">
            <p>Step into a world where every detail is designed to make your celebration unforgettable. Our premium party rooms feature state-of-the-art LED lighting systems, immersive sound setups, and luxurious décor.</p>
            <p>Whether you're hosting an intimate birthday dinner, a corporate mixer, or a full-blown nightlife experience, we have the perfect space for you. Real-time availability, instant booking, zero double-booking headaches.</p>
            <div className="experience__features">
              {["🎆 Programmable LED shows", "🔊 DJ-grade sound systems", "🎨 Custom décor styling", "📸 Insta-worthy setups"].map(f => (
                <div key={f} className="experience__feature">{f}</div>
              ))}
            </div>
          </div>
          <div className="experience__rooms">
            {ROOMS.map((r, i) => (
              <div key={r.name} className="room-pill" style={{ "--room-color": r.color, animationDelay: `${i * 0.1}s` }}>
                <span>{r.emoji}</span> {r.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  const [ref, inView] = useInView();
  return (
    <section className="section packages" id="packages" ref={ref}>
      <div className={`container fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="section__tag" style={{ color: "#c44dff" }}>Our Packages</div>
        <h2 className="section__title">Choose the Perfect Package<br />for Your Celebration</h2>
        <div className="packages__grid">
          {PACKAGES.map((pkg, i) => (
            <div key={pkg.name} className={`pkg-card ${pkg.popular ? "pkg-card--popular" : ""}`} style={{ "--pkg-color": pkg.color, animationDelay: `${i * 0.1}s` }}>
              {pkg.popular && <div className="pkg-card__badge">Most Popular</div>}
              <div className="pkg-card__emoji">{pkg.emoji}</div>
              <h3 className="pkg-card__name">{pkg.name}</h3>
              <div className="pkg-card__price">{pkg.price }</div>
              <div className="pkg-card__meta">
                <span>⏱ {pkg.duration}</span>
                <span>👥 {pkg.guests}</span>
              </div>
              <ul className="pkg-card__features">
                {pkg.features.map(f => <li key={f}>✓ {f}</li>)}
              </ul>
              <a href="#book" className="btn btn--pkg">Book {pkg.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const [ref, inView] = useInView();
  return (
    <section className="section how-it-works" id="how-it-works" ref={ref}>
      <div className={`container fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="section__tag" style={{ color: "#ffb347" }}>How It Works</div>
        <h2 className="section__title">Book Your Party Room<br />in 3 Simple Steps</h2>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.step} className="step" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="step__number">{s.step}</div>
              <div className="step__content">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [ref, inView] = useInView();
  return (
    <section className="section testimonials" id="testimonials" ref={ref}>
      <div className={`container fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="section__tag" style={{ color: "#ff6b9d" }}>Happy Clients</div>
        <h2 className="section__title">What Our Guests Are Saying<br />About Their Celebrations</h2>
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="testi-card" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="stars">{"★".repeat(t.rating)}</div>
              <p className="testi-card__text">"{t.text}"</p>
              <div className="testi-card__author">
                <div className="testi-card__avatar">{t.name[0]}</div>
                <div>
                  <div className="testi-card__name">{t.name}</div>
                  <div className="testi-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const [ref, inView] = useInView();
  return (
    <section className="section team" id="team" ref={ref}>
      <div className={`container fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="section__tag" style={{ color: "#4dc8ff" }}>Our Team</div>
        <h2 className="section__title">The Passionate Team Behind<br />Every Unforgettable Celebration</h2>
        <p className="team__desc">We're a team of event obsessives, designers, and hospitality veterans united by one goal: making your celebration absolutely legendary. Our coordinators are available 7 days a week.</p>
        <div className="team__grid">
          {TEAM.map((m, i) => (
            <div key={m.name} className="team-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="team-card__emoji">{m.emoji}</div>
              <h3 className="team-card__name">{m.name}</h3>
              <p className="team-card__role">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  const [open, setOpen] = useState(null);
  const [ref, inView] = useInView();
  return (
    <section className="section faqs" id="fa-qs" ref={ref}>
      <div className={`container fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="section__tag" style={{ color: "#c44dff" }}>FAQs</div>
        <h2 className="section__title">Everything You Need to Know<br />Before Booking Your Party Room</h2>
        <div className="faqs__list">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item ${open === i ? "faq-item--open" : ""}`}>
              <button className="faq-item__q" onClick={() => setOpen(open === i ? null : i)}>
                <span>{faq.q}</span>
                <span className="faq-item__icon">{open === i ? "−" : "+"}</span>
              </button>
              <div className="faq-item__a"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingCTA() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", pkg: "", guests: "", slots: [] });
  const [submitted, setSubmitted] = useState(false);
  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSlots = (e) => {
    const { value, checked } = e.target;
    setForm(f => ({
      ...f,
      slots: checked ? [...f.slots, value] : f.slots.filter(s => s !== value)
    }));
  };
  const submit = (e) => {
    e.preventDefault();
    
    const templateParams = {
      user_name: form.name,
      user_email: form.email,
      user_phone: form.phone,
      event_date: form.date,
      package: form.pkg,
      guests: form.guests,
      selected_slots: form.slots.join(', ') || 'No slots selected',
      time: new Date().toLocaleString()
    };

    emailjs.send('service_mfl9j39', 'template_pfps24e', templateParams, 'RUyIJ-pqMIKXypM2F')
      .then((result) => {
        alert('Booking request sent successfully!');
        setSubmitted(true);
      }, (error) => {
        console.error('Email delivery failed:', error);
        alert('Failed to send request. Please try again.');
      });
  };
  return (
    <section className="section booking" id="book" ref={ref}>
      <div className={`container fade-up ${inView ? "fade-up--visible" : ""}`}>
        <div className="booking__inner">
          <div className="booking__left">
            <div className="section__tag" style={{ color: "#ffb347" }}>Book Now</div>
            <h2 className="section__title" style={{ textAlign: "left" }}>Secure Your Party Room —<br />Don't Miss Your Date!</h2>
            <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "2rem" }}>Fill in the form and our team will confirm your booking within 2 hours. Weekend slots go fast!</p>
            <div className="booking__perks">
              {["✅ Instant confirmation", "✅ Zero double-bookings", "✅ 7-day free cancellation", "✅ Dedicated event support"].map(p => <div key={p}>{p}</div>)}
            </div>
          </div>
          <div className="booking__form-wrap">
            {submitted ? (
              <div className="booking__success">
                <div className="booking__success-icon">🎉</div>
                <h3>Booking Request Sent!</h3>
                <p>Our team will call you within 2 hours to confirm your party room. Get ready to celebrate!</p>
              </div>
            ) : (
              <form className="booking__form" onSubmit={submit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input name="name" value={form.name} onChange={handle} placeholder="Priya Sharma" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handle} placeholder="priya@example.com" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="+91 89774 41149" required />
                </div>
                <div className="form-group">
                  <label>Event Date</label>
                  <input type="date" name="date" value={form.date} onChange={handle} required />
                </div>
                <div className="form-group">
                  <label>Package</label>
                  <select name="pkg" value={form.pkg} onChange={handle} required>
                    <option value="">Select a package</option>
                    {PACKAGES.map(p => <option key={p.name} value={p.name}>{p.emoji} {p.name} — {p.price}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label>Number of Guests</label>
                  <input name="guests" value={form.guests} onChange={handle} placeholder="e.g. 30" required />
                </div>
                <div className="form-group">
                  <label>Time Slots (1.5 hours each, select multiple)</label>
                  <div className="slots-grid">
                    {SLOTS.map(slot => {
                      const today = new Date().toISOString().split('T')[0];
                      const isToday = form.date === today;
                      const now = new Date();
                      const slotStart = new Date(`${form.date} ${slot.start}`);
                      const disabled = isToday && slotStart < now;
                      return (
                        <label key={slot.label} className={`slot-checkbox ${disabled ? 'disabled' : ''}`}>
                          <input
                            type="checkbox"
                            value={slot.label}
                            checked={form.slots.includes(slot.label)}
                            onChange={handleSlots}
                            disabled={disabled}
                          />
                          {slot.label}
                        </label>
                      );
                    })}
                  </div>
                </div>
                <button type="submit" className="btn btn--primary btn--full">Confirm My Booking 🎊</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo"> <image src="/Logo VibeInPartyTheater.png" alt="PartyRoom Logo" /> </div>
            <p>India's most vibrant party room booking platform. Making every celebration legendary.</p>
          </div>
          <div className="footer__links">
            <h4>Quick Links</h4>
            {NAV_LINKS.map(l => <a key={l} href={`#${l.toLowerCase().replace(/ /g, "-")}`}>{l}</a>)}
          </div>
          <div className="footer__contact">
            <h4>Contact Us</h4>
            <p>📞 +91 89774 41149</p>
            <p>📞 +91 77996 65199</p>
            <p>📧 Vikasneralla1402@gmail.com</p>
            <p>📍 Downtown City Center, Hyderabad</p>
          </div>
        </div>
        <div className="footer__map" style={{ marginTop: '2rem', borderRadius: '12px', overflow: 'hidden', height: '300px' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3643.3981529694647!2d78.60638967516553!3d17.41278128347874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI0JzQ2LjAiTiA3OMKwMzYnMzIuMyJF!5e1!3m2!1sen!2sin!4v1778269075467!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="footer__bottom">
          <p>© 2026 PartyRoom India. All rights reserved.</p>
          <p>Made with 🎉 for every celebration</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <Packages />
      <HowItWorks />
      <Testimonials />
      <Team />
      <FAQs />
      <BookingCTA />
      <Footer />
    </>
  );
}
