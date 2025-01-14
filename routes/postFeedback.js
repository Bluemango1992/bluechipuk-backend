// api/postFeedback.js
import connectToDatabase from '../config/db.js';
import Feedback from '../models/Feedback.js';

export default async (req, res) => {
  try {
    await connectToDatabase(); // Connect to the database

    const { feedback } = req.body;

    if (!feedback || feedback.trim() === '') {
      return res.status(400).json({ message: 'Feedback is required' });
    }

    const feedbackEntry = {
      feedback: feedback,
      createdAt: new Date(),
    };

    const result = await Feedback.create(feedbackEntry);

    return res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error in postFeedback route:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
