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
    {/* About Section */}
<section
  id="about"
  style={{
    padding: "80px 20px",
    background: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "38px",
        color: "#ff4081",
        marginBottom: "20px",
      }}
    >
      About Chaturyas World
    </h2>

    <p
      style={{
        fontSize: "20px",
        lineHeight: "1.8",
        color: "#555",
      }}
    >
      Welcome to Chaturyas World! We are your one-stop destination for
      toys, stationery, fancy items, artificial flowers, gift articles,
      keychains, return gifts and many more beautiful products. Our goal is
      to provide quality products at affordable prices and make every special
      occasion memorable.
    </p>
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
  {/* Contact Section */}
<section
  id="contact"
  style={{
    padding: "80px 20px",
    background: "#ffffff",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "38px",
      color: "#ff4081",
      marginBottom: "20px",
    }}
  >
    Contact Us
  </h2>

  <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
    📍 Chaturyas World
    <br />
    Fancy & Gift Store
  </p>

  <p style={{ fontSize: "18px" }}>
    📞 +91 9550107497
  </p>

  <p style={{ fontSize: "18px" }}>
    📧 chaturyasworld0608@gmail.com
  </p>

  <p style={{ fontSize: "18px" }}>
    🕒 Open: 7:00 AM – 9:00 PM
  </p>
</section> 
  {/* Footer */}
<footer
  style={{
    background: "#222",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  }}
>
  <p>© 2026 Chaturyas World. All Rights Reserved.</p>
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