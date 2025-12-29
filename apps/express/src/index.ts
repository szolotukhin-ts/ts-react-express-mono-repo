import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

interface Card {
  id: number;
  title: string;
  paragraph: string;
}

let cards: Card[] = [];

// Use the express.json() middleware
// This must be declared before any route handlers that need to parse JSON bodies
app.use(express.json());

// Routes
app.get("/api/tasks", (req, res) => {
  cards = [];

  for (let i = 0; i < 10; i++) {
    const card: Card = {
      id: cards.length + 1,
      title: `Title ${i}`,
      paragraph: `Paragraph ${i}`,
    };
    cards.push(card);
  }

  res.status(201).json(cards);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
