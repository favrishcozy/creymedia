// Vercel serverless function for News API proxy
// This file should be moved to /api/news-proxy.js in the project root for Vercel deployment

import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { country = 'ng', category = 'general' } = req.query;
  const apiKey = process.env.NEWS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'News API key not configured' });
  }

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    // Cache headers for performance
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate=3600'); // 30 min cache
    res.status(200).json(data);
  } catch (error) {
    console.error('News API error:', error);
    res.status(500).json({ error: 'Failed to fetch from News API' });
  }
}
