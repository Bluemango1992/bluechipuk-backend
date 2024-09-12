const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Example schema and model
const companySchema = new mongoose.Schema({
    name: String,
    company_number: String,
    address: String,
  });
  
  const Company = mongoose.model('Company', companySchema);
  
  // Fetch all companies
  app.get('/api/companies', async (req, res) => {
    try {
      const companies = await Company.find();
      res.json(companies);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });  

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Example API route
app.get('/', (req, res) => {
  res.send('API is working!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});