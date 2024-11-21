import prisma from "../../db.server.js"; // Import your Prisma client instance

// Function to insert a new user
export const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
    console.log(req.body)
  try {
    // Check if all required fields are provided
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Insert user details into the database
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password, // Make sure the password is hashed before saving
      },
    });

    // Send success response
    res.status(201).json({
      message: "User created successfully!",
      user: newUser,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
      message: "Failed to create user.",
      error: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
    try {
      // Fetch all users from the database
      const users = await prisma.user.findMany();
  
      // Respond with the user data
      res.status(200).json({ message: "Data fetched successfully", users });
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Failed to fetch data", error: error.message });
    }
  };