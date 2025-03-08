import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Member } from "./models/member";
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://topadmin:topadmin4242@topml.bucva.mongodb.net/?retryWrites=true&w=majority&appName=TopML"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.get("/", async (req, res) => {
  res.status(200).json({ message: "Hello World" });
});
// Routes
// Get all members
app.get("/api/members", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

// Create a new member
app.post("/api/members", async (req, res) => {
  const member = new Member(req.body);
  try {
    const newMember = await member.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
});

// Update a member
app.put("/api/members/:id", async (req, res) => {
  const { id } = req.params;
  const { picture, name, role, location } = req.body;

  try {
    const updatedMember = await Member.findByIdAndUpdate(
      id,
      { picture, name, role, location },
      { new: true }
    );
    res.json(updatedMember);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
