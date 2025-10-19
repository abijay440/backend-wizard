import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS for all origins (you can restrict later if needed)
app.use(cors());

// ✅ Optional: parse JSON bodies (good habit)
app.use(express.json());

app.get("/me", async (req, res) => {
  try {
    // Fetch random cat fact
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 5000 });
    const fact = response.data.fact;

    // Prepare response
    const data = {
      status: "success",
      user: {
        email: "abijay440@gmail.com",
        name: "Abiodun Jegede",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(data);

  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    // Handle API or timeout errors gracefully
    res.status(500).json({
      status: "error",
      message: "Could not fetch cat fact at the moment.",
      timestamp: new Date().toISOString()
    });
  }
});

// ✅ Basic root route (optional for testing)
app.get("/", (req, res) => {
  res.send("Backend Wizards - Stage 0 running 🪄");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


