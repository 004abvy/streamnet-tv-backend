const axios = require('axios');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ success: false, error: 'Missing url query parameter' });
  }

  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36',
        'Referer': url
      },
      timeout: 5000
    });

    const contentType = response.headers['content-type'] || 'application/x-mpegURL';
    res.setHeader('Content-Type', contentType);
    return res.send(Buffer.from(response.data));
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Failed to proxy stream: ' + err.message });
  }
};
