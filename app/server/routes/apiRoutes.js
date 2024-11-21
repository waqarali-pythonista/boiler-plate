import { Router } from "express";
import { getData } from "../controllers/data.js"; // Import the correct function

const router = Router();

// Define a route to return the data
router.get("/data", async (req, res) => {
  try {
    const data = await getData(); // Call the controller function
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong." });
  }
});

export default router;
