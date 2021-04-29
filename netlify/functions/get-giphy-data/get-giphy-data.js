const process = require("process");

const axios = require("axios");
const qs = require("qs");

const handler = async function (event) {
  const API_PARAMS = qs.stringify(event.queryStringParameters);
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&${API_PARAMS}`;

  try {
    const { data } = await axios.get(URL);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    const { status, statusText, headers, data } = error.response;
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
