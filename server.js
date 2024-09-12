// server.js
import express from 'express';
import cors from 'cors';
import connectToDatabase from './config/db.js';

const app = express();

// Use CORS to allow your frontend to access the API
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Import your API routes
import getCompanies from './routes/getCompanies.js';
import getCompanyByNumber from './routes/getCompanyByNumber.js';
import postCompanies from './routes/postCompanies.js';
import postFeedback from './routes/postFeedback.js';

// API Endpoints
app.get('/api/companies', getCompanies);
app.get('/api/companies/:company_number', getCompanyByNumber);
app.post('/api/companies', postCompanies);
app.post('/api/feedback', postFeedback);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
