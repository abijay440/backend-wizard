import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Bind to all interfaces (needed on Railway)
const HOST = "0.0.0.0";

// ✅ Enable CORS & JSON
app.use(cors());
app.use(express.json());

// ✅ Health route (Railway uses this for checking)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// ✅ Root route
app.get("/", (req, res) => {
  res.status(200).send("Backend Wizards - Stage 0 running 🪄");
});

// ✅ /me route
app.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    res.json({
      status: "success",
      user: {
        email: "abijay440@gmail.com",
        name: "Abiodun Jegede",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: response.data.fact
    });
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    res.status(500).json({
      status: "error",
      message: "Could not fetch cat fact at the moment.",
      timestamp: new Date().toISOString()
    });
  }
});

// ✅ Keep-alive log (helps keep container warm)
setInterval(() => {
  console.log("💓 Still alive at", new Date().toISOString());
}, 300000); // every 5 minutes

// ✅ Start server
app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running on http://${HOST}:${PORT}`);
});
