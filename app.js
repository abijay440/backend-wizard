import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS
app.use(cors());
app.use(express.json());

// ✅ Health route (used by Railway)
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
    const fact = response.data.fact;

    res.json({
      status: "success",
      user: {
        email: "abijay440@gmail.com",
        name: "Abiodun Jegede",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact
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

// ✅ Keep alive (prevent idle shutdown)
setInterval(() => {
  console.log("💓 Still alive at", new Date().toISOString());
}, 300000); // every 5 minutes

// ✅ Start server on 0.0.0.0
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
