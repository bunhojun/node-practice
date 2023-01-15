const http = require("http");
const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

(async () => {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
})();
