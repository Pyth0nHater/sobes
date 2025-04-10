const axios = require("axios");

async function reqesetAxios() {
  try {
    const response = await axios
      .get("https://ifconfig.co/json")
      .then((response) => response.data);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}

reqesetAxios();
