// netlify/functions/fetchVideos.js
export async function handler(event, context) {
  const API_URL = 'https://lulustream.com/api/file/list?key=151336qps4s27btlru8adi';

  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Gagal mengambil data' }),
    };
  }
}
