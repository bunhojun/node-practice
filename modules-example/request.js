const axios = require("axios");

(async () => {
  const res = await axios.get("https://google.com");
  console.log(res);
})()