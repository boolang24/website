const axios = require("axios");

exports.handler = async function (event, context) {
  const { id } = event.queryStringParameters;

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing video ID" }),
    };
  }

  try {
    const response = await axios.get(`https://api.lulustream.xyz/api/source/${id}`, {
      headers: {
        "Authorization": "151336qps4s27btlru8adi",
        "Content-Type": "application/json"
      }
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
