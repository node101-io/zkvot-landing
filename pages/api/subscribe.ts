import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;

      const client = await clientPromise;
      const db = client.db("myDatabase");

      const existingEmail = await db
        .collection("subscriptions")
        .findOne({ email });
      if (existingEmail) {
        return res
          .status(400)
          .json({ message: "Email is already subscribed." });
      }

      const result = await db.collection("subscriptions").insertOne({ email });
      return res
        .status(201)
        .json({ message: "Subscription successful", data: result });
    } catch (error) {
      console.error("Error adding subscription:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
