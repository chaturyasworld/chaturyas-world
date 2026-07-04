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
       {/* Hero Section */}
<section
  id="home"
  style={{
    height: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "linear-gradient(135deg, #ffe6f0, #e6f7ff)",
    padding: "20px",
  }}
>
  <h1
    style={{
      fontSize: "50px",
      color: "#ff4081",
      marginBottom: "20px",
    }}
  >
    Welcome to Chaturyas World
  </h1>

  <p
    style={{
      fontSize: "20px",
      maxWidth: "700px",
      lineHeight: "1.8",
    }}
  >
    Toys • Stationery • Fancy Items • Artificial Flowers •
    Return Gifts • Gift Articles
  </p>

  <a
    href="#products"
    style={{
      marginTop: "30px",
      padding: "15px 30px",
      background: "#ff4081",
      color: "#fff",
      borderRadius: "30px",
      textDecoration: "none",
      fontWeight: "bold",
    }}
  >
    Explore Products
  </a>
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
    padding: "80px 20px",
    background: "#f8f8f8",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "38px",
      color: "#ff4081",
      marginBottom: "40px",
    }}
  >
    Our Products
  </h2>

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
          borderRadius: "15px",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <Image
          src={item.image}
          alt={item.name}
          width={180}
          height={180}
          style={{
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />

        <h3 style={{ marginTop: "15px" }}>{item.name}</h3>

        <button
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            background: "#ff4081",
            color: "#fff",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          View Details
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
    </div>
  );
}