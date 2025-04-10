const axios = require("axios");

async function reqesetAxios() {
  try {
    const { data: response } = await axios.get("https://ifconfig.co/json");
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}

reqesetAxios();
