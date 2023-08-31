const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());

app.get('/api/codeforces-ratings', async (req, res) => {
  try {
    const response = await axios.get('https://codeforces.com/api/user.ratedList');
    const ratedList = response.data.result;
    res.status(200).json(ratedList);
  } catch (error) {
    console.error('Error fetching data from Codeforces API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
