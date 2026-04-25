const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/showtimes", (req, res) => {
  res.json([
    {
      id: 1,
      title: "Dune: Part Two",
      showtimes: [
        { cinema: "Verdi", time: "18:00", language: "VOSE" },
        { cinema: "Cinesa Diagonal Mar", time: "20:30", language: "IMAX VOSE" }
      ]
    }
  ]);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Server running"));
