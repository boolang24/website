const fetch = require("node-fetch");

exports.handler = async (event) => {
  const videoId = event.queryStringParameters.id;

  if (!videoId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "ID video tidak ditemukan" }),
    };
  }

  try {
    const response = await fetch(`https://api.lulustream.com/api/video/${videoId}`);
    const result = await response.json();

    // Asumsikan API mengembalikan 'video_url' atau semacamnya
    return {
      statusCode: 200,
      body: JSON.stringify({
        video: result.video_url || result.sources?.[0]?.file || null
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Gagal mengambil data" }),
    };
  }
};
