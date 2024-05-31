const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const BACKEND_POINT = 'https://qtify-backend-labs.crio.do';

// Use CORS middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.get('/albums/top', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_POINT}/albums/top`);
    // Assuming the response data structure has different field names
    const topAlbums = response.data.map(album => ({
      albumImage: album.albumImage || album.image || 'default_image_url.jpg',
      follow: album.follow || album.followers || 0,
      slug: album.slug || album.id || 'default-slug',
      songs: album.songs || album.tracks || []
    }));
    res.json(topAlbums);
  } catch (error) {
    console.error('Error fetching top albums:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/albums/new', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_POINT}/albums/new`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching new albums:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/album/:slug', async (req, res) => {
  const slug = req.params.slug;
  try {
    const response = await axios.get(`${BACKEND_POINT}/album/${slug}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching album by slug:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/songs', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_POINT}/songs`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching songs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/faq', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_POINT}/faq`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/genres', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_POINT}/genres`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching genres:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
