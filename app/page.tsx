export default function Home() {
  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">
          <img src="/logo.png" alt="Chaturya's World Logo" />

          <div>
            <h2 style={{ color: "#E91E63" }}>Chaturya's World</h2>
            <h3>Fancy & Gift Store</h3>
          </div>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#location">Location</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
<section id="home" className="hero">
  <div className="container">
    <h1
      style={{
        fontSize: "60px",
        fontWeight: "bold",
        marginBottom: "20px",
      }}
    >
      Welcome to <br />
      <span style={{ color: "#FFD700" }}>Chaturya's World</span>
    </h1>

    <p
      style={{
        fontSize: "24px",
        marginBottom: "15px",
      }}
    >
      Your One-Stop Fancy & Gift Store
    </p>

    <p
      style={{
        fontSize: "18px",
        marginBottom: "35px",
        maxWidth: "750px",
        margin: "0 auto 35px",
        lineHeight: "1.8",
      }}
    >
      Discover Teddy Bears, Fancy Items, Stationery, Customized Gifts,
      Gift Articles, Keychains and many more beautiful products for
      every special occasion.
    </p>

    <a href="#products" className="btn">
      Explore Products
    </a>
  </div>
</section>
      {/* About */}
      <section id="about" style={{ background: "#fff" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2>About Chaturya's World</h2>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "2",
              fontSize: "22px",
            }}
          >
            Welcome to Chaturya's World. We offer a beautiful collection of
            toys, stationery, fancy items, artificial flowers, gift articles,
            keychains, return gifts and many more products for every special
            occasion.
          </p>
        </div>
      </section>
            {/* Location */}
      <section id="location" style={{ background: "#f8fafc" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2>📍 Visit Our Store</h2>

          <p style={{ marginTop: "20px", fontSize: "22px" }}>
            Chaturya's World
          </p>

          <p style={{ marginTop: "20px", fontSize: "20px" }}>
            Street no-3, Mangampeta, 
            Obulavaripalli, 
            Tirupati, 516105 
            </p>
            <p>-  </p>



             <p>Open Daily : 7:00 AM – 9:00 PM</p>

        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>📞 Contact Us</h2>

          <p style={{ marginTop: "24px" }}>
            📱 Mobile : +91 9550107497
          </p>

          <p>💬 WhatsApp : +91 9505551266</p>

          <p>📧 Email : chaturyasworld0608@gmail.com</p>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/+91 9505551266"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "#fff",
          padding: "15px 18px",
          borderRadius: "50%",
          fontSize: "28px",
          textDecoration: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,.3)",
        }}
      >
        💬
      </a>

      {/* Footer */}
      <footer
        style={{
          background: "#1E3A8A",
          color: "white",
          textAlign: "center",
          padding: "30px",
        }}
      >
        <h3>Chaturya's World</h3>

        <p>Your One-Stop Fancy & Gift Store</p>

        <br />

        <p>© 2026 Chaturya's World. All Rights Reserved.</p>
      </footer>
    </>
  );
}