import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";

mongoose.set('strictQuery', false);

if (mongoose.connection.readyState === 0) {
  mongoose.connect(process.env.MONGODB_URI || "");
}

const Subscriber = mongoose.models.Subscriber || mongoose.model(
  "Subscriber",
  new mongoose.Schema({}, { strict: false })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;

      if (!email)
        return res.status(400).json({ message: "Email is required" });

      const subscription = new Subscriber({
        key: `zkvot-${email}`,
        email: email,
        type: 'zkvot'
      });

      await subscription.save();

      return res.status(201).json({ message: "Subscriber added" });
    } catch (error) {
      console.error("Error adding subscription:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
