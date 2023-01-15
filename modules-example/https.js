const { send, read } = require("./internals");

function request(url, data) {
  send();
  return read();
}

const data = request('https://google.com', {});
console.log(data);
