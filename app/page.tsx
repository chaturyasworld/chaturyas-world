 import Image from "next/image";
 export default function Home() {
  return (
    <div>

      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
          background: "#ffffff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h2 style={{ color: "#ff4081", margin: 0 }}>
          Chaturyas World
        </h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
       <section id="home" className="hero">

  <div className="hero-bg"></div>

  <div className="overlay"></div>

  <div className="hero-content">
    <h1>Welcome to Chaturyas World</h1>

    <p>
      Your One-Stop Destination for Toys, Stationery,
      Fancy Items, Artificial Flowers,
      Gift Articles & Return Gifts.
    </p>

    <a href="#products" className="hero-btn">
      Shop Now
    </a>
  </div>
</section>
   <section
  id="gallery"
  style={{
    padding: "60px 20px",
    background: "#f9f9f9",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "2rem",
      color: "#ff4081",
      marginBottom: "10px",
    }}
  >
    Our Gallery
  </h2>

  <p
    style={{
      color: "#666",
      marginBottom: "40px",
      fontSize: "1rem",
    }}
  >
    Explore some beautiful gifts and fancy collections available at Chaturya World.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    {[
      "/gallery/gallery1.jpg",
      "/gallery/gallery2.jpg",
      "/gallery/gallery3.jpg",
      "/gallery/gallery4.jpg",
      "/gallery/gallery5.jpg",
      "/gallery/gallery6.jpg",
    ].map((img, index) => (
      <div
        key={index}
        style={{
          overflow: "hidden",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <Image
          src={img}
          alt={`Gallery ${index + 1}`}
          style={{
            width: "100%",
            height: "250px",
            objectFit: "cover",
            transition: "0.4s",
            cursor: "pointer",
          }}
          
        />
      </div>
    ))}
  </div>
</section>
    {/* About Section */}
<section
  id="about"
  style={{
    padding: "90px 20px",
    background: "#fff",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "50px",
    }}
  >
    {/* Left Side Image */}
    <div style={{ flex: "1", minWidth: "300px" }}>
      <Image
        src="/about-store.jpg"
        alt="Chaturyas World"
        width={800}
        height={600}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}
      />
    </div>

    {/* Right Side Content */}
    <div style={{ flex: "1", minWidth: "300px" }}>
      <h2
        style={{
          color: "#ff2d75",
          fontSize: "40px",
          marginBottom: "20px",
        }}
      >
        About Chaturyas World
      </h2>

      <p
        style={{
          color: "#555",
          fontSize: "18px",
          lineHeight: "1.8",
        }}
      >
        Welcome to <strong>Chaturyas World</strong>, your one-stop destination
        for beautiful gifts, toys, stationery, artificial flowers, and unique
        accessories. We are committed to bringing happiness through quality
        products, affordable prices, and friendly customer service.
      </p>

      <div style={{ marginTop: "30px" }}>
        <p>🎁 Premium Gift Collection</p>
        <p>🧸 Toys & Teddy Bears</p>
        <p>📚 Stationery Items</p>
        <p>🌸 Artificial Flowers</p>
        <p>😊 Friendly Customer Service</p>
      </div>
    </div>
  </div>
</section>
     {/* Products Section */}
<section
  id="products"
  style={{
    padding: "90px 20px",
    background: "linear-gradient(to bottom, #ffffff, #fff5f8)",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "42px",
      fontWeight: "700",
      color: "#ff2d75",
      marginBottom: "15px",
    }}
  >
    Our Products
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "#666",
      fontSize: "18px",
      marginBottom: "50px",
      maxWidth: "700px",
      margin: "0 auto 50px",
    }}
  >
    Discover our beautiful collection of gifts, toys, stationery, flowers and
    unique accessories for every special occasion.
  </p>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "25px",
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    {[
      { name: "Teddy Bear", image: "/teddy.png" },
      { name: "Stationery", image: "/stationery.png" },
      { name: "Fancy Items", image: "/fancy.png" },
      { name: "Gift Articles", image: "/gifts.png" },
    ].map((item) => (
      <div
        key={item.name}
        style={{
          background: "#fff",
          borderRadius: "18px",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          transition:"all 0.3s ease" ,
          cursor: "pointer",
        }}
      >
        <Image
          src={item.image}
          alt={item.name}
          width={220}
          height={220}
          style={{
            borderRadius: "12px",
            objectFit: "cover",
            width:"100%",
            height:"220px",
          }}
        />

        <h3 style={{ 
              marginTop: "15px",
              fontSize:"20px",
              fontWeight:"#333",
               }}
               >
                {item.name}
                </h3>

        <button
          style={{
            marginTop: "15px",
            padding: "12px 24px",
            background: "#ff2d75",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            fontWeight:"600",
            cursor: "pointer",
          }}
        >
          Visit Store
        </button>
      </div>
    ))}
  </div>
</section> 
<section id="location" style={{ padding: "80px 20px", textAlign: "center" }}>
  <h2>📍 Visit Our Store</h2>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.600355101544!2d79.30248847486162!3d14.04168768638105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb2d575d29b6c25%3A0x3e4d1aa2cf93e13f!2sChaturya&#39;s%20World!5e0!3m2!1sen!2sin!4v1783435681438!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{
      border: 0,
      borderRadius: "15px",
      width: "100%",
      maxWidth: "1000px",
    }}
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />

  <p style={{ marginTop: "20px", fontSize: "18px" }}>
    <strong>Chaturyas World</strong><br />
    Mangampeta, Obulavaripalli,<br />
    Tirupati, Andhra Pradesh - 516105
  </p>
</section>
 {/* Contact Section */}
<section
  id="contact"
  style={{
    padding: "80px 20px",
    background: "#fff5f8",
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "#ff2d75",
      fontSize: "40px",
      marginBottom: "40px",
    }}
  >
    Contact Us
  </h2>

  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      background: "#fff",
      borderRadius: "20px",
      padding: "40px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      lineHeight: "2",
    }}
  >
    <h3 style={{ color: "#333" }}>📍 Shop Address</h3>
    <p>
      Chaturyas World <br />
      3/96, Street No 3, <br />
      Mangampeta, Tirupati - 516105
    </p>

    <h3 style={{ color: "#333", marginTop: "25px" }}>📞 Phone</h3>
    <p>+91 9550107497</p>

    <h3 style={{ color: "#333", marginTop: "25px" }}>📧 Email</h3>
    <p>chaturyasworld0608@gmail.com</p>

    <h3 style={{ color: "#333", marginTop: "25px" }}>🕒 Working Hours</h3>
    <p>
      Monday - Sunday <br />
      7:00 AM – 9:00 PM
    </p>
  </div> 
  <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
  }}
>
  <a href="https://instagram.com/chaturyasworld_0608" target="_blank">
    📷 Instagram
  </a>

  <a href="https://wa.me/919505551266" target="_blank">
    💬 WhatsApp
  </a>
</div>
</section>
  {/* Footer */}
   <footer
  style={{
    background: "#222",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
    marginTop: "50px",
  }}
>
  <h3
    style={{
      fontSize: "28px",
      marginBottom: "10px",
      color: "#FFD700",
    }}
  >
    Chaturyas World
  </h3>

  <p style={{ margin: "8px 0" }}>
    🎁 Fancy • Gifts • Toys • Stationery • Artificial Flowers
  </p>

  <p style={{ margin: "8px 0" }}>
    📍 Mangampeta, Obulavaripalli,<br />
    Tirupati, Andhra Pradesh - 516105
  </p>

  <p style={{ margin: "8px 0" }}>
    📞 +91 9505551266
  </p>

  <p style={{ margin: "8px 0" }}>
    📧 chaturyasworld0608@gmail.com
  </p>

  <hr
    style={{
      margin: "25px auto",
      width: "80%",
      border: "1px solid rgba(255,255,255,0.2)",
    }}
  />

  <p style={{ fontSize: "14px", color: "#ccc" }}>
    © 2026 Chaturyas World. All Rights Reserved.
  </p>

  <p style={{ fontSize: "14px", color: "#aaa" }}>
    Made with ❤️ for Happy Shopping
  </p>
</footer>
   {/* WhatsApp Floating Button */}
<a
  href="https://wa.me/919505551266"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#25D366",
    color: "white",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    fontSize: "30px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  }}
>
  💬
</a>
    </div>
  );
}