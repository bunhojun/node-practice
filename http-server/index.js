const http = require("http");

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "nicola tesla"
  },
  {
    id: 1,
    name: "albert einstein"
  },
  {
    id: 2,
    name: "isac newton"
  },
]

const server = http.createServer();

server.on("request", (req, res) => {
  const items = req.url.split("/");
  console.log(items);
  if (req.method === "POST" && items[1] === "friends") {
    req.on("data", (data) => {
      const friend = data.toString();
      friends.push(JSON.parse(friend));
    });
    res.end();
  }else if (req.method === "GET" && items[1] === "friends") {
    res.setHeader("Content-Type", "application/json");
    if (items.length === 3) {
      const friendIndex = +items[2];
      res.end(JSON.stringify(friends[friendIndex]));
    } else {
      res.end(JSON.stringify(friends));
    }
  } else if (items[1] === "messages") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>")
    res.write("<body>")
    res.write("<ul>")
    res.write("<li>aaa</li>")
    res.write("<li>bbb</li>")
    res.write("<li>ccc</li>")
    res.write("</ul>")
    res.write("</body>")
    res.write("</html>")
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
});
