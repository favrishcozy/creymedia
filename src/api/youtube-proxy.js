// Vercel serverless function for YouTube API proxy
// This file should be moved to /api/youtube-proxy.js in the project root for Vercel deployment

import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { channelId, maxResults = 6, type = 'uploads' } = req.query;
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'YouTube API key not configured' });
  }

  let url;
  if (type === 'live') {
    // Search for live broadcasts
    url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;
  } else {
    // Get latest uploads
    url = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&channelId=${channelId}&order=date&maxResults=${maxResults}&key=${apiKey}`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    // Cache headers for performance
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600'); // 5 min cache
    res.status(200).json(data);
  } catch (error) {
    console.error('YouTube API error:', error);
    res.status(500).json({ error: 'Failed to fetch from YouTube API' });
  }
}
