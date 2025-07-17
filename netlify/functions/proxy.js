const axios = require("axios");

exports.handler = async function (event, context) {
  const { id } = event.queryStringParameters;

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing video ID" }),
    };
  }

  const key = "151336qps4s27btlru8adi"; // Pindahkan key ke sini agar tidak undefined

  try {
    const response = await axios.get(`https://lulustream.com/api/file/info`, {
      params: { key, id },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
