const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    service: "AIStoryVerseUSA Publishing Server",
    status: "online"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "AIStoryVerseUSA Publishing Server"
  });
});

app.post("/publish/all", async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Publishing server received the request",
      youtube: {
        status: "ready"
      },
      instagram: {
        status: "ready"
      }
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Publishing failed"
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Publishing server running on port ${PORT}`);
});
