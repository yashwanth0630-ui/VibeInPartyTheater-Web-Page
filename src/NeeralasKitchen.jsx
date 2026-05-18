import "./NeeralasKitchen.css";
import VideoCard from "./VideoCard";
const vidReveal = "/kitchen_reveal_vid.MOV";
const vidTray = "/LoopingVidTray(NEW).mp4";

const MENU_DATA = {
  "BURGERS (VEG/NON-VEG)": [
    "Popular Veg Burger", "Veg Deluxe Burger", "Chicken Burger", 
    "Crispy Chicken Burger", "Double Chicken Burger", "Chicken Deluxe"
  ],
  "GARLIC BREAD": [
    { name: "Garlic Bread Plain", desc: "4 Slice of bread toasted with garlic butter" },
    { name: "Garlic Bread with Cheese", desc: "4 Slice of bread toasted with garlic butter & Cheese" },
    { name: "Garlic Bread Spice", desc: "4 Slice of bread toasted with garlic butter, Cheese & Chilli flakes" }
  ],
  "MILKSHAKES": [
    "Wonder Vanilla", "Choco Blast", "Tropica Mango", "Butterscotch", "Green Apple", 
    "Strawberry Twist", "Black Current", "Oreo Choco Fudge", "Blueberry", 
    "Kitkat Choco Mist", "Browine", "Badam Milk Shake", "Pista Milk Shake"
  ],
  "THICK SHAKE": [
    "Wonder Vanilla", "Choco Blast", "Tropoica Mango", "Butterscotch", "Green Apple", 
    "Strawberry Twist", "Black Current", "Oreo Choco Fudge", "Blueberry", 
    "Kitkat Choco Mist", "Browine", "Badam Milk Shake", "Pista Milk Shake", 
    "Lotus Biscoff Thick Shake"
  ],
  "SANDWICH": [
    { name: "Paneer Grill Sandwich", desc: "Tandoori Paneer + Onion" },
    { name: "Cheese Chicken Grill Sandwich", desc: "Cheese + Keema Chicken + Onion" }
  ],
  "WRAPS": [
    "Crunchy Veg Wrap", "Crunchy Chicken Wrap", "Spicy Chicken Wrap", "Paneer Wrap"
  ],
  "VEG SIDE KICKS": [
    "French Fries Regular", "French Fries Large", "Veg Strips (5 Pcs)", 
    "Smile Crispy Chips (4 Pcs)", "Veg Nuggets (8 Pcs)", "Veg Cheese Nuggets (8 Pcs)"
  ],
  "NON-VEG SIDE KICKS": [
    "Fried Chicken (1 PC)", "Chicken Popcorn (R)", "Chicken Popcorn (L)", 
    "Chicken Nuggets (8 Pcs)", "Boneless Chicken Strips (3 Pcs)", "Chicken Wings (3 Pcs)"
  ],
  "CHICKEN BUCKET": [
    "Chicken Wings Bucket (12 Pcs)", "Boneless Crispy Chicken Strips Bucket (12 Pcs)", 
    "Chicken Popcorn Bucket", "Hot Fried Chicken (4 Pcs) Regular", "Fried Chicken (8 Pcs) Large",
    { name: "Chicken Mingles Bucket", desc: "6 Pcs Chicken Wings + 3 Pcs Boneless Strips" },
    { name: "Boneless Crunchy Chicken Bucket", desc: "6 Pcs Boneless Strips + Chicken Popcorn (Large)" },
    { name: "Bone Crunchy Chicken Bucket", desc: "2 Pcs Fried Chicken + 6 Pcs Chicken Wings" },
    { name: "Triple Blockbuster Bucket", desc: "2 Pcs Fried Chicken + 6 Pcs Chicken Wings + Chicken Popcorn Large" },
    { name: "Monster Bucket", desc: "3 Pcs Fried Chicken + 6 Pcs Chicken Wings + 6 Pcs Boneless Strips" }
  ],
  "DESSERTS": [
    "Browine", "Browine with Ice cream"
  ],
  "BEVERAGES": [
    "Thumbs up", "Water bottle"
  ]
};

const SERVICES = [
  { title: "Full‑Course Catering", desc: "From starter to dessert, we handle everything with love and precision." },
  { title: "Home‑Style Meals", desc: "Authentic recipes prepared fresh daily for small gatherings." },
  { title: "Corporate Events", desc: "Professional service for meetings, launches and team‑building meals." },
];

export default function NeeralasKitchen() {
  return (
    <div className="neeralas-page">
      {/* Hero */}
      <section className="nk-hero" id="hero">
        <div className="nk-hero__bg">
          <video className="nk-hero__video" autoPlay muted loop playsInline preload="metadata">
            <source src={vidReveal} type="video/mp4" />
          </video>
          <div className="nk-hero__overlay" />
        </div>
        <div className="nk-hero__content">
          <h1 className="nk-hero__title">Neerala's Kitchen</h1>
          <p className="nk-hero__tagline">Home‑cooked love for every occasion</p>
          <div className="nk-hero__contact-badge">📞 +91 89774 41149</div>
          <a href="#menu" className="btn btn--primary nk-hero__cta">Explore Menu →</a>
        </div>
      </section>

      {/* Video Cards Section */}
      <section className="nk-section" id="vibe">
        <div className="container">
          <h2 className="section__title">Kitchen Vibes</h2>
          <div className="nk-video-grid">
            <VideoCard 
              src={vidReveal} 
              title="The Big Reveal" 
              description="Witness the magic of our kitchen coming to life."
            />
            <VideoCard 
              src={vidTray} 
              title="Freshly Served" 
              description="Quality ingredients, prepared with passion."
            />
          </div>
        </div>
      </section>

      {/* Creative Modular Menu Section */}
      <section className="nk-modular-menu" id="menu">
        <div className="container">
          <div className="nk-modular-header">
            <h2 className="nk-modular-title">Our Culinary Collection</h2>
            <p className="nk-modular-subtitle">Handpicked delights, crafted fresh every day.</p>
          </div>
          
          <div className="nk-menu-bento-grid">
            {Object.entries(MENU_DATA).map(([category, items]) => (
              <div key={category} className={`nk-menu-chunk nk-chunk-${category.toLowerCase().replace(/[^a-z]/g, '')}`}>
                <div className="nk-chunk-inner">
                  <h3 className="nk-chunk-title">{category}</h3>
                  <div className="nk-chunk-items">
                    {items.map((item, idx) => (
                      <div key={idx} className="nk-chunk-item">
                        <span className="nk-item-bullet"></span>
                        <div className="nk-item-text">
                          <span className="nk-item-name">
                            {typeof item === 'string' ? item : item.name}
                          </span>
                          {typeof item !== 'string' && item.desc && (
                            <p className="nk-item-hint">{item.desc}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Sections */}
      <section className="nk-section nk-why-us">
        <div className="container">
          <div className="nk-creative-grid">
            <div className="nk-creative-card">
              <h3>🌱 Fresh Ingredients</h3>
              <p>We source our vegetables and meat daily to ensure the highest quality for your meals.</p>
            </div>
            <div className="nk-creative-card">
              <h3>👨‍🍳 Professional Chefs</h3>
              <p>Our team consists of experienced culinary experts dedicated to authentic flavors.</p>
            </div>
            <div className="nk-creative-card">
              <h3>🚀 Fast Delivery</h3>
              <p>Hot and fresh food delivered right to your doorstep within minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="nk-section" id="services">
        <div className="container">
          <h2 className="section__title">Our Services</h2>
          <div className="nk-services-grid">
            {SERVICES.map((s) => (
              <div key={s.title} className="nk-service-card">
                <h3 className="nk-service-card__title">{s.title}</h3>
                <p className="nk-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings / Testimonials */}
      <section className="nk-section" id="ratings">
        <div className="container">
          <h2 className="section__title">What Our Guests Say</h2>
          <div className="nk-testimonials-grid">
            <div className="nk-testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="nk-testimonial-card__text">"The burgers are a must-try! Neerala's Kitchen never disappoints with their quality and taste."</p>
              <div className="nk-testimonial-card__author">
                <div className="nk-testimonial-card__avatar">SR</div>
                <div>
                  <div className="nk-testimonial-card__name">Sanjay Rao</div>
                  <div className="nk-testimonial-card__role">Happy Customer</div>
                </div>
              </div>
            </div>
            <div className="nk-testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="nk-testimonial-card__text">"The thick shakes are incredible. Best place in Hyderabad for quick bites and refreshing drinks."</p>
              <div className="nk-testimonial-card__author">
                <div className="nk-testimonial-card__avatar">AD</div>
                <div>
                  <div className="nk-testimonial-card__name">Anita Desai</div>
                  <div className="nk-testimonial-card__role">Foodie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="nk-footer">
      <div className="container">
        <div className="nk-footer__top">
          <div className="nk-footer__brand">
            <h2 style={{ color: 'var(--pink)', marginBottom: '1rem' }}>Neerala's Kitchen</h2>
            <p>Home-cooked love for every occasion. Authentic flavors, professional service.</p>
          </div>
          <div className="nk-footer__contact">
            <h4>Contact Us</h4>
            <p>📞 +91 89774 41149</p>
            <p>📞 +91 77996 65199</p>
            <p>📧 Vikasneralla1402@gmail.com</p>
            <p>📍 Downtown City Center, Hyderabad</p>
          </div>
        </div>
        <div className="nk-footer__map" style={{ marginTop: '2rem', borderRadius: '12px', overflow: 'hidden', height: '300px' }}>
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
        <div className="nk-footer__bottom" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--card-border)', textAlign: 'center' }}>
          <p>© 2026 Neerala's Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

