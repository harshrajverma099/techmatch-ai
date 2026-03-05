export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { system, messages } = req.body || {};

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Missing GEMINI_API_KEY on server' });
    }

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    const contents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const body = { contents };
    if (system) {
      body.systemInstruction = { parts: [{ text: system }] };
    }

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    const text =
      data.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('') || '';

    return res.status(200).json({ reply: text });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}

// api/chat.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { system, messages } = req.body || {};

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({ error: 'Missing GEMINI_API_KEY on server' });
    }

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'messages array is required' });
    }

    const contents = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const body = { contents };
    if (system) {
      body.systemInstruction = { parts: [{ text: system }] };
    }

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    const text =
      data.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('') || '';

    return res.status(200).json({ reply: text });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}