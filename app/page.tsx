export default function Home() {
  const products = [
    { name: "Teddy Bear", price: "₹299" },
    { name: "Doll", price: "₹499" },
    { name: "Stationery Kit", price: "₹199" },
    { name: "Artificial Flower", price: "₹149" },
  ];

  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <section
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
        <h1 style={{ fontSize: "50px", marginBottom: "10px" }}>
          Chaturya's World
        </h1>

        <p style={{ fontSize: "20px", maxWidth: "600px" }}>
          Your one-stop shop for toys, stationery, fancy items, gifts & more 💝
        </p>

        <a
          href="#products"
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            background: "#ff4d88",
            color: "#fff",
            borderRadius: "25px",
            textDecoration: "none",
          }}
        >
          Explore Products
        </a>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" style={{ padding: "60px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "35px", marginBottom: "20px" }}>
            About Chaturya's World
          </h2>

          <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
            Welcome to Chaturya's World. We offer a beautiful collection of toys,
            stationery, fancy items, artificial flowers, gift articles, keychains,
            return gifts and many more products for every special occasion.
          </p>
        </div>
      </section>

      {/* ================= PRODUCTS SECTION ================= */}
      <section id="products" style={{ padding: "60px 20px", background: "#f9f9f9" }}>
        <h2 style={{ textAlign: "center", fontSize: "35px", marginBottom: "30px" }}>
          Our Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "auto",
          }}
        >
          {products.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "20px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          background: "#222",
          color: "#fff",
        }}
      >
        <p>© 2026 Chaturya's World. All rights reserved.</p>
      </footer>

    </div>
  );
}